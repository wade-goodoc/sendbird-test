import * as style from './index.css';
import BoxContainer from '@/src/app/(auth)/components/BoxContainer';
import Text from '@/src/components/typographies/Text';
import React, { useState } from 'react';
import Input from '@/src/components/forms/Input';
import Button from '@/src/components/forms/Button';
import Select from '@/src/components/forms/Select';

const CertificationForm = () => {
  const [phone, setPhone] = useState('');

  return (
    <div>
      <BoxContainer className={style.container}>
        <h2 className={style.title}>
          <Text type={'heading3_700'} color={'GRAY_90'}>
            본인 확인
          </Text>
        </h2>
        <div className={style.inputWrap}>
          <Text className={style.inputLabel} type={'body2_500'} color={'GRAY_70'}>
            이름
          </Text>
          <Input placeholder={'2자 이상 입력해주세요'} />
        </div>
        <div className={style.inputWrap}>
          <Text className={style.inputLabel} type={'body2_500'} color={'GRAY_70'}>
            생년월일 ∙ 성별
          </Text>
          <div className={style.residentNumber}>
            <Input.Number
              layoutClassName={style.frontResidentNumber}
              placeholder={'생년월일 6자리'}
              maxLength={6}
            />
            <Text className={style.dash} type={'body1_400'} color={'GRAY_80'}>
              -
            </Text>
            <Input.Number
              layoutClassName={style.backResidentNumber}
              inputClassName={style.backResidentNumberInput}
              maxLength={1}
            />
            <Text className={style.hiddenNumbers} type={'body1_400'} color={'GRAY_40'}>
              ●●●●●●
            </Text>
          </div>
        </div>
        <div className={style.inputWrap}>
          <Text className={style.inputLabel} type={'body2_500'} color={'GRAY_70'}>
            휴대폰 번호
          </Text>
          <Select
            placeholder={'통신사를 선택해주세요'}
            items={[
              { label: 'SKT', value: 'skt' },
              { label: 'KT', value: 'ktf' },
              { label: 'LG U+', value: 'lgt' },
              { label: 'SKT 알뜰폰', value: 'skm' },
              { label: 'KT 알뜰폰', value: 'ktm' },
              { label: 'LG U+ 알뜰폰', value: 'lgm' }
            ]}
          />
          <div className={style.certificationNumberButton}>
            <Input.Phone
              value={phone}
              placeholder={'숫자만 입력해주세요'}
              onChange={(value) => setPhone(value)}
            />
            <Button styleType={'secondarySolid'} size={'medium'}>
              인증번호 받기
            </Button>
          </div>
          <div className={style.errorMessage}>
            <Text type={'caption1_400'} color={'RED_60'}>
              인증번호 재전송은 3회까지만 가능해요
            </Text>
          </div>
        </div>

        <div className={style.inputWrap}>
          <Text className={style.inputLabel} type={'body2_500'} color={'GRAY_70'}>
            인증번호
          </Text>
          <div>
            <Input placeholder={'인증번호를 입력해주세요'} />
          </div>
          <div className={style.errorMessage}>
            <Text type={'caption1_400'} color={'RED_60'}>
              인증시간이 초과되었어요
            </Text>
          </div>
        </div>

        <Button styleType={'primarySolid'} size={'medium'} fullWidth>
          확인
        </Button>
      </BoxContainer>
    </div>
  );
};

export default CertificationForm;
