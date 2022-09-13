// const handleFacebookClick = () => {

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

const FacebookShare = ({
  children,
  url,
  windowSize,
  target,
}: FacebookShareProps) => {
  const href = useGenerateHref({ url });

  const onClick = () => {
    window.open(href, target, `${windowSize}`);
  };

  return <button onClick={onClick}>Facebook Yay </button>;
};
