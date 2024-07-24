import React from 'react';
import ImageGallery from 'react-image-gallery';
import 'react-image-gallery/styles/css/image-gallery.css';
import "./Gallary.css";
const Gallery = () => {
  const images = [
    {
      original: 'https://www.maitreyi.ac.in/assets/front/images/mainbanner/slide1.jpg',
      thumbnail: 'https://www.maitreyi.ac.in/assets/front/images/mainbanner/slide1.jpg',
    },
    {
      original: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT-zbb1-GsittTNBX286IEZAs8Yp9qjHXJXwaBiiIHmpiIIS7zE5K16JKE9vyfGUlSuVp0&usqp=CAU',
      thumbnail: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT-zbb1-GsittTNBX286IEZAs8Yp9qjHXJXwaBiiIHmpiIIS7zE5K16JKE9vyfGUlSuVp0&usqp=CAU',
      },
     {
      original: ' https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQzsOvwJp6il9sYQOOIrDv8BCiCPANcPSUiwEsy-v2sQhFJH_NPZwNcXlgS_IguZb5wU4U&usqp=CAU',
      thumbnail: ' https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQzsOvwJp6il9sYQOOIrDv8BCiCPANcPSUiwEsy-v2sQhFJH_NPZwNcXlgS_IguZb5wU4U&usqp=CAU',
      },
   
  ];

  return (
    <div className="gallery">
      <h2>Gallery</h2>
      <ImageGallery items={images} />
    </div>
  );
};

export default Gallery;
