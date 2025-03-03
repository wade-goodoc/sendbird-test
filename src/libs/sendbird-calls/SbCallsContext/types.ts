import type {
  DirectCall,
  LocalParticipant,
  Participant,
  RemoteParticipant,
  Room
} from 'sendbird-calls';
import { ToastProps } from '@/src/components/feedbacks/Toast';

export type CallState =
  | 'dialing'
  | 'ringing'
  | 'established'
  | 'connected'
  | 'reconnecting'
  | 'reconnected'
  | 'ended';

export type AudioInputDeviceInfo = {
  current?: InputDeviceInfo;
  available: InputDeviceInfo[];
};
export type AudioOutputDeviceInfo = {
  current?: MediaDeviceInfo;
  available: MediaDeviceInfo[];
};
export type VideoInputDeviceInfo = {
  current?: InputDeviceInfo;
  available: InputDeviceInfo[];
};

export interface StatefulDirectCall
  extends Pick<
    DirectCall,
    | 'callId'
    | 'caller'
    | 'callee'
    | 'isVideoCall'
    | 'localUser'
    | 'remoteUser'
    | 'isLocalAudioEnabled'
    | 'isRemoteAudioEnabled'
    | 'isLocalVideoEnabled'
    | 'isRemoteVideoEnabled'
    | 'myRole'
    | 'isOngoing'
    | 'endedBy'
    | 'isEnded'
    | 'endResult'
    // | 'callLog'
    // | 'customItems'
    // | 'localRecordingStatus'
    // | 'remoteRecordingStatus'
    | 'localMediaView'
    | 'remoteMediaView'
    | 'setLocalMediaView'
    | 'setRemoteMediaView'
    | 'stopVideo'
    | 'startVideo'
    | 'getDuration'
    | 'accept'
    | 'end'
    | 'muteMicrophone'
    | 'unmuteMicrophone'

    // | 'captureLocalVideoView'
    // | 'captureRemoteVideoView'

    // | 'updateCustomItems'
    // | 'deleteCustomItems'
    // | 'deleteAllCustomItems'

    // | 'startRecording'
    // | 'stopRecording'
  > {
  callState: CallState;
}

export interface StatefulRoom
  extends Pick<
    Room,
    'roomId' | 'roomType' | 'createdAt' | 'createdBy' | 'enter' | 'exit' | 'on'
  > {
  participants: StatefulParticipant[];
  localParticipant: StatefulLocalParticipant;
  remoteParticipants: StatefulRemoteParticipant[];
}

// eslint-disable-next-line
export interface StatefulParticipant
  extends Pick<
    Participant,
    | 'participantId'
    // | 'isLocalParticipant'
    | 'enteredAt'
    | 'updatedAt'
    | 'exitedAt'
    | 'duration'
    | 'state'
    | 'user'
    | 'isAudioEnabled'
    | 'isVideoEnabled'
    | 'setMediaView'
  > {}

export interface StatefulLocalParticipant
  extends StatefulParticipant,
    Pick<
      LocalParticipant,
      | 'isLocalParticipant'
      | 'setLocalMediaView'
      | 'muteMicrophone'
      | 'unmuteMicrophone'
      | 'stopVideo'
      | 'startVideo'
    > {}

export interface StatefulRemoteParticipant
  extends StatefulParticipant,
    Pick<RemoteParticipant, 'isLocalParticipant'> {}
