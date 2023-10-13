import React from 'react';
import HeroSlider from 'react-slick';
import { Card, CardContent, Typography, Grid, IconButton } from '@mui/material';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import NavigateBeforeIcon from '@mui/icons-material/NavigateBefore';


const Carousel = () => {

 const NextArrow = (props) => {
    return( 
        <>
          <div 
            className={props.className} 
            style={{...props.style, backgroundColor: "black", borderRadius: "12px" }} 
            onClick={props.onClick} 
          />
        </>
      );
};

 const PrevArrow = (props) => {
    return( 
      <>
        <div 
          className={props.className} 
          style={{...props.style, backgroundColor: "black", borderRadius: "12px" }} 
          onClick={props.onClick} 
        />
      </>
    );
};
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4, // Number of cards to show initially
    slidesToScroll: 1, // Number of cards to scroll when navigating
    nextArrow: <NextArrow />, // Custom component for next button
   prevArrow: <PrevArrow />, // Custom component for previous button
  };


  return (
    <div style={{ padding: '50px' }}>
      <HeroSlider {...settings} >
        <div >
          <Card >
            <CardContent>
              <Typography variant="h5">Card 1</Typography>
            </CardContent>
          </Card>
        </div>
        <div>
          <Card>
            <CardContent>
              <Typography variant="h5">Card 2</Typography>
            </CardContent>
          </Card>
        </div>
        <div>
          <Card>
            <CardContent>
              <Typography variant="h5">Card 3</Typography>
            </CardContent>
          </Card>
        </div>
        <div>
          <Card>
            <CardContent>
              <Typography variant="h5">Card 4</Typography>
            </CardContent>
          </Card>
        </div>
        <div>
          <Card>
            <CardContent>
              <Typography variant="h5">Card 5</Typography>
            </CardContent>
          </Card>
        </div>
        <div>
          <Card>
            <CardContent>
              <Typography variant="h5">Card 6</Typography>
            </CardContent>
          </Card>
        </div>
        <div>
          <Card>
            <CardContent>
              <Typography variant="h5">Card 7</Typography>
            </CardContent>
          </Card>
        </div>
        <div>
          <Card>
            <CardContent>
              <Typography variant="h5">Card 8</Typography>
            </CardContent>
          </Card>
        </div>

        {/* Add more cards as needed */}
      </HeroSlider>
    </div>
  );
};

export default Carousel;
