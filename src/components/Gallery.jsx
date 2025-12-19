import React from 'react'

const Gallery = () => {
    const gallery = [
      
    "/img1.webp",
    "/img2.jpg",
    "/img3.jpg",
    "/img4.jpg",
    "/img5.jpg",
    "/img6.jpg",
    "/img7.jpg",
    "/img8.jpg",
    "/img9.jpg",
  
  ];
  return (
    <section className="gallery">
      <h1>FOCUS ON YOURE</h1>
      <div className="images">
        <div>
        {gallery.slice(0, 4).map((element, index) => (//parenthis use {} then again that write that
          <img key={index} src={element} alt="galleryImage" />
          ))}
        </div>
        <div>
        {gallery.slice(4, 6).map((element, index) => (
            <img key={index} src={element} alt="galleryImage" />
          ))}
        </div>
      <div>
        {gallery.slice(7, 9).map((element, index) => (
            <img key={index} src={element} alt="galleryImage" />
          ))}
      </div>
    </div>

    </section>
    
  );
};

export default Gallery;