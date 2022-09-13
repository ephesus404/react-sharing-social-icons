// const handleFacebookClick = () => {

import React, { CSSProperties, FC, ReactNode, MouseEventHandler } from 'react';

type WindowSize = string | undefined;
type Target = string | undefined;

interface SharedProps {
  styles?: CSSProperties;
  className?: string;
  children: ReactNode;
  onClick?: (event: MouseEventHandler<HTMLButtonElement>) => void;
}

interface UseGenerateHrefProps {
  href: string;
  windowSize?: WindowSize;
  target?: Target;
}

interface FacebookShareProps extends SharedProps, UseGenerateHrefProps {
  url: string;
}

const useGenerateURL = (url: string) => {
  return `https://www.facebook.com/sharer/sharer.php?u=${url}`;
};

const FacebookIcon = () => <svg />;

export const FacebookShare: FC<FacebookShareProps> = ({
  children,
  url,
  windowSize,
  target,
  className,
  styles,
}) => {
  const link = useGenerateURL(url);

  const onClick = () => {
    window.open(link, target, `${windowSize}`);
  };

  return (
    <button style={styles} className={className} onClick={onClick}>
      {children ? children : <FacebookIcon />}
    </button>
  );
};
