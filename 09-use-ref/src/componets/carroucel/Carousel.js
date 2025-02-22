import './Carousel.css';

const Carousel = () => {
  return (
    <div className="carousel">
      {[...Array(10)].map((_, index) => (
        <div key={index} className="carousel-item">
          {index + 1}
        </div>
      ))}
    </div>
  );
};

export default Carousel;