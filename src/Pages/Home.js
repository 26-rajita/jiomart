import React from 'react';
import Container from '@material-ui/core/Container';
import ContainedButtons from '../Components/Jiomart components/buttons';
import FullWidthGrid from '../Components/grid';
import SwipeableTextMobileStepper from '../Components/Jiomart components/Carousel';



export default function Home() {
  return (
    <React.Fragment>
      <Container fixed>
        <p>
          <ContainedButtons />
          <SwipeableTextMobileStepper/>
          <SwipeableTextMobileStepper/>
          <SwipeableTextMobileStepper/>
          <FullWidthGrid/>
  
          <SwipeableTextMobileStepper/>
        </p>

      </Container>
    </React.Fragment>
  );
}