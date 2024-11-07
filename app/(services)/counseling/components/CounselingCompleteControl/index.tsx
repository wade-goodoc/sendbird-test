import * as style from './index.css';
import Text from '@/src/components/typographies/Text';
import Button from '@/src/components/forms/Button';
import DiagnosisIcon from '@/src/assets/icons/ic_diagnosis_light.svg';

const CounselingCompleteControl = () => {
  return (
    <div className={style.container}>
      <div className={style.title}>
        <DiagnosisIcon />
        <Text type={'heading5_700'} color={'WHITE'}>
          상담을 완료해 주세요.
        </Text>
      </div>
      <div className={style.buttonWrap}>
        <Button styleType={'primaryReverseOutline'} size={'small'}>
          다시입장
        </Button>
        <Button styleType={'primaryReverseSolid'} size={'small'}>
          상담시작
        </Button>
      </div>
    </div>
  );
};

export default CounselingCompleteControl;
