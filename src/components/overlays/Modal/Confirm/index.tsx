import Button from '@/src/components/forms/Button';
import Modal from '@/src/components/overlays/Modal';
import Text from '@/src/components/typographies/Text';
import React from 'react';
import { useRecoilState } from 'recoil';
import { modalData } from '@/src/store/modal';

const ConfirmModal: React.FunctionComponent = () => {
  const [modal, setModal] = useRecoilState(modalData);

  return (
    <Modal.WithButton
      size="small"
      variant="basic"
      isVisible={modal.isVisible}
      cancelButton={<></>}
      confirmButton={
        <Button
          styleType="primarySolid"
          size="small"
          onClick={() => {
            setModal({
              isVisible: false
            });
          }}
        >
          확인
        </Button>
      }
      isPartialDim={true}
      contentChildren={
        <>
          <div>{modal.title && <Text type="heading4_700">{modal.title}</Text>}</div>
          {modal.message && (
            <Text type="body1_500" color={'GRAY_70'}>
              {modal.message}
            </Text>
          )}
        </>
      }
    />
  );
};

export default ConfirmModal;
