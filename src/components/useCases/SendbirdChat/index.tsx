'use client';

import * as style from '@/src/components/useCases/GlobalNavigationBar/index.css';
import React, { useState } from 'react';
import { SendBirdProvider } from '@sendbird/uikit-react';

const SendbirdChat = () => {
  const [currentChannelUrl, setCurrentChannelUrl] = useState(null);

  return (
    <SendBirdProvider
      appId={process.env.NEXT_PUBLIC_SENDBIRD_APPID || ''}
      userId={'gd-pt-therapist01'}
      nickname={'상담사01'}
      profileUrl={''}
      accessToken={''}
    >
      <div className={style.sendbirdChatContainer}>
        <>
          {/*<ChannelList*/}
          {/*  onChannelCreated={(channel) => {*/}
          {/*    setCurrentChannelUrl(channel.url);*/}
          {/*  }}*/}
          {/*  onChannelSelect={(channel) => {*/}
          {/*    setCurrentChannelUrl(channel.url);*/}
          {/*  }}*/}
          {/*/>*/}
          {/*<Channel channelUrl={currentChannelUrl} />*/}
          {/*<ChannelSettings channelUrl={currentChannelUrl} />*/}
        </>
      </div>
    </SendBirdProvider>
  );
};

export default SendbirdChat;
