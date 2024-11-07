import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';
import SendBirdCall, { DirectCall } from 'sendbird-calls';

const useSendbird = () => {
  const router = useRouter();
  const [call, setCall] = useState<DirectCall | null>(null);
  const [isAudioEnabled, setIsAudioEnabled] = useState(true);
  const [isVideoEnabled, setIsVideoEnabled] = useState(true);
  const [isFrontCamera, setIsFrontCamera] = useState(true);
  const [isCallStarted, setIsCallStarted] = useState(false);

  useEffect(() => {
    // Get appId and calleeId from session storage
    const appId = '0D5C3247-59D7-4F13-8A4F-446EC0BA4087';
    const calleeId = 'jackson.hong';
    const callerId = 'juice.yoon';
    console.log('appId: >>>>', appId);
    console.log('calleeId: >>>>', calleeId);
    if (!appId || !calleeId) {
      alert('Missing Application ID or Callee ID. Returning to home page.');
      router.push('/');
      return;
    }

    // Initialize SendBirdCall
    SendBirdCall.init(appId);

    // Authenticate user (You may want to generate a random user ID or prompt the user)
    // const userId = `user_${new Date().getTime()}`;
    authenticateUser(callerId || '111111')
      .then(() => {
        startCall(calleeId);
      })
      .catch((error) => {
        console.error('Authentication error:', error);
        alert('Authentication failed. Returning to home page.');
        router.push('/');
      });

    // const mediaAccess = SendBirdCall.useMedia({ audio: true, video: true });
    // console.log("Medica Access: >>>>", mediaAccess);

    // Cleanup on component unmount
    return () => {
      if (call) {
        call.end();
      }
    };
  }, []);

  const authenticateUser = async (userId: string) => {
    if (!isCallStarted) {
      console.log('setIsCallStarted >>>>', isCallStarted);
      setIsCallStarted(true);
      const authOption = {
        userId
        // accessToken: "7fbdfd30f719766d3838973cf58f5967f461b00f",
      };
      const user = await SendBirdCall.authenticate(authOption).catch((error) => {
        console.log('ERROR IN AUTHENTICATE >>>', error);
      });
      console.log('USER >>>>', user);
      const socket = await SendBirdCall.connectWebSocket().catch((error) => {
        console.log('ERROR IN CONNECTING WEB SOCKET >>>>', error);
      });
      console.log('SOCKET >>>>', socket);
    }
  };

  const startCall = (calleeId: string) => {
    const localVideoView = document.getElementById(
      'local_video_element'
    ) as HTMLVideoElement;
    const remoteVideoView = document.getElementById(
      'remote_video_element'
    ) as HTMLVideoElement;

    const dialParams = {
      userId: calleeId,
      isVideoCall: true,
      callOption: {
        localMediaView: localVideoView,
        remoteMediaView: remoteVideoView,
        audioEnabled: isAudioEnabled,
        videoEnabled: isVideoEnabled
      }
    };

    const directCall = SendBirdCall.dial(dialParams, (call, error) => {
      if (error) {
        console.error('Dial error:', error);
        alert('Failed to make a call. Returning to home page.');
        router.push('/');
        return;
      }
      setCall(call as DirectCall);
    });

    directCall.onEnded = (call) => {
      console.log('Call ended:', call);
      router.push('/');
    };
  };

  const endCall = () => {
    if (call) {
      call.end();
      router.push('/');
    }
  };

  const toggleAudio = () => {
    if (call) {
      if (isAudioEnabled) {
        call.muteMicrophone();
      } else {
        call.unmuteMicrophone();
      }
      setIsAudioEnabled(!isAudioEnabled);
    }
  };

  const toggleVideo = () => {
    if (call) {
      if (isVideoEnabled) {
        call.stopVideo();
      } else {
        call.startVideo();
      }
      setIsVideoEnabled(!isVideoEnabled);
    }
  };

  const switchCamera = () => {
    if (call) {
      //   call.switchCamera();

      //switch Camera logic
      setIsFrontCamera(!isFrontCamera);
    }
  };

  return {
    endCall,
    toggleAudio,
    toggleVideo,
    switchCamera
  };
};

export default useSendbird;
