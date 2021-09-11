import React from 'react';
import Container from '@material-ui/core/Container';
import DatePickers from '../Components/DateTimePicker';
import InputWithIcon from '../Components/Jiomart components/signuptext';

export default function Signup() {
  return (
    <React.Fragment>
        <Container fixed>
          <p>
            <InputWithIcon/>
            </p>
        </Container>
    </React.Fragment>
  );
}