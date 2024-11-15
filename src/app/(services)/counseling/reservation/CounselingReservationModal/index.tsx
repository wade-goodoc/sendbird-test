import Button from '@/src/components/forms/Button';
import * as style from './index.css';
import Text from '@/src/components/typographies/Text';
import FemaleIcon from '@/src/assets/icons/ic_gender_female.svg';
import MaleIcon from '@/src/assets/icons/ic_gender_male.svg';
import Select from '@/src/components/forms/Select';
import Modal from '@/src/components/overlays/Modal';
import React, { useState } from 'react';
import { useRecoilState } from 'recoil';
import { counselingReservationModal } from '@/src/store/counseling';
import useToast from '@/src/hooks/toast/useToast';
import { GenderEnum, useConfirmAppointmentMutation } from '@/src/gql/generated/graphql';
import dayjs from 'dayjs';
import useModal from '@/src/hooks/modal/useModal';
import 'dayjs/locale/ko';
dayjs.locale('ko');
const CounselingReservationModal = () => {
  const [modal, setModal] = useRecoilState(counselingReservationModal);
  const { showToast } = useToast();
  const { showModal } = useModal();
  const TIME = 50;
  const [date, setDate] = useState(dayjs(new Date()).toDate());
  const [startDateTime, setStartDateTime] = useState(
    dayjs(date)
      .add(3, 'hour')
      .minute(parseInt(String(dayjs(new Date()).minute() / 10 + 1)) * 10)
  );
  const [endDateTime, setEndDateTime] = useState(
    dayjs(startDateTime).add(TIME, 'minute')
  );
  const [errorMessage, setErrorMessage] = useState('');
  const [confirmMutation] = useConfirmAppointmentMutation();

  return (
    <Modal.WithButton
      isVisible={modal.isVisible}
      size="medium"
      variant="basic"
      title="예약 일정"
      isPartialDim={true}
      closeModalHandler={() => {
        setModal({
          isVisible: false,
          item: undefined
        });
      }}
      contentChildren={
        <>
          <div className={style.notice}>
            <Text type="body1_500" color="GRAY_60">
              현재 시점 3시간 후부터 최대 한 달 전 일정까지 예약할 수 있습니다.
            </Text>
          </div>
          <div className={style.nameContainer}>
            {modal?.item?.therapyUser.gender === GenderEnum.Female ? (
              <FemaleIcon width={28} height={28} />
            ) : (
              <MaleIcon width={28} height={28} />
            )}
            <div>
              <Text type="heading5_600" color={'GRAY_90'}>
                {modal?.item?.therapyUser?.nickname}{' '}
                {`(${parseInt(String((modal?.item?.therapyUser?.age as number) / 10))}0대)`}
              </Text>
            </div>
          </div>
          <div className={style.inputContainer}>
            <div>
              <Text type="body1_500" color={'GRAY_60'}>
                날짜
              </Text>
              <Select.Date
                minDate={dayjs(new Date()).toDate()}
                maxDate={dayjs(dayjs(new Date()).add(1, 'month')).toDate()}
                selected={date}
                onChange={(date) => {
                  setDate(date as Date);
                }}
              />
            </div>

            <div>
              <Text type="body1_500" color={'GRAY_60'}>
                시간
              </Text>
              <div className={style.timeContainer}>
                <Select.Time
                  value={{
                    hour: dayjs(startDateTime).format('HH'),
                    minute: dayjs(startDateTime).format('mm')
                  }}
                  minuteInterval={10}
                  onChange={(hour, minute) => {
                    setStartDateTime(
                      dayjs(date).hour(Number(hour)).minute(Number(minute))
                    );
                    setEndDateTime(
                      dayjs(
                        dayjs(date)
                          .hour(Number(hour))
                          .minute(Number(minute))
                          .add(TIME, 'minute')
                      )
                    );
                  }}
                />
                <Text type="body1_500" color={'GRAY_60'}>
                  &nbsp;-&nbsp;
                </Text>
                <Select.Time
                  disabled={true}
                  value={{
                    hour: dayjs(endDateTime).format('HH'),
                    minute: dayjs(endDateTime).format('mm')
                  }}
                  minuteInterval={10}
                  onChange={() => {}}
                />
              </div>
              <div>
                {errorMessage && (
                  <Text type="body2_500" color={'RED_60'}>
                    {errorMessage}
                  </Text>
                )}
              </div>
            </div>
          </div>
        </>
      }
      cancelButton={
        <Button
          styleType="secondarySmooth"
          size="small"
          onClick={() => {
            setModal({
              isVisible: false,
              item: undefined
            });
          }}
        >
          닫기
        </Button>
      }
      confirmButton={
        <Button
          styleType="primarySolid"
          size="small"
          onClick={async () => {
            await confirmMutation({
              variables: {
                therapySessionId: modal.item?.id as string,
                scheduledTime: dayjs(startDateTime).locale('ko')
              },
              onCompleted: () => {
                showToast({
                  label: `${dayjs(startDateTime).format('M월 d일 dddd H시 m분로 예약을 확정했습니다.')}`,
                  type: 'success'
                });
                modal?.onNext && modal?.onNext();
                setModal({
                  isVisible: false,
                  item: undefined
                });
              },
              onError: (error) => {
                setErrorMessage(error.message);
                showModal({
                  isVisible: true,
                  title: '예약 시간을 변경해주세요.',
                  message: error.message
                });
              }
            });
          }}
        >
          확정하기
        </Button>
      }
    />
  );
};
export default CounselingReservationModal;
