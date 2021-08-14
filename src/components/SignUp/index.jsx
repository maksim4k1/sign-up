import React from "react";
import styled from "styled-components";

const SignUpSection = styled.section`
    width: 500px;
    padding: 30px 0 50px;
    margin: 0 auto;
    background: var(--main-white);
    border-radius: 3px;
    box-shadow: 0 2px 3px var(--main-shadow-black);
`;

const Title = styled.h1`
    padding: 0 30px;
    color: var(--main-black);
    font-size: 32px;
    font-weight: 700;
`;

const Text = styled.p`
    padding: 0 30px;
    margin: 10px 0 0;
    font-size: 14px;
`;

const Line = styled.hr`
    width: 100%;
    height: 1.5px;
    margin: 20px 0;
    background: var(--main-bg-grey);
`;

function SignUp () {
    return(
        <SignUpSection>
            <Title>Sign Up</Title>
            <Text>Please fill in this form to create an account!</Text>
            <Line/>
        </SignUpSection>
    );
}

export default SignUp;