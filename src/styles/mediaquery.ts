interface DeviceSizeProps {
  [key: string]: number;
}

export const DEVICE_SIZE: DeviceSizeProps = {
  desktop: 1440,
  tablet: 1024,
  mobile: 600
};

const mq = {
  desktop: `screen and (min-width: ${DEVICE_SIZE.desktop}px)`,
  laptop: `screen and (min-width: ${DEVICE_SIZE.tablet}px) and (max-width: ${DEVICE_SIZE.desktop - 1}px)`,
  tablet: `screen and (min-width: ${DEVICE_SIZE.mobile}px) and (max-width: ${DEVICE_SIZE.tablet - 1}px)`,
  mobile: `screen and (max-width: ${DEVICE_SIZE.mobile - 1}px)`
};

export { mq };
