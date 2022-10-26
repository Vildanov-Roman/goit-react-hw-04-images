import { useState } from 'react';
import { ImageGallery } from './ImageGallery/ImageGallery';
import { Searchbar } from './Searchbar/Searchbar';

export const App = () => {
const [query, setQuery] = useState('')

  const onSubmit = query => {
    setQuery(query);
  }; 
    
  return (
    <>
      <Searchbar onSubmit={onSubmit} />
      <main style={{ textAlign: 'center', paddingBottom: '20px' }}>
        <ImageGallery searchQuery={query} />
      </main>
    </>
  );
}

