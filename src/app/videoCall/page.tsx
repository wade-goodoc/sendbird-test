'use client';
import * as style from './index.css';
import Text from '@/src/components/typographies/Text';
import InfoIcon from '@/src/assets/icons/ic_info.svg';
import AdjustIcon from '@/src/assets/icons/ic_adjust.svg';
import MicrophoneIcon from '@/src/assets/icons/ic_microphone.svg';
import VideoIcon from '@/src/assets/icons/ic_video.svg';
import CallEndIcon from '@/src/assets/icons/ic_call_end.svg';
import LoadingIcon from '@/src/assets/icons/ic_loading.svg';
import ArrowIcon from '@/src/assets/icons/ic_arrow_small.svg';
import {
  COUNSELING_SPECIALTY,
  COUNSELING_STYLE,
  COUNSELING_TOPIC
} from '@/src/constants/counseling';
import LikeIcon from '@/src/assets/icons/ic_like_green.svg';
import Textarea from '@/src/components/forms/Textarea';
import { useSearchParams } from 'next/navigation';
import { useTherapySessionQuery } from '@/src/gql/generated/graphql';
import FemaleIcon from '@/src/assets/icons/ic_gender_female.svg';
import Button from '@/src/components/forms/Button';
import Modal from '@/src/components/overlays/Modal';
import { useEffect } from 'react';
import SendBirdCall from 'sendbird-calls';
import { useRecoilValue } from 'recoil';
import { therapistInfo } from '@/src/store/auth';
// import useSendbird from '@/src/hooks/sendbird/useSendbird';

const VideoCallPage = () => {
  const searchParams = useSearchParams();
  const id = searchParams.get('id');
  const { sendbirdUserId } = useRecoilValue(therapistInfo);

  const { data } = useTherapySessionQuery({
    variables: {
      therapySessionId: id || ''
    }
  });

  // useSendbird();

  const authenticateUser = async () => {
    console.log('sendbird : ', sendbirdUserId);
    // await SendBirdCall.authenticate({ userId: sendbirdUserId }, (result, error) => {
    //   if (error) console.log('authentication error', error);
    //   if (result) console.log('authentication success', result);
    // });

    await SendBirdCall.connectWebSocket()
      .then(() => {
        console.log('socket connected');
        enterRoom();
      })
      .catch(() => console.log('socket failed'));
  };

  const enterRoom = async () => {
    SendBirdCall.fetchRoomById('23328a6c-4f9b-43c4-83d1-9790b4e959d7')
      .then(async (room) => {
        console.log('get room : ', room);
        const enterParams = {
          videoEnabled: true,
          audioEnabled: true
        };

        await room
          .enter(enterParams)
          .then(() => {
            console.log('enter room success');
          })
          .catch((e) => {
            console.log('enter room failed');
          });

        const localMediaView = document.getElementById('local_video_element');

        if (localMediaView) {
          room.localParticipant.setMediaView(localMediaView as HTMLMediaElement);
          room.on('remoteParticipantStreamStarted', (remoteParticipant) => {
            const remoteMediaView = document.getElementById('remote_video_element');
            if (remoteMediaView) {
              remoteParticipant.setMediaView(remoteMediaView as HTMLMediaElement);
            }
          });
        }
      })
      .catch((e) => {
        // Handle error
      });
  };

  useEffect(() => {
    SendBirdCall.init('0D5C3247-59D7-4F13-8A4F-446EC0BA4087');

    authenticateUser();
  }, []);

  return (
    <div className={style.container}>
      <div className={style.contentWrap}>
        <div className={style.top}>
          <button className={style.topButton} type={'button'}>
            <InfoIcon />
            <Text type={'caption1_600'} color={'ALPHA_WHITE_80'}>
              신고하기
            </Text>
          </button>
          <button className={style.topButton} type={'button'}>
            <InfoIcon />
            <Text type={'caption1_600'} color={'ALPHA_WHITE_80'}>
              내담자 화면 끄기
            </Text>
          </button>
        </div>

        <div className={style.content}>
          <div className={style.videoScreen}>
            <div className={style.currentInfo}>
              <LoadingIcon />
              <div className={style.currentInfoTitle}>
                <Text type={'heading2_500'} color={'WHITE'}>
                  내담자의 입장을
                  <br />
                  기다리고 있습니다.
                </Text>
              </div>
              <div>
                <Text type={'heading4_500'} color={'RED_50'}>
                  내담자가 n분 이내 입장하지 않으면
                  <br />
                  환불 없이 상담이 자동 취소됩니다.
                </Text>
              </div>
            </div>
            <video
              id="remote_video_element"
              autoPlay
              playsInline
              className={style.remoteVideoStyle}
            ></video>

            <div className={style.therapistVideoScreen}>
              <video
                id="local_video_element"
                autoPlay
                playsInline
                muted
                className={style.localVideoStyle}
              ></video>
            </div>
          </div>
          <div className={style.therapyInfo}>
            <div className={style.therapyInfoTop}>
              <div className={style.therapyInfoTitleWrap}>
                <FemaleIcon width={36} height={36} />
                <h1 className={style.therapyInfoTitle}>
                  <Text type={'heading3_700'} color={'GRAY_90'}>
                    {data?.therapySession?.therapyUser.nickname}
                  </Text>
                  <span className={style.therapyInfoTitleDot}></span>
                  <Text type={'heading3_700'} color={'GRAY_90'}>
                    30대
                  </Text>
                </h1>
              </div>
              <Button styleType={'secondaryOutline'}>이전 상담 이력 3건</Button>
            </div>

            <section className={style.section}>
              <div className={style.sectionBox}>
                <div className={style.infoRow}>
                  <div className={style.infoLabel}>
                    <Text type={'body1_400'} color={'GRAY_60'}>
                      상담상품
                    </Text>
                  </div>
                  <div className={style.infoValue}>
                    <Text type={'body1_500'} color={'GRAY_90'}>
                      {data?.therapySession?.product.method === 'video'
                        ? '50분 화상상담'
                        : '50분 채팅상담'}
                    </Text>
                  </div>
                </div>
                <div className={style.infoRow}>
                  <div className={style.infoLabel}>
                    <Text type={'body1_400'} color={'GRAY_60'}>
                      상담일시
                    </Text>
                  </div>
                  <div className={style.infoValueAlignCenter}>
                    <Text type={'body1_500'} color={'GRAY_90'}>
                      2024.08.30 10:00
                    </Text>
                    <button className={style.rescheduleButton}>
                      <Text type={'body2_500'} color={'GRAY_60'}>
                        일정 변경
                      </Text>
                      <ArrowIcon />
                    </button>
                  </div>
                </div>
                <div className={style.infoRow}>
                  <div className={style.infoLabel}>
                    <Text type={'body1_400'} color={'GRAY_60'}>
                      고려사항
                    </Text>
                  </div>
                  <div className={style.infoValue}>
                    <Text type={'body1_500'} color={'GRAY_90'}>
                      {data?.therapySession?.specialty &&
                        COUNSELING_SPECIALTY[data.therapySession.specialty]}
                    </Text>
                  </div>
                </div>
                <div className={style.infoRow}>
                  <div className={style.infoLabel}>
                    <Text type={'body1_400'} color={'GRAY_60'}>
                      신청정보
                    </Text>
                  </div>
                  <div className={style.infoValue}>
                    <div className={style.descriptionTitle}>
                      <Text type={'body1_700'} color={'GRAY_90'}>
                        {data?.therapySession?.topic &&
                          COUNSELING_TOPIC[data.therapySession.topic]}
                      </Text>
                      <div className={style.counselingStyle}>
                        <LikeIcon />
                        <Text type={'caption2_700'} color={'GREEN_80'}>
                          {data?.therapySession?.style &&
                            COUNSELING_STYLE[data.therapySession.style]}
                        </Text>
                      </div>
                    </div>
                    <Text type={'body1_400'} color={'GRAY_80'}>
                      {data?.therapySession?.noteFromUser}
                    </Text>
                  </div>
                </div>
              </div>
            </section>

            <section className={style.section}>
              <h2 className={style.sectionTitle}>
                <Text type={'heading4_700'} color={'GRAY_90'}>
                  상담 메모
                </Text>
              </h2>
              <Textarea
                placeholder={'메모를 입력해주세요'}
                containerClassName={style.textarea}
              />
            </section>
          </div>
        </div>

        <div className={style.bottom}>
          <button className={style.bottomIconButton} type={'button'}>
            <AdjustIcon />
          </button>
          <Text type={'body1_700'} color={'WHITE'}>
            00:38
          </Text>
          <div className={style.bottomRightButtons}>
            <button className={style.bottomIconButton} type={'button'}>
              <MicrophoneIcon />
            </button>
            <button className={style.bottomIconButton} type={'button'}>
              <VideoIcon />
            </button>
            <button className={style.callEndButton} type={'button'}>
              <CallEndIcon />
              <Text type={'body2_700'} color={'WHITE'}>
                상담종료
              </Text>
            </button>
          </div>
        </div>
      </div>

      <Modal isVisible={false}>
        <div className={style.modalInner}></div>
      </Modal>
    </div>
  );
};

export default VideoCallPage;
