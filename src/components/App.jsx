import { Component } from 'react';
import { ImageGallery } from './ImageGallery/ImageGallery';
import { Searchbar } from './Searchbar/Searchbar';

export class App extends Component {
  state = {
    query: '',
  };

  onSubmit = query => {
    this.setState({ query });
  };

  render() {
    const { query } = this.state;
    return (
      <>
        <Searchbar onSubmit={this.onSubmit} />
        <main style={{ textAlign: 'center', paddingBottom: '20px' }}>
          <ImageGallery searchQuery={query} />
        </main>
      </>
    );
  }
}
