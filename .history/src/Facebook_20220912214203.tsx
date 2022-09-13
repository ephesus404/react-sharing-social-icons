// const handleFacebookClick = () => {

import React, { CSSProperties, FC, ReactNode } from 'react';

type WindowSize = string | undefined;
type Target = string | undefined;

interface SharedProps {
  styles?: CSSProperties;
  className?: string;
  children: ReactNode;
  onClick?: ({ event, handleWindowOpen }: any) => void;
}

interface UseGenerateHrefProps {
  href: string;
  windowSize?: WindowSize;
  target?: Target;
}

interface FacebookShareProps extends SharedProps, UseGenerateHrefProps {
  url: string;
}

const useGenerateURLHandler = (
  url: string,
  target?: string,
  windowSize?: string
) => {
  const link = `https://www.facebook.com/sharer/sharer.php?u=${url}`;
  return () => window.open(link, target, `${windowSize}`);
};

const FacebookIcon = ({ style, classname }) => <svg />;

export const FacebookShare: FC<FacebookShareProps> = ({
  children,
  url,
  windowSize,
  target,
  className,
  styles,
  onClick: propOnClick,
}) => {
  const handleWindowOpen = useGenerateURLHandler(url);

  const onClick = (event: any) => {
    if (propOnClick) {
      return propOnClick({ event, handleWindowOpen });
    }

    handleWindowOpen();
  };

  return (
    <button style={styles} className={className} onClick={onClick}>
      {children ? children : <FacebookIcon />}
    </button>
  );
};
