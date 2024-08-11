
// const GalleryList = ({ images }) => (
//   <ul>
//     {images.map(({ objectID, url, title }) => (
//       <li key={objectID}>
//         <a href={url} target="_blank" rel="noreferrer noopener">
//           {title}
//         </a>
//       </li>
//     ))}
//   </ul>
// );

// export default GalleryList;

// src/components/ImageGallery.js

import ImageCard from "../ImageCard/ImageCard";

function GalleryList({ images, onImageClick }) {
  return (
    <ul>
      {images.map((image) => (
        <ImageCard key={image.id} image={image} onClick={() => onImageClick(image)} />
      ))}
    </ul>
  );
}

export default GalleryList;


