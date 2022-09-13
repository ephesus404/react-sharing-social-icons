// const handleFacebookClick = () => {

import React, { cloneElement, CSSProperties, FC, ReactNode } from 'react';

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

const FacebookIcon = ({ style, iconClassName }) => (
  <svg className={iconClassName} />
);

const Button = () => (
  <button style={styles} className={buttonClassName} onClick={onClick}></button>
);

export const FacebookShare: FC<FacebookShareProps> = ({
  children,
  url,
  windowSize,
  target,
  buttonClassName,
  iconClassName,
  styles,
  wrapperElement,
  onClick: propOnClick,
}) => {
  const handleWindowOpen = useGenerateURLHandler(url);

  const onClick = (event: any) => {
    if (propOnClick) {
      return propOnClick({ event, handleWindowOpen });
    }

    handleWindowOpen();
  };

  const Wrapper = cloneElement();

  return (
    <button style={styles} className={buttonClassName} onClick={onClick}>
      {children ? children : <FacebookIcon className={iconClassName} />}
    </button>
  );
};
