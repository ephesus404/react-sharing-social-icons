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
// = "width=500,height=500";
interface UseGenerateHrefProps {
  href: string;
  windowHeight?: number;
  windowWidth?: number;
  target?: Target;
}

interface FacebookShareProps extends SharedProps, UseGenerateHrefProps {
  url: string;
  // Generic
  wrapperElement?: ({ children, onClick }) => ReactNode;
}

const buildWindowSize = ({ width, height }) =>
  `width=${width},height=${height}`;

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

const Button = ({ styles, buttonClassName, onClick, children }: any) => (
  <button style={styles} className={buttonClassName} onClick={onClick}>
    {children}
  </button>
);

export const FacebookShare: FC<FacebookShareProps> = ({
  children,
  url,
  windowSize,
  target,
  buttonClassName,
  iconClassName,
  styles,
  wrapperElement: WrapperElement,
  onClick: propOnClick,
  wrapperProps = {},
}) => {
  const handleWindowOpen = useGenerateURLHandler(url);

  const onClick = (event: any) => {
    if (propOnClick) {
      return propOnClick({ event, handleWindowOpen });
    }

    handleWindowOpen();
  };

  return (
    <Button
      styles={styles}
      buttonClassName={buttonClassName}
      onClick={onClick}
      {...wrapperProps}
    >
      {children ? children : <FacebookIcon className={iconClassName} />}
    </Button>
  );
};
