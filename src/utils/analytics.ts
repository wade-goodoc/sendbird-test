'use client';
import * as amplitude from '@amplitude/analytics-browser';
import ReactGA from 'react-ga4';

//앰플리튜드 세팅
if (typeof window !== 'undefined') {
  amplitude.init(`${process.env.NEXT_PUBLIC_AMPLITUDE_API_KEY}`, {
    defaultTracking: true
  });
}

//GA 세팅
ReactGA.initialize(`${process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID}`);

const track = (eventName: string, properties?: Record<string, any> | undefined) => {
  if (typeof window !== 'undefined') {
    amplitude.track(eventName, { ...properties });

    ReactGA.event(eventName, { ...properties });
  }
};

export { track };
