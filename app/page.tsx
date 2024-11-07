'use client';

import React, { useEffect } from 'react';
import Text from '@/src/components/typographies/Text';
import useToast from '@/src/hooks/toast/useToast';

export default function Home() {
  const { showToast } = useToast();

  useEffect(() => {
    showToast({ label: 'aasadfasda', type: 'error' });
  }, []);

  return (
    <main>
      <Text type="body1_400" color={'BLUE_60'}>
        content
      </Text>
    </main>
  );
}
