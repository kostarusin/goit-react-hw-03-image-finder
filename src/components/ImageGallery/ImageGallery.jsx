import { Component } from 'react';
import style from './ImageGallery.module.css';
import ImageGalleryItem from '../ImageGalleryItem/ImageGalleryItem';


class ImageGallery extends Component {
  state = {
    loadMore: false,
  };

  componentDidMount() {
    this.setState({ loadMore: true });
  }

  render() {
    const { images } = this.props;

    return (
      <ul className={style.imageGallery}>
        {images.map(image => (
          <ImageGalleryItem
            key={image.id}
            webformatURL={image.webformatURL}
            largeImageURL={image.largeImageURL}
            onImageClick={this.props.onImageClick}
          />
        ))}
      </ul>
    );
  }
}

export default ImageGallery;
