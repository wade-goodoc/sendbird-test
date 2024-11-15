'use client';

import '../styles/globals.css';
import '@/src/utils/analytics';
import React from 'react';
import '@/src/libs/sendbird';
import { graphQLClient } from '@/src/libs/apollo-client';
import { RecoilRoot } from 'recoil';
import { ApolloProvider } from '@apollo/client';
import { Portal } from '@/src/app/portal';
import Toast from '@/src/components/feedbacks/Toast';
import Script from 'next/script';
import Modal from '../components/overlays/Modal';
import { SbCallsProvider } from '@/src/libs/sendbird-calls';
import Auth from '@/src/components/auth';

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <head>
        <Script
          id="cloud-gate-sdk"
          strategy="beforeInteractive"
          src="https://public-common-sdk.s3.ap-northeast-2.amazonaws.com/sdk/cloud/Twc.plugin.js"
        />

        <Script
          id="cloud-gate"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `(function() {
            Twc('init', {
                brandKey: "0UPb0TxSCK-CZVHHZIH0nw",
                channelType: "scenario",
                scenarioId: "MzMwMQ==",
                name:"굿닥 파트너스",
                buttonOption: {
                    showLauncher: true,
                    zIndex: 10,
                    bottom: 25,
                    right: 25
                }
            });
        })();
        `
          }}
        />
      </head>

      <body>
        <ApolloProvider client={graphQLClient}>
          <RecoilRoot>
            <SbCallsProvider>
              <Portal.Provider>
                <Auth />
                {children}
                <Toast />
                <Modal.Confirm />
              </Portal.Provider>
            </SbCallsProvider>
          </RecoilRoot>
        </ApolloProvider>
      </body>
    </html>
  );
}
