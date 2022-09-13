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


const useGenerateHref = ({ url }: FacebookShareProps) => {

    return `https://www.facebook.com/sharer/sharer.php?u=${url}`

}

const FacebookShare = ({ url, windowSize, target }: FacebookShareProps) => {

    const href = useGenerateHref({ url})


  return <button onClick={}>  </button>;
};
