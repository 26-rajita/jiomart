import React from 'react';
import Container from '@material-ui/core/Container';
import DatePickers from '../Components/DateTimePicker';
import ContainedButtons from '../Components/buttons';
import BasicButtonGroup from '../Components/buttongroup';
import Checkboxes from '../Components/checkbox';
import MaterialUIPickers from '../Components/dateandtime';
import FloatingActionButtons from '../Components/Navigationbuttons';
import SimpleBottomNavigation from '../Components/navigations';
import IconBreadcrumbs from '../Components/Breadcrumbs';
import RadioButtonsGroup from '../Components/Radio';
import IconButtons from '../Components/Jiomart components/categories';
import ScrollableTabsButtonForce from '../Components/Jiomart components/categories';
import FloatingActionButtonSize from '../Components/Jiomart components/category1';
import MediaCard from '../Components/Jiomart components/card';

export default function Home() {
  return (
    <React.Fragment>
        <Container fixed>
            <p>
          <ScrollableTabsButtonForce/>
          <FloatingActionButtonSize/>
          <MediaCard/>
            </p>
          
        </Container>
    </React.Fragment>
  );
}