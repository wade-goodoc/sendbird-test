import { useSetRecoilState } from 'recoil';
import { modalData, modalProps } from '@/src/store/modal';

const useModal = () => {
  const setModal = useSetRecoilState(modalData);

  const showModal = (modalProps: modalProps) => {
    setModal(modalProps);
  };

  return { showModal };
};

export default useModal;
