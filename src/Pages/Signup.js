import React from 'react';
import Container from '@material-ui/core/Container';
import InputWithIcon from '../Components/Signuppage.js/signuptext';
import CustomizedButtons from '../Components/Signuppage.js/Verifybutton';
import LayoutTextFields from '../Components/Signuppage.js/OTPtext';
import ButtonLink from '../Components/Signuppage.js/Resendlink';
import OTPButtons from '../Components/Signuppage.js/Otpverifybutton';
import Typography from '@material-ui/core/Typography';
//After home page comes the signup page to create account //
export default function Signup() {
  return (
    <React.Fragment>
        <Container fixed>
          <p>
          <Typography variant="h5" gutterBottom>
            SIGN UP
            </Typography>
            <InputWithIcon/>
            <OTPButtons/>
            <LayoutTextFields/>
            <ButtonLink/>
            <CustomizedButtons/>
            </p>
        </Container>
    </React.Fragment>
  );
}