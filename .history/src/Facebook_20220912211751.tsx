// const handleFacebookClick = () => {

import { FC, ReactNode } from 'react';

//   };

/**
 *
 */
type WindowSize = string | undefined;
type Target = string | undefined;

interface FacebookShareProps {
  url: string;
  windowSize?: WindowSize;
  target?: Target;
  children: ReactNode;
}

const useGenerateHref = ({ url }: FacebookShareProps) => {
  return `https://www.facebook.com/sharer/sharer.php?u=${url}`;
};

const FacebookIcon = () => <svg />;

const FacebookShare: FC<FacebookShareProps> = ({
  children,
  url,
  windowSize,
  target,
}) => {
  const href = useGenerateHref({ url });

  const onClick = () => {
    window.open(href, target, `${windowSize}`);
  };

  const Icon = children || FacebookIcon;

  return (
    <button onClick={onClick}>{children ? children : <FacebookIcon />}</button>
  );
};

const FOo = () => {
  <FacebookShare> </FacebookShare>;
};
