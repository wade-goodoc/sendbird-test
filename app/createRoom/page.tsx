'use client';
import Input from '@/src/components/forms/Input';
import * as style from './index.css';
import { useEffect } from 'react';
import SendBirdCall from 'sendbird-calls';
import Button from '@/src/components/forms/Button';

// 화사상담 room 생성을 위한 테스트 페이지.
const CreateRoom = () => {
  const authOption = { userId: 'jackson.hong' };

  const authenticateUser = async () => {
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
        console.log('createRoom', room);
      })
      .catch((e) => {
        console.log('createRoom error', e);
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
            const remoteMediaView = document.createElement('video');
            // It is recommended to set a media view element's autoplay property to true.
            remoteMediaView.autoplay = true;
            remoteParticipant.setMediaView(remoteMediaView);
            document.body.appendChild(remoteMediaView);
          });
        }
      })
      .catch((e) => {
        // Handle error
      });
  };

  useEffect(() => {
    SendBirdCall.init('0D5C3247-59D7-4F13-8A4F-446EC0BA4087');

    authenticateUser();
  }, []);

  return (
    <div className={style.container}>
      <Input placeholder={'userId'} value={'jackson.hong'} />
      <Button styleType={'primarySolid'} onClick={createRoom}>
        방만들기
      </Button>
      <Button styleType={'secondarySolid'} onClick={enterRoom}>
        입장하기
      </Button>

      <video
        id="local_video_element_id"
        style={{ width: 200, height: 400, backgroundColor: '#eee' }}
      ></video>
    </div>
  );
};

export default CreateRoom;
