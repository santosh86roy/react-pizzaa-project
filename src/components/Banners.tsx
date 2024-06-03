import Carousel from "react-bootstrap/Carousel";
import styled from "styled-components";
import ExampleCarouselImage from "../assets/Burger.jpg";
import PastaCarouselImage from "../assets/Pasta.jpg";
import "bootstrap/dist/css/bootstrap.min.css";

const StyledCarouselItem = styled(Carousel.Item)`
  height: 70vh;

  img {
    object-fit: cover;
    width: 100%;
    height: 100%;
  }
`;

const StyledCarouselCaption = styled(Carousel.Caption)`
  color: #fff;
  background: rgba(0, 0, 0, 0.5);
  padding: 10px;
  border-radius: 5px;
`;

export const Banners = () => {
  return (
    <Carousel fade>
      <StyledCarouselItem>
        <img
          className="d-block w-100"
          src={ExampleCarouselImage}
          alt="First slide"
        />
        <StyledCarouselCaption>
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </StyledCarouselCaption>
      </StyledCarouselItem>
      <StyledCarouselItem>
        <img
          className="d-block w-100"
          src={ExampleCarouselImage}
          alt="Second slide"
        />
        <StyledCarouselCaption>
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </StyledCarouselCaption>
      </StyledCarouselItem>
      <StyledCarouselItem>
        <img
          className="d-block w-100"
          src={PastaCarouselImage}
          alt="Third slide"
        />
        <StyledCarouselCaption>
          <h3>Third slide label</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </StyledCarouselCaption>
      </StyledCarouselItem>
    </Carousel>
  );
};
