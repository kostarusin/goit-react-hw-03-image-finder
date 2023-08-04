import { Component } from 'react';
import axios from 'axios';
import Searchbar from './Searchbar';
import ImageGallery from './ImageGallery';
import Button from './Button';
import Loader from './Loader';
// import Modal from './Modal';

export class App extends Component {
  state = {
    query: '',
    images: [],
    page: 1,
    loading: false,
    error: null,
  };

  componentDidMount() {
    this.fetchImages();
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.query !== this.state.query) {
      this.resetPage();
      this.fetchImages();
    }
  }

  handleSearch = query => {
    this.setState({ query });
  };

  fetchImages = async () => {
    const { query, page } = this.state;
    if (!query) return;

    try {
      this.setState({ loading: true });
      const perPage = 12;
      const response = await axios.get(
        `https://pixabay.com/api/?key=37757001-b13a3b98fcf42c50e87778634&q=${query}&page=${page}&per_page=${perPage}`
      );
      this.setState(prevState => ({
        images:
          page === 1
            ? response.data.hits
            : [...prevState.images, ...response.data.hits],
      }));
    } catch (error) {
      console.error('Error fetching images:', error);
    } finally {
      this.setState({ loading: false });
    }
  };

  handleLoadMore = () => {
    this.setState((prevState) => ({ page: prevState.page + 1 }), () => {
      this.fetchImages();
    });
  };


  resetPage = () => {
   this.setState({ page: 1, images: [] });
  };

  render() {
    const { images, loading, } = this.state;

    return (
      <div className="App">
        <Searchbar onSearch={this.handleSearch} />
        {loading && <Loader />}
        {images.length > 0 && (
          <>
            <ImageGallery images={images} /> <Button onLoadMore={this.handleLoadMore} />
          </>
        )}
      </div>
    );
  }
}
