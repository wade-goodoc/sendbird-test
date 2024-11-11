'use client';
import Input from '@/src/components/forms/Input';
import * as style from './index.css';
import { useEffect, useState } from 'react';
import SendBirdCall from 'sendbird-calls';
import Button from '@/src/components/forms/Button';

// 화사상담 접속 용 테스트 페이지.
const TestVideoCall = () => {
  const [user, setUser] = useState('juice.yoon');
  const authOption = { userId: user };

  const authenticateUser = async () => {
    console.log('인증 및 소켓연결 : ', user);
    await SendBirdCall.authenticate(authOption, (result, error) => {
      if (error) console.log('authentication error', error);
      if (result) console.log('authentication success', result);
    });

    await SendBirdCall.connectWebSocket()
      .then(() => console.log('socket connected'))
      .catch(() => console.log('socket failed'));
  };

  const createRoom = async () => {
    const roomParams = {
      roomType: SendBirdCall.RoomType.SMALL_ROOM_FOR_VIDEO
    };

    SendBirdCall.createRoom(roomParams)
      .then((room) => {
        console.log('testVideoCall', room);
      })
      .catch((e) => {
        console.log('testVideoCall error', e);
      });
  };

  const enterRoom = async () => {
    SendBirdCall.fetchRoomById('23328a6c-4f9b-43c4-83d1-9790b4e959d7')
      .then(async (room) => {
        console.log('get room : ', room);
        // `room` with the identifier `ROOM_ID` is fetched from the Sendbird Server.
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

        const localMediaView = document.getElementById('local_video_element_id');
        // Set local media view.

        if (localMediaView) {
          room.localParticipant.setMediaView(localMediaView as HTMLMediaElement);
          // Called when a remote participant is connected to the media stream and starts sending the media stream.
          room.on('remoteParticipantStreamStarted', (remoteParticipant) => {
            // Create a new HTMLMediaElement to set remote participant's media stream.
            const remoteMediaView = document.getElementById('remote_video_element_id');

            // It is recommended to set a media view element's autoplay property to true.
            remoteParticipant.setMediaView(remoteMediaView as HTMLMediaElement);
          });
        }
      })
      .catch((e) => {
        // Handle error
      });
  };

  return (
    <div className={style.container}>
      <div className={style.content}>
        <div style={{ marginBottom: 10 }}>
          <Input
            placeholder={'userId'}
            value={user}
            onChange={(e) => setUser(e.target.value)}
          />
        </div>
        <Button
          styleType={'secondarySmooth'}
          fullWidth
          onClick={createRoom}
          style={{ marginBottom: 10 }}
        >
          방만들기
        </Button>
        <div className={style.buttons}>
          <Button
            className={style.button}
            styleType={'primaryOutline'}
            fullWidth
            onClick={authenticateUser}
          >
            인증 및 소켓연결
          </Button>
          <Button className={style.button} styleType={'primarySolid'} onClick={enterRoom}>
            입장하기
          </Button>
        </div>

        <div className={style.videoView}>
          <div style={{ width: 200, height: 360 }}>
            <video
              id="local_video_element_id"
              autoPlay
              style={{
                width: '100%',
                height: '100%',
                objectFit: 'cover',
                backgroundColor: '#999'
              }}
            ></video>
          </div>

          <div style={{ width: 200, height: 360 }}>
            <video
              id="remote_video_element_id"
              autoPlay
              style={{
                width: '100%',
                height: '100%',
                objectFit: 'cover',
                backgroundColor: '#999'
              }}
            ></video>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TestVideoCall;
