import { Iimages } from '../../../models/models';
import './FilmDetail';

export const ImageDetail = ({ image }: { image: Iimages }) => {
  return (
    <div className="iamgeDetail">
      <ul className="iamgeDetail_list">
        <li className="iamgeDetail_image_list">
          <img src={image.previewUrl} alt="img" className="iamgeDetail_img" />
        </li>
      </ul>
    </div>
  );
};
