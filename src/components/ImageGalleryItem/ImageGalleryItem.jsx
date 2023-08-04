import { Component } from 'react';

class ImageGalleryItem extends Component {
    render() {
      const { webformatURL, largeImageURL } = this.props;
  
      return (
        <li className="gallery-item">
          <img src={webformatURL} alt="" onClick={() => {this.props.onImageClick(largeImageURL)}}/>
        </li>
      );
    }
  }
export default ImageGalleryItem;