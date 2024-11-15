import * as style from './index.css';
import Button from '@/src/components/forms/Button';
import Modal from '@/src/components/overlays/Modal';
import Text from '@/src/components/typographies/Text';
import {
  TherapySessionStatusEnum,
  useTherapySessionsQuery
} from '@/src/gql/generated/graphql';

type CounselingHistoryModalProps = {
  isVisible: boolean;
  closeModalHandler: () => void;
  therapyUserId: string;
};

const CounselingHistoryModal = ({
  isVisible,
  closeModalHandler,
  therapyUserId
}: CounselingHistoryModalProps) => {
  const { data } = useTherapySessionsQuery({
    variables: {
      input: {
        status: [TherapySessionStatusEnum.Canceled, TherapySessionStatusEnum.Completed],
        userId: therapyUserId
      }
    }
  });

  console.log('user history : ', data);

  return (
    <Modal.WithButton
      title="이전 상담 이력"
      isPartialDim
      isVisible={isVisible}
      size={'medium'}
      variant={'basic'}
      cancelButton={
        <Button styleType={'secondarySmooth'} onClick={closeModalHandler}>
          닫기
        </Button>
      }
      confirmButton={<></>}
      closeModalHandler={closeModalHandler}
      contentChildren={
        <div className={style.content}>
          <section className={style.section}>
            <Text type={'body2_400'} color={'GRAY_60'}>
              2024.08.03
            </Text>
            <div className={style.sectionTitle}>
              <Text type={'heading5_600'} color={'GRAY_80'}>
                직장 및 진로
              </Text>
              <div className={style.counselingStyle}>
                <span className={style.counselingStyleText}>현실적인 조언</span>
              </div>
            </div>
            <div>
              <Text className={style.noteFromUser} type={'body1_400'} color={'GRAY_80'}>
                쉼이 필요한가 싶어 한달 푹 쉬었는데 오히려 더 악화되어서 일에 집중도
                안되고 그냥 지금 하고 싶은 건 밥먹기 눕기 자기 티비보기 이것만 반복하고
                싶어요.
                <br />
                그런 생각만 하다보니까 우울해서 갑자기 눈물이 주르륵 흘렀어요.
              </Text>
            </div>
            <div className={style.memo}>
              <Text type={'body1_400'} color={'GRAY_80'}>
                상담사가 작성한 메모
              </Text>
              <br />
              <Text className={style.noteFromUser} type={'body1_400'} color={'GRAY_80'}>
                가다나다라마바
              </Text>
            </div>
          </section>

          <section className={style.section}>
            <Text type={'body2_400'} color={'GRAY_60'}>
              2024.08.03
            </Text>
            <div className={style.sectionTitle}>
              <Text type={'heading5_600'} color={'GRAY_80'}>
                직장 및 진로
              </Text>
              <div className={style.counselingStyle}>
                <span className={style.counselingStyleText}>현실적인 조언</span>
              </div>
            </div>
            <div>
              <Text className={style.noteFromUser} type={'body1_400'} color={'GRAY_80'}>
                쉼이 필요한가 싶어 한달 푹 쉬었는데 오히려 더 악화되어서 일에 집중도
                안되고 그냥 지금 하고 싶은 건 밥먹기 눕기 자기 티비보기 이것만 반복하고
                싶어요.
                <br />
                그런 생각만 하다보니까 우울해서 갑자기 눈물이 주르륵 흘렀어요.
              </Text>
            </div>
            <div className={style.memo}>
              <Text type={'body1_400'} color={'GRAY_80'}>
                상담사가 작성한 메모
              </Text>
              <br />
              <Text className={style.noteFromUser} type={'body1_400'} color={'GRAY_80'}>
                가다나다라마바
              </Text>
            </div>
          </section>

          <section className={style.section}>
            <Text type={'body2_400'} color={'GRAY_60'}>
              2024.08.03
            </Text>
            <div className={style.sectionTitle}>
              <Text type={'heading5_600'} color={'GRAY_80'}>
                직장 및 진로
              </Text>
              <div className={style.counselingStyle}>
                <span className={style.counselingStyleText}>현실적인 조언</span>
              </div>
            </div>
            <div>
              <Text className={style.noteFromUser} type={'body1_400'} color={'GRAY_80'}>
                쉼이 필요한가 싶어 한달 푹 쉬었는데 오히려 더 악화되어서 일에 집중도
                안되고 그냥 지금 하고 싶은 건 밥먹기 눕기 자기 티비보기 이것만 반복하고
                싶어요.
                <br />
                그런 생각만 하다보니까 우울해서 갑자기 눈물이 주르륵 흘렀어요.
              </Text>
            </div>
            <div className={style.memo}>
              <Text type={'body1_400'} color={'GRAY_80'}>
                상담사가 작성한 메모
              </Text>
              <br />
              <Text className={style.noteFromUser} type={'body1_400'} color={'GRAY_80'}>
                가다나다라마바
              </Text>
            </div>
          </section>
        </div>
      }
    ></Modal.WithButton>
  );
};

export default CounselingHistoryModal;
