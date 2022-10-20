import { Button } from 'components/Button/Button';
import { Loader } from 'components/Loader/Loader';
import { Component } from 'react';
import { fetchPhotos } from 'services/ImagesAPI';
import { Gallery } from './ImageGallery.styled';
import { ImageGalleryItem } from './ImageGalleryItem/ImageGalleryItem';
import { Notify } from 'notiflix';
import PropTypes from 'prop-types';

export class ImageGallery extends Component {
  state = {
    images: null,
    page: 2,
    isLoading: false,
  };

  componentDidUpdate(prevProps, _) {
    if (
      prevProps.searchQuery !== this.props.searchQuery &&
      this.props.searchQuery !== ''
    ) {
      this.setState({ isLoading: true });
      fetchPhotos(this.props.searchQuery).then(response => {
        if (response.hits.length === 0) {
          Notify.failure('Wrong request');
          this.setState({ isLoading: false });
        } else {
          this.setState({ images: [...response.hits], isLoading: false });
        }
      });
    }
  }

  loadMore = () => {
    this.setState(prevState => ({
      page: prevState.page + 1,
    }));

    this.setState({ isLoading: true });

    fetchPhotos(this.props.searchQuery, this.state.page).then(response =>
      this.setState(prevState => ({
        images: [...prevState.images, ...response.hits],
        isLoading: false,
      }))
    );
  };

  render() {
    const { images, isLoading } = this.state;
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
        {images && <Button children={'Load more'} onClick={this.loadMore} />}
      </>
    );
  }
}

ImageGallery.propTypes = {
  searchQuery: PropTypes.string,
};
