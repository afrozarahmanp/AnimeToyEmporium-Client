import img3 from '../../../assets/Slider/5.jpg'
import img2 from '../../../assets/Slider/2.jpg'
import img1 from '../../../assets/Slider/3.jpeg'
import img4 from '../../../assets/Slider/1.webp'

const Slider = () => {
  const carouselStyle = {
    height: '400px', // Default height for smaller devices
    overflow: 'hidden', // Hide any overflow content
  };

  // Media query for larger devices (adjust the breakpoint as needed)
  if (window.innerWidth >= 900) {
    carouselStyle.height = '500px'; // Increase height for larger devices
  }

  const centerImageStyle = {
    width: '100%', // Make sure the image takes up the full width of the carousel
    height: '100%', // Make sure the image takes up the full height of the carousel
    objectFit: 'cover', // Crop the image from the center
  };

  const topImageStyle = {
    width: '100%', // Make sure the image takes up the full width of the carousel
    height: '100%', // Make sure the image takes up the full height of the carousel
    objectFit: 'cover', // Crop the image from the center
    objectPosition: 'top', // Crop the image from the top
  };

  const middleImageStyle = {
    width: '100%', // Make sure the image takes up the full width of the carousel
    height: '100%', // Make sure the image takes up the full height of the carousel
    objectFit: 'cover', // Crop the image from the center
    objectPosition: 'center top', // Crop the image from the center and a bit from the top
  };

  return (
    <div className="carousel mt-4 w-full" style={carouselStyle}>
      <div id="slide1" className="carousel-item relative w-full">
        <img src={img1} style={middleImageStyle} alt="Slide 1" />
        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
          <a href="#slide4" className="btn btn-circle">❮</a>
          <a href="#slide2" className="btn btn-circle">❯</a>
        </div>
      </div>
      <div id="slide2" className="carousel-item relative w-full">
        <img src={img2} style={centerImageStyle} alt="Slide 2" />
        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
          <a href="#slide1" className="btn btn-circle">❮</a>
          <a href="#slide3" className="btn btn-circle">❯</a>
        </div>
      </div>
      <div id="slide3" className="carousel-item relative w-full">
        <img src={img3} style={topImageStyle} alt="Slide 3" />
        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
          <a href="#slide2" className="btn btn-circle">❮</a>
          <a href="#slide4" className="btn btn-circle">❯</a>
        </div>
      </div>
      <div id="slide4" className="carousel-item relative w-full">
        <img src={img4} style={centerImageStyle} alt="Slide 4" />
        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
          <a href="#slide3" className="btn btn-circle">❮</a>
          <a href="#slide1" className="btn btn-circle">❯</a>
        </div>
      </div>
    </div>
  );
};

export default Slider;
