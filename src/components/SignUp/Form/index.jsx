import { nanoid } from "nanoid";
import React, { useState } from "react";
import styled from "styled-components";

const FormBlock = styled.form`
    width: 100%;
    padding: 0 30px;
    display: grid;
    grid-template-column: 1fr 1fr;
    grid-gap: 20px;
`;

const Input = styled.input`
    height: 40px;
    width: 100%;
    padding: 0 10px;
    grid-column: 1/3;
    &:nth-child(1){
        width: 160px;
        grid-column: 1/2;
    }
    &:nth-child(2){
        width: 160px;
        grid-column: 2/3;
    }
    color: var(--main-black);
    font-size: 14px;
    background: var(--main-bg-grey);
    border-radius: 3px;
`;

const Label = styled.label`
    display: flex;
    align-items: center;
    gap: 6px;
    grid-column: 1/3;
    font-size: 14px;
    & a{
        color: var(--main-blue);
        font-weight: 400;
        &:hover{
            text-decoration: underline;
        }
    }
`;

const Button = styled.button`
    height: 40px;
    display: flex;
    justify-content: center;
    align-items: center;
    grid-column: 1/2;
    color: var(--main-white);
    font-weight: 700;
    background: var(--main-blue);
    border: 2px solid rgba(0,0,0,0);
    border-radius: 3px;
    transition: color 0.3s, background 0.3s, border 0.3s;
    &:hover{
        color: var(--main-blue);
        background: var(--main-white);
        border: 2px solid var(--main-blue);
    }
`;

const inputs = [
    {name: "firstName", type: "text", placeholder: "First Name"},
    {name: "lastName", type: "text", placeholder: "Last Name"},
    {name: "email", type: "email", placeholder: "Email"},
    {name: "password", type: "password", placeholder: "Password"},
    {name: "confirmPassword", type: "password", placeholder: "Confirm Password"},
];

function Form () {
    const [formData, setFormData] = useState({});

    function editInputValue(event) {
        const {name, value} = event.target;
        let newFormData = formData;
        newFormData[name] = value;

        setFormData(newFormData);
    }

    return(
        <FormBlock>
            {
                inputs.map(item => {
                    return <Input key={nanoid()} name={item.name} type={item.type} placeholder={item.placeholder} value={formData[item.name]} onChange={editInputValue}/>
                })
            }
            <Label>
                <input type="checkbox" />
                <div>I accept the <a href="/">Terms of Use</a> {"&"} <a href="/">Privacy Policy</a>.</div>
            </Label>
            <Button type="submit">Sign Up</Button>
        </FormBlock>
    );
}

export default Form;