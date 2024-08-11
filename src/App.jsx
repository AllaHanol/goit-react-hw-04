import { useState, useEffect } from 'react';
import toast, { Toaster } from "react-hot-toast"; 
import Loader from './components/Loader/Loader';
import SearchForm from './components/SearchForm/SearchForm';
import GalleryList from './components/GalleryList/GalleryList';
import { getPhotos } from './images-api';
import './App.css';
import ErrorMessage from './components/ErrorMessage/ErrorMessage';
import LoadMoreBtn from './components/LoadMoreBtn/LoadMoreBtn';
import ImageModal from './components/ImageModal/ImageModal';

function App() {
  const [images, setImages] = useState([])
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)
  // const [searchValue, setSearchValue] = useState(null)
  const [page, setPage] = useState(1)
  const [query, setQuery] = useState('')
  const [isEmpty, setIsEmpty] = useState(false)
  const [nextPage, setNextPage] = useState(false)
   const [modalImage, setModalImage] = useState(null);
  
  const handleSubmit = (searchValue) => {
    setQuery(searchValue);
    setImages([]);
    setPage(1);
    setError(null);
    setIsEmpty(false);
    setNextPage(false);
  }
  useEffect(() => {
    if (!query) {
      return;
    }
    const fetchPhotos = async () => {
      setLoading(true);
      setError(null);
      try {
        const {results, total, total_pages} = await getPhotos(query, page);
        if (!total) {
          setIsEmpty(true);
          console.log('No images found');
          const notify = () => toast.error('Sorry, there are no images matching your search query. Please try again.', {
            position: "top-center",
            duration: 3000,
            style: { marginTop: 110 }
          
          });
          notify();
        }
        
      
        setImages((prevImages) => [...prevImages, ...results]);
        setNextPage(page<total_pages)
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchPhotos();
  }, [query, page]);

  const handleLoadMoreClick = () => {
    setPage((prevPage) => prevPage + 1);
  }
  const openModal = (image) => setModalImage(image);
  const closeModal = () => setModalImage(null);
    
    return (
      <>
        <div><h1>Photos</h1>
        <SearchForm onSubmit={handleSubmit} />
          {images && <GalleryList images={images} />}</div>
        <GalleryList images={images} onImageClick={openModal} />
        {loading && <Loader />}
        {error && <ErrorMessage message={error} />}
        {/* {Array.isArray(images) && images.map((image) => {
          return (
            <img
              key={image.id}
              src={image.urls.regular}
              alt={image.description}
            />
          )
        })}
        {Array.isArray(images) && images.length === 0 && (<p>No images found. Try another search.</p>)} */}
        {modalImage && <ImageModal image={modalImage} onClose={closeModal} />}
        {nextPage && <LoadMoreBtn handleLoadMoreClick={handleLoadMoreClick} />}
        {isEmpty && <Toaster />}
      </>
    )
  }

  export default App;
