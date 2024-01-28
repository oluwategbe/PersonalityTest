/* eslint-disable react/prop-types */
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

const Carouse = ({ data }) => {
  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 4,
      slidesToSlide: 1,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 4,
      slidesToSlide: 1,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 3,
      slidesToSlide: 1,
    },
  };

  return (
    <Carousel
      className="carousel"
      swipeable={true}
      // draggable={true}
      // showDots={true}
      responsive={responsive}
      ssr={true}
      infinite={true}
      autoPlay={true}
      autoPlaySpeed={5000}
      keyBoardControl={true}
      customTransition="all .5"
      transitionDuration={500}
      containerClass="carousel-container"
      // removeArrowOnDeviceType={["tablet", "mobile", "desktop"]}
      // deviceType={this.props.deviceType}
      itemClass="carousel-item-padding-40-px"
    >
      {data?.map((d, i) => (
        <div className="carouselCard" key={i}>
          <img src={d?.pic} alt={d?.name} />
          <h2>{d?.name}</h2>
          <p>{d?.bio}</p>
        </div>
      ))}
    </Carousel>
  );
};

export default Carouse;
