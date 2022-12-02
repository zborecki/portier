import { ImageProps } from '../../types/props';
import { ImageRoot } from './image.style';

const Image = ({
  alt, src, width, className
}: ImageProps): JSX.Element => (
  <ImageRoot
    className={className}
    width={width}
  >
    <img
      className="image__picture"
      alt={alt}
      src={src}
    />
  </ImageRoot>
);

export default Image;
