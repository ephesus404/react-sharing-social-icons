// const handleFacebookClick = () => {

import { FC } from 'react';

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
}

const useGenerateHref = ({ url }: FacebookShareProps) => {
  return `https://www.facebook.com/sharer/sharer.php?u=${url}`;
};

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

  return <button onClick={onClick}>Facebook Yay </button>;
};
