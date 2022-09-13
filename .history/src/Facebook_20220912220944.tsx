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
  // Generic
  wrapperElement?: ({ children, onClick }) => ReactNode;
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
}) => {
  const handleWindowOpen = useGenerateURLHandler(url);

  const onClick = (event: any) => {
    if (propOnClick) {
      return propOnClick({ event, handleWindowOpen });
    }

    handleWindowOpen();
  };

  if (WrapperElement) {
    const Wrapper = React.isValidElement(WrapperElement)
      ? () =>
          React.cloneElement(WrapperElement, {
            // This will override the original ASCIIChar in the text.
            handleClick: onClick,
            // children,
          })
      : null;

    if (Wrapper == null) {
      console.error('Not a valid wrapper');
      return null;
    }

    return <Wrapper>{children}</Wrapper>;
  }

  return (
    <Button styles={styles} buttonClassName={buttonClassName} onClick={onClick}>
      {children ? children : <FacebookIcon className={iconClassName} />}
    </Button>
  );
};
