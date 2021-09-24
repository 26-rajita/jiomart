import React from 'react';
import Container from '@material-ui/core/Container';
import ContainedButtons from '../Components/Homepage.js/buttons';
import FullWidthGrid from '../Components/Homepage.js/grid';
import SwipeableTextMobileStepper from '../Components/Homepage.js/Carousel';
import SingleLineImageList from '../Components/Imagelist';
//Task flow starts the home page by clicking on the acount icon//



export default function Home() {
  return (
    <React.Fragment>
      <Container fixed>
        <p>
          <ContainedButtons />
          <SwipeableTextMobileStepper />
          <SwipeableTextMobileStepper />
          <SwipeableTextMobileStepper />
          <FullWidthGrid />
          <SingleLineImageList />
          <SwipeableTextMobileStepper />
        </p>

      </Container>
    </React.Fragment>
  );
}