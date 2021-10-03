import React from 'react';
import Container from '@material-ui/core/Container';
import ContainedButtons from '../Components/Homepage.js/buttons';
import FullWidthGrid from '../Components/Homepage.js/grid';
import SwipeableTextMobileStepper from '../Components/Homepage.js/Carousel 1';
import SingleLineImageList from '../Components/Imagelist';
import Carousel2 from '../Components/Homepage.js/Carousel 2';
import Carousel3 from '../Components/Homepage.js/Carousel 3';
import Carousel4 from '../Components/Homepage.js/Carousel 4';
import CenteredGrid from '../Components/Homepage.js/paperwithgrid';
import Grid from '@material-ui/core/Grid';

//Task flow starts the home page by clicking on the acount icon//



export default function Home() {
  return (
    <React.Fragment>
      <Container fixed>
        <p>
          <ContainedButtons />
          <Grid container spacing={2}align= 'center'>
           <Grid item xs={12}sm={12}xl={12}>
          <SwipeableTextMobileStepper />
          <Carousel2/>
          <Carousel3/>
          <FullWidthGrid />
          <SingleLineImageList />
          <Carousel4/>
          </Grid>
            </Grid>
         <CenteredGrid/>
        </p>

      </Container>
      
      
    </React.Fragment>
    
  );
  
}