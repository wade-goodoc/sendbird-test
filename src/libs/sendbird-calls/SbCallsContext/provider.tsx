'use client';
import React, { ReactElement, useCallback, useEffect, useMemo, useReducer } from 'react';
import SendBirdCall, { AuthOption, DirectCall } from 'sendbird-calls';
// import SendbirdCall, { LoggerLevel, sdkVersion, SoundType, RoomType } from 'sendbird-calls';
// import SendbirdCall, {
//   LoggerLevel,
//   sdkVersion,
//   SoundType,
//   RoomType
// } from 'sendbird-calls';

import SendbirdCall from 'sendbird-calls';

import CallContext, { initialContext } from './context';
import type { ContextType } from './context';
import { reducer } from './reducer';
import { initialState } from './state';
import {
  // statefyDirectCall,
  statefyRoom
} from './statefy';
import { useRecoilValue } from 'recoil';
import { therapistInfo } from '@/src/store/auth/index';

// console.log({ SoundType, sdkVersion });

const SbCallsProvider = ({ children }: { children: ReactElement }): JSX.Element => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const { sendbirdUserId } = useRecoilValue(therapistInfo);
  // const { calls } = state;
  // const currentCall = useMemo(() => calls.find((call) => !call.isEnded), [calls]);
  // const isBusy = useMemo(() => calls.some((call) => !call.isEnded), [calls]);

  const init = async (appId: string) => {
    SendbirdCall.init(appId);

    await SendBirdCall.authenticate({ userId: sendbirdUserId }, (result, error) => {
      if (error) console.log('authentication error', error);
      if (result) console.log('authentication success', result);
    });
    await SendBirdCall.connectWebSocket()
      .then(() => console.log('socket connected'))
      .catch(() => console.log('socket failed'));
  };

  useEffect(() => {
    init(process.env.NEXT_PUBLIC_SENDBIRD_APPID || '');
  }, []);

  const ringingListenerId = 'sb-call-listener';
  const auth = async (authOption: AuthOption) => {
    const user = await SendbirdCall.authenticate(authOption);
    // SendbirdCall.addListener(ringingListenerId, {
    //   onRinging: (call: DirectCall) => {
    //     dispatch({ type: 'RINGING', payload: statefyDirectCall(call, dispatch) });
    //   },
    //   onAudioInputDeviceChanged: (current, available) => {},
    //   onAudioOutputDeviceChanged: (current, available) => {},
    //   onVideoInputDeviceChanged: (current, available) => {}
    // });
    await SendbirdCall.connectWebSocket();

    dispatch({ type: 'AUTH', payload: user });
    return user;
  };

  const deauth = useCallback<ContextType['deauth']>(() => {
    SendbirdCall.removeListener(ringingListenerId);
    SendbirdCall.deauthenticate();
    dispatch({ type: 'DEAUTH' });
  }, []);

  /* Media Device Control */
  const updateMediaDevices = useCallback<ContextType['updateMediaDevices']>(
    (constraints) => {
      SendbirdCall.updateMediaDevices(constraints);
    },
    []
  );

  const selectAudioInputDevice = useCallback<ContextType['selectAudioInputDevice']>(
    (mediaInfo: InputDeviceInfo) => {
      SendbirdCall.selectAudioInputDevice(mediaInfo);
      dispatch({
        type: 'UPDATE_AUDIO_INPUT_DEVICE_INFO',
        payload: { current: mediaInfo }
      });
    },
    []
  );

  const selectAudioOutputDevice = useCallback<ContextType['selectAudioOutputDevice']>(
    (mediaInfo: MediaDeviceInfo) => {
      SendbirdCall.selectAudioOutputDevice(mediaInfo);
      dispatch({
        type: 'UPDATE_AUDIO_OUTPUT_DEVICE_INFO',
        payload: { current: mediaInfo }
      });
    },
    []
  );

  const selectVideoInputDevice = useCallback<ContextType['selectVideoInputDevice']>(
    (mediaInfo: InputDeviceInfo) => {
      SendbirdCall.selectVideoInputDevice(mediaInfo);
      dispatch({
        type: 'UPDATE_VIDEO_INPUT_DEVICE_INFO',
        payload: { current: mediaInfo }
      });
    },
    []
  );

  /* Direct Calls */
  // const dial = useCallback<ContextType['dial']>(
  //   (params) =>
  //     new Promise((res, rej) => {

  //       SendbirdCall.dial(params, (call, error) => {
  //         const statefulCall = statefyDirectCall(call as DirectCall, dispatch);
  //         if (error) {
  //           rej(error);
  //           return;
  //         }
  //         dispatch({ type: 'ADD_CALL', payload: statefulCall });
  //         res(statefulCall);
  //       });
  //     }),
  //   []
  // );
  //
  // const clearCalls = useCallback(() => {
  //   dispatch({ type: 'CLEAR_CALLS' });
  // }, []);

  /* Rooms */
  const createRoom = useCallback<ContextType['createRoom']>(async (options) => {
    const room = await SendbirdCall.createRoom(options);
    const statefulRoom = statefyRoom(room, dispatch);
    dispatch({ type: 'ADD_ROOM', payload: statefulRoom });
    return statefulRoom;
  }, []);

  const getCachedRoomById = useCallback<ContextType['getCachedRoomById']>(
    (roomId) => {
      return state.rooms.find((x) => x.roomId === roomId);
    },
    [state.rooms]
  );

  const fetchRoomById = useCallback<ContextType['fetchRoomById']>(
    async (roomId) => {
      const room = await SendbirdCall.fetchRoomById(roomId);
      const statefulRoom = statefyRoom(room, dispatch);
      if (state.rooms.find((x) => x.roomId === room.roomId)) {
        dispatch({ type: 'UPDATE_ROOM', payload: statefulRoom });
      } else {
        dispatch({ type: 'ADD_ROOM', payload: statefulRoom });
      }
      return statefulRoom;
    },
    [state.rooms]
  );
  const callContext: ContextType = {
    ...initialContext,
    ...state,
    init,
    auth,
    deauth,
    isAuthenticated: !!state.user,

    // Media Device Control
    updateMediaDevices,
    selectAudioInputDevice,
    selectAudioOutputDevice,
    selectVideoInputDevice,

    // Direct Calls
    // currentCall,
    // isBusy,
    // dial,
    // addDirectCallSound: SendbirdCall.addDirectCallSound,
    // clearCalls,

    // Rooms
    createRoom,
    getCachedRoomById,
    fetchRoomById
    // RoomType
  };

  console.log('call context', callContext.calls, callContext.calls.length);
  return <CallContext.Provider value={callContext}>{children}</CallContext.Provider>;
};

export default SbCallsProvider;
