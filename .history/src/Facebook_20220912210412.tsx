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
type WindowSize = string;

interface FacebookShareProps {
  url: string;
  windowSize?: WindowSize;
}

const FacebookShare = () => {};
