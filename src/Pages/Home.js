import React from 'react';
import Container from '@material-ui/core/Container';
import ContainedButtons from '../Components/Homepage.js/buttons';
import FullWidthGrid from '../Components/Homepage.js/grid';
import SwipeableTextMobileStepper from '../Components/Homepage.js/Carousel 1';
import SingleLineImageList from '../Components/Imagelist';
import Carousel2 from '../Components/Homepage.js/Carousel 2';
import Carousel3 from '../Components/Homepage.js/Carousel 3';
import Carousel4 from '../Components/Homepage.js/Carousel 4';
//Task flow starts the home page by clicking on the acount icon//



export default function Home() {
  return (
    <React.Fragment>
      <Container fixed>
        <p>
          <ContainedButtons />
          <SwipeableTextMobileStepper />
          <Carousel2/>
          <Carousel3/>
          <FullWidthGrid />
          <SingleLineImageList />
          <Carousel4/>
          
        </p>

      </Container>
      
      
    </React.Fragment>
    
  );
  
}