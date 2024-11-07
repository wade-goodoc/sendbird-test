import * as style from './index.css';

type BoxContainerProps = {
  className?: string;
  children?: React.ReactNode;
};

const BoxContainer = ({ className, children }: BoxContainerProps) => {
  return <div className={`${style.container} ${className}`}>{children}</div>;
};

export default BoxContainer;
