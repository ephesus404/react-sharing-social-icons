// const handleFacebookClick = () => {

import React, { CSSProperties, FC, ReactNode } from 'react';

type WindowSize = string | undefined;
type Target = string | undefined;

interface SharedProps {
  styles?: CSSProperties;
  className?: string;
  //   children: ReactNode;
  handleOnClick?: ({ event, handleWindowOpen }: any) => void;
}
// = "width=500,height=500";
interface UseGenerateHrefProps {
  href: string;
  windowHeight?: number;
  windowWidth?: number;
  target?: Target;
}

interface FacebookShareProps
  extends SharedProps,
    UseGenerateHrefProps,
    React.HTMLAttributes<HTMLButtonElement> {
  url: string;
  // Generic
  wrapperElement?: ({ children, onClick }) => ReactNode;
}

const buildWindowSize = ({
  windowHeight,
  windowWidth,
}: {
  windowHeight: number;
  windowWidth: number;
}) => `width=${windowWidth},height=${windowHeight}`;

const useGenerateURLHandler = (
  url: string,
  target?: string,
  windowHeight = 500,
  windowWidth = 500
) => {
  const link = `https://www.facebook.com/sharer/sharer.php?u=${url}`;
  return () =>
    window.open(link, target, buildWindowSize({ windowHeight, windowWidth }));
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
  windowWidth,
  windowHeight,
  target,
  buttonClassName,
  iconClassName,
  styles,
  wrapperElement: WrapperElement,
  onClick: propOnClick,
  wrapperProps = {},
}) => {
  const handleWindowOpen = useGenerateURLHandler(
    url,
    target,
    windowWidth,
    windowHeight
  );

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
      //   ref={ref}
      // aria-label=""
      {...wrapperProps}
    >
      {children ? children : <FacebookIcon className={iconClassName} />}
    </Button>
  );
};
