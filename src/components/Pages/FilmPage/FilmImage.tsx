import { useQuery } from '@tanstack/react-query';
import { useParams } from 'react-router';
import { movieImage } from '../../../service/movie.api';
import { ImageDetail } from './ImageDetail';
import { useEffect } from 'react';
import './FilmDetail';

export const FilmImage = () => {
  const { id } = useParams();
  const { data: getImage, refetch } = useQuery({
    queryKey: ['getImage'],
    queryFn: () => movieImage(id),
    refetchOnWindowFocus: false,
  });

  useEffect(() => {
    if (id) {
      refetch();
    }
  }, [id, refetch]);

  return (
    <>
      <div className="filmPageImages">
        {/* {getImage?.items?.map((images) => (
        <ImageDetail image={images} key={images.imageUrl} />
      ))} */}
        {getImage && <ImageDetail image={getImage?.items[0]} />}
        {getImage && <ImageDetail image={getImage?.items[1]} />}
        {getImage && <ImageDetail image={getImage?.items[2]} />}
      </div>
    </>
  );
};
