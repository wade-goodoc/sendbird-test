'use client';
import * as style from './index.css';
import Text from '@/src/components/typographies/Text';
import InfoIcon from '@/src/assets/icons/ic_info.svg';
import AdjustIcon from '@/src/assets/icons/ic_adjust.svg';
import MicrophoneIcon from '@/src/assets/icons/ic_microphone.svg';
import MicrophoneOffIcon from '@/src/assets/icons/ic_microphone_off.svg';
import CameraIcon from '@/src/assets/icons/ic_camera.svg';
import CameraOffIcon from '@/src/assets/icons/ic_camera_off.svg';
import CallEndIcon from '@/src/assets/icons/ic_call_end.svg';
import LoadingIcon from '@/src/assets/icons/ic_loading.svg';
import { useRouter, useSearchParams } from 'next/navigation';
import { useEffect, useMemo, useState } from 'react';
import { useSbCalls } from '@/src/libs/sendbird-calls';
import EndCallModal from '@/src/app/videoCall/components/EndCallModal';
import TherapyInfo from '@/src/app/videoCall/components/TherapyInfo';
import { useStartCounselingMutation } from '@/src/gql/generated/graphql';
import useToast from '@/src/hooks/toast/useToast';
import { ApolloError } from '@apollo/client';
import { useRecoilState } from 'recoil';
import { roomIdOnCall as roomIdInStore } from '@/src/store/counseling';
// import useSendbird from '@/src/hooks/sendbird/useSendbird';

const VideoCallPage = () => {
  const sbCalls = useSbCalls();
  const { user, rooms } = sbCalls;
  const searchParams = useSearchParams();
  const router = useRouter();

  const therapySessionId = searchParams.get('therapySessionId');
  const roomId = searchParams.get('roomId');

  const { showToast } = useToast();

  const [startCounseling] = useStartCounselingMutation({
    variables: {
      therapySessionId: therapySessionId || ''
    },
    onError: (error: ApolloError) => {
      showToast({ type: 'error', label: error.message }, 3000);
    }
  });

  const [roomIdOnCall, setRoomIdOnCall] = useRecoilState(roomIdInStore);

  const enterRoom = async () => {
    if (!roomId) return;

    const room = await sbCalls.fetchRoomById(roomId);

    const enterParams = {
      videoEnabled: true,
      audioEnabled: true
    };

    await room
      .enter(enterParams)
      .then(() => {
        console.log('enter room success');
        if (!roomIdOnCall) startCounseling();
        setRoomIdOnCall(roomId);
      })
      .catch((e) => {
        console.log('enter room failed');
      });

    // const localMediaView = document.getElementById('local_video_element');
    //
    // if (localMediaView) {
    //   await room.localParticipant.setMediaView(localMediaView as HTMLMediaElement);
    //   room.on('remoteParticipantStreamStarted', (remoteParticipant) => {
    //     const remoteMediaView = document.getElementById('remote_video_element');
    //     if (remoteMediaView) {
    //       remoteParticipant.setMediaView(remoteMediaView as HTMLMediaElement);
    //     }
    //   });
    // }
  };

  // useSendbird();

  // const authenticateUser = async () => {
  //   console.log('sendbird : ', sendbirdUserId);
  //   await SendBirdCall.authenticate({ userId: sendbirdUserId }, (result, error) => {
  //     if (error) console.log('authentication error', error);
  //     if (result) console.log('authentication success', result);
  //   });
  //
  //   await SendBirdCall.connectWebSocket()
  //     .then(() => {
  //       console.log('socket connected');
  //       enterRoom();
  //     })
  //     .catch(() => console.log('socket failed'));
  // };

  // useEffect(() => {
  //   SendBirdCall.init('0D5C3247-59D7-4F13-8A4F-446EC0BA4087');
  //
  //   authenticateUser();
  // }, []);

  const onCall = useMemo(() => {
    return rooms.find((r) => !!r.localParticipant);
  }, [rooms]);

  useEffect(() => {
    console.log('change rooms : ', rooms);
  }, [rooms]);

  useEffect(() => {
    if (user) enterRoom();
  }, [user]);

  const [isEndCallModalVisible, setIsEndCallModalVisible] = useState(false);

  return (
    <div className={style.container}>
      <div className={style.contentWrap}>
        <div className={style.top}>
          <button className={style.topButton} type={'button'}>
            <InfoIcon />
            <Text type={'caption1_600'} color={'ALPHA_WHITE_80'}>
              신고하기
            </Text>
          </button>
          <button className={style.topButton} type={'button'}>
            <InfoIcon />
            <Text type={'caption1_600'} color={'ALPHA_WHITE_80'}>
              내담자 화면 끄기
            </Text>
          </button>
        </div>

        <div className={style.content}>
          <div className={style.videoScreen}>
            {!onCall?.remoteParticipants[0] && (
              <div className={style.currentInfo}>
                <LoadingIcon />
                <div className={style.currentInfoTitle}>
                  <Text type={'heading2_500'} color={'WHITE'}>
                    내담자의 입장을
                    <br />
                    기다리고 있습니다.
                  </Text>
                </div>
                <div>
                  <Text type={'heading4_500'} color={'RED_50'}>
                    내담자가 n분 이내 입장하지 않으면
                    <br />
                    환불 없이 상담이 자동 취소됩니다.
                  </Text>
                </div>
              </div>
            )}

            {/*<video*/}
            {/*  id="remote_video_element"*/}
            {/*  autoPlay*/}
            {/*  playsInline*/}
            {/*  className={style.remoteVideoStyle}*/}
            {/*></video>*/}

            {/*<div className={style.therapistVideoScreen}>*/}
            {/*  <video*/}
            {/*    id="local_video_element"*/}
            {/*    autoPlay*/}
            {/*    playsInline*/}
            {/*    muted*/}
            {/*    className={style.localVideoStyle}*/}
            {/*  ></video>*/}
            {/*</div>*/}

            {onCall?.remoteParticipants[0] && (
              <video
                id="remote_video_element"
                autoPlay
                playsInline
                className={style.remoteVideoStyle}
                ref={(el) => {
                  if (!el) return;
                  onCall.remoteParticipants[0].setMediaView(el);
                }}
              ></video>
            )}

            <div className={style.therapistVideoScreen}>
              {onCall?.localParticipant && (
                <video
                  id="local_video_element"
                  autoPlay
                  playsInline
                  muted
                  className={style.localVideoStyle}
                  ref={(el) => {
                    if (!el) return;
                    onCall.localParticipant.setMediaView(el);
                  }}
                ></video>
              )}
            </div>
          </div>

          <TherapyInfo />
        </div>

        <div className={style.bottom}>
          <button className={style.bottomIconButton} type={'button'}>
            <AdjustIcon />
          </button>
          <Text type={'body1_700'} color={'WHITE'}>
            00:38
          </Text>

          <div className={style.bottomRightButtons}>
            {onCall?.localParticipant?.isAudioEnabled ? (
              <button
                className={style.bottomIconButton}
                type={'button'}
                onClick={() => onCall?.localParticipant?.muteMicrophone()}
              >
                <MicrophoneIcon />
              </button>
            ) : (
              <button
                className={style.bottomIconButton}
                type={'button'}
                onClick={() => onCall?.localParticipant?.unmuteMicrophone()}
              >
                <MicrophoneOffIcon />
              </button>
            )}

            {onCall?.localParticipant?.isVideoEnabled ? (
              <button
                className={style.bottomIconButton}
                type={'button'}
                onClick={() => onCall?.localParticipant?.stopVideo()}
              >
                <CameraIcon />
              </button>
            ) : (
              <button
                className={style.bottomIconButton}
                type={'button'}
                onClick={() => onCall?.localParticipant?.startVideo()}
              >
                <CameraOffIcon />
              </button>
            )}

            <button
              className={style.callEndButton}
              type={'button'}
              onClick={() => {
                setIsEndCallModalVisible(true);
              }}
            >
              <CallEndIcon />
              <Text type={'body2_700'} color={'WHITE'}>
                상담종료
              </Text>
            </button>
          </div>
        </div>
      </div>

      <EndCallModal
        therapySessionId={therapySessionId || ''}
        onCall={onCall}
        isVisible={isEndCallModalVisible}
        setIsVisible={setIsEndCallModalVisible}
      />
    </div>
  );
};

export default VideoCallPage;
