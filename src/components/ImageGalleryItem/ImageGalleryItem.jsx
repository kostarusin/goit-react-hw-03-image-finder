import { Component } from 'react';

class ImageGalleryItem extends Component {
    render() {
      const { webformatURL } = this.props;
  
      return (
        <li className="gallery-item">
          <img src={webformatURL} alt=""/>
        </li>
      );
    }
  }
export default ImageGalleryItem;