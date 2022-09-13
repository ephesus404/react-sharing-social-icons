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

interface HrefProps  = 

interface FacebookShareProps {
  url: string;
  windowSize?: WindowSize;
  target?: Target;
}


const useGenerateHref = () => {

}

const FacebookShare = ({ url, windowSize, target }: FacebookShareProps) => {


  return <button onClick={}>  </button>;
};
