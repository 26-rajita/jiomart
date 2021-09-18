import React from 'react';
import Container from '@material-ui/core/Container';
import DatePickers from '../Components/DateTimePicker';
import ContainedButtons from '../Components/Jiomart components/buttons';
import BasicButtonGroup from '../Components/buttongroup';
import Checkboxes from '../Components/checkbox';
import MaterialUIPickers from '../Components/dateandtime';
import FloatingActionButtons from '../Components/Navigationbuttons';
import SimpleBottomNavigation from '../Components/navigations';
import IconBreadcrumbs from '../Components/Breadcrumbs';
import RadioButtonsGroup from '../Components/Radio';
import IconButtons from '../Components/Jiomart components/Left Drawer';
import MediaCard from '../Components/Jiomart components/card';
import FullWidthGrid from '../Components/grid';
import SwipeableTextMobileStepper from '../Components/Jiomart components/Carousel';
import ImgMediaCard from '../Components/Jiomart components/Cards';
import { CardHeader } from '@material-ui/core';

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
          <MediaCard/>
          <SwipeableTextMobileStepper/>
        </p>

      </Container>
    </React.Fragment>
  );
}