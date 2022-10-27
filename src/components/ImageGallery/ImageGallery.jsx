import { Button } from 'components/Button/Button';
import { Loader } from 'components/Loader/Loader';
import { useEffect, useState } from 'react';
import { fetchPhotos } from 'services/ImagesAPI';
import { Gallery } from './ImageGallery.styled';
import { ImageGalleryItem } from './ImageGalleryItem/ImageGalleryItem';
import { Notify } from 'notiflix';
import PropTypes from 'prop-types';

export const ImageGallery = ({ searchQuery }) => {
  const [images, setImages] = useState(null);
  const [page, setPage] = useState(1);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    if (searchQuery === '') {
      return;
    }
    setIsLoading(true);
    fetchPhotos(searchQuery, page).then(response => {
      if (response.hits.length === 0) {
        Notify.failure('Wrong request');
        setIsLoading(false);
      } else if (page > 1) {        
        setImages(prevImages => [...prevImages, ...response.hits])
      } else {
        setImages(response.hits);
      }      
      setIsLoading(false);
      
    });
  }, [page, searchQuery]);

  useEffect(() => {
    setPage(1);
  }, [searchQuery]);

  const loadMore = () => {
    setPage(prevPage => prevPage + 1);
  };

  return (
    <>
      {isLoading && <Loader />}
      {images && (
        <Gallery>
          {images.map(item => {
            return <ImageGalleryItem key={item.id} item={item} />;
          })}
        </Gallery>
      )}
      {images && <Button children={'Load more'} onClick={loadMore} />}
    </>
  );
};


ImageGallery.propTypes = {
  searchQuery: PropTypes.string,
};
