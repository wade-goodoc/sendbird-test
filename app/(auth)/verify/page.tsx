'use client';
import React, { useState } from 'react';
import ConfirmCertification from '@/src/app/(auth)/verify/components/ConfirmCertification';
import TermLinks from '@/src/app/(auth)/components/TermLinks';
import CertificationForm from '@/src/app/(auth)/verify/components/CertificationForm';
import CertificationFailModal from '@/src/app/(auth)/verify/components/CertificationFailModal';
import AgreeTermModal from '@/src/app/(auth)/verify/components/AgreeTermModal';

const VerifyPage = () => {
  const [isFormVisible, setIsFormVisible] = useState(false);

  return (
    <div>
      {!isFormVisible && <ConfirmCertification />}
      <CertificationForm />
      <CertificationFailModal isVisible={false} />
      <AgreeTermModal isVisible={false} />
      <TermLinks />
    </div>
  );
};

export default VerifyPage;
