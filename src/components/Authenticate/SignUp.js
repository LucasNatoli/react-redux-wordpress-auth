import React from "react";
import { MDBContainer, MDBRow, MDBCol, MDBInput, MDBBtn } from 'mdbreact';

const SignUpForm = () => {
  return (
    <MDBContainer className="formContainer">
      <MDBRow>
        <MDBCol>
          <form>
            <div className="grey-text">
                <MDBInput
                label="Your name"
                icon="user"
                group
                type="text"
                validate
                error="wrong"
                success="right"
                />
                <MDBInput
                label="Your email"
                icon="envelope"
                group
                type="email"
                validate
                error="wrong"
                success="right"
                />
                <MDBInput
                label="Confirm your email"
                icon="exclamation-triangle"
                group
                type="text"
                validate
                error="wrong"
                success="right"
                />
                <MDBInput
                label="Your password"
                icon="lock"
                group
                type="password"
                validate
                />
            </div>
            <div className="text-center py-4 mt-3">
                <MDBBtn type="submit">
                  Sign Up
                </MDBBtn>
            </div>
            </form>
        </MDBCol>
      </MDBRow>
    </MDBContainer>
  );
};

export default SignUpForm;