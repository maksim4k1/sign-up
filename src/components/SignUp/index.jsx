import React from "react";
import styled from "styled-components";

const Title = styled.h1`
    color: var(--main-black);
    font-size: 32px;
    font-weight: 700;
`;

const SignUpSection = styled.section`
    width: 500px;
    padding: 30px;
    margin: 0 auto;
    background: var(--main-white);
    border-radius: 3px;
    box-shadow: 0 2px 3px var(--main-shadow-black);
`;

function SignUp () {
    return(
        <SignUpSection>
            <Title>Sign Up</Title>
        </SignUpSection>
    );
}

export default SignUp;