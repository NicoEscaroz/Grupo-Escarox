import React from "react";
import ImageGallery from "react-image-gallery";

const images = [
  {
    original: URL("../Assets/tornillohexagonal.jpg"),
  },
  {
    original: "../Assets/chilillo.jpg",
  },
  {
    original: "../Assets/abrazadera_muelle.png",
  },
  {
    original: "../Assets/banda.jpg",
  },
  {
    original: "../Assets/tornillohexagonal.jpg",
  },
  {
    original: "../Assets/cadena.jpg",
  },
  {
    original: "../Assets/chumacera.png",
  },
  {
    original: "../Assets/tornillohexagonal.jpg",
  },
  {
    original: "../Assets/rueda.jpg",
  },
  {
    original: "../Assets/tornillohexagonal.jpg",
  },
  {
    original: "../Assets/polea.jpg",
  },
  {
    original: "../Assets/resorte.jpg",
  },
  {
    original: "../Assets/broca.jpg",
  },
];

function Carrusel() {
  return (
    <div className="max-w-[1240px]">
      <div className=" ">
        <ImageGallery
          items={images}
          showPlayButton={true}
          showNav={true}
          showBullets={true}
          autoPlay={true}
          slideInterval={3000}
          slideDuration={1000}
        />
      </div>
    </div>
  );
}

export default Carrusel;
