import React from 'react';
import Container from '@material-ui/core/Container';
import CustomizedButtons from '../Components/Signuppage.js/Verifybutton';
import LayoutTextFields from '../Components/Signuppage.js/OTPtext';
import ButtonLink from '../Components/Signuppage.js/Resendlink';
import ColorTextFields from '../Components/Loginpage.js/Logintext';
import Typography from '@material-ui/core/Typography';
import Snackbars from '../Components/Signuppage.js/Verifysuccessbutton';
//After home page comes the signup page to create account //
export default function Signup() {
  return (
    <React.Fragment>
        <Container fixed>
          <p>
          <Typography variant="h5" gutterBottom>
            Login
            </Typography>
            <ColorTextFields/>
            <Snackbars/>
            <LayoutTextFields/>
            <ButtonLink/>
            <CustomizedButtons/>
            </p>
        </Container>
    </React.Fragment>
  );
}