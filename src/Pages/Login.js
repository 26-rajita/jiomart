import React from 'react';
import Container from '@material-ui/core/Container';
import CustomizedButtons from '../Components/Signuppage.js/Verifybutton';
import LayoutTextFields from '../Components/Signuppage.js/OTPtext';
import ButtonLink from '../Components/Signuppage.js/Resendlink';
import ColorTextFields from '../Components/Loginpage.js/Logintext';
//After home page comes the signup page to create account //
export default function Signup() {
  return (
    <React.Fragment>
        <Container fixed>
          <p>
            Login
            <ColorTextFields/>
            <CustomizedButtons/>
            <LayoutTextFields/>
            <ButtonLink/>
            <CustomizedButtons/>
           
            </p>
        </Container>
    </React.Fragment>
  );
}