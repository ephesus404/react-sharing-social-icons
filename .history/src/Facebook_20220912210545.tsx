// const handleFacebookClick = () => {
//     window.open(
//       `https://www.facebook.com/sharer/sharer.php?u=${url}`,
//       target,
//       `${windowSize}`
//     );
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

const FacebookShare = ({}: FacebookShareProps) => {};
