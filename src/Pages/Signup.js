import React from 'react';
import Container from '@material-ui/core/Container';
import DatePickers from '../Components/DateTimePicker';
import InputWithIcon from '../Components/Signuppage.js/signuptext';
import CustomizedButtons from '../Components/Signuppage.js/Verifybutton';
import LayoutTextFields from '../Components/Signuppage.js/OTPtext';
import ButtonLink from '../Components/Signuppage.js/Resendlink';

export default function Signup() {
  return (
    <React.Fragment>
        <Container fixed>
          <p>
            SIGN UP
            <InputWithIcon/>
            <CustomizedButtons/>
            <LayoutTextFields/>
            <ButtonLink/>
            <CustomizedButtons/>
            </p>
        </Container>
    </React.Fragment>
  );
}