import { nanoid } from "nanoid";
import React, { useState } from "react";
import styled from "styled-components";

Object.size = function(object) {
    let length = 0;
    for(let key in object){
        if(key !== undefined) length++;
    }
    return length;
}

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

const Error = styled.div`
    grid-column: 1/3;
    color: #ff0000;
    font-size: 12px;
    text-align: center;
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
    const [error, setError] = useState("");

    function editInputValue(event) {
        const {name, value, type} = event.target;
        let newFormData = formData;
        if(type === "checkbox"){
            const {checked} = event.target;
            newFormData[name] = checked;
        } else{
            newFormData[name] = value;
        }

        setFormData(newFormData);
    }

    function validateForm(event){
        event.preventDefault();

        if(Object.size(formData) < inputs.length){
            setError("Заполните все поля!");
        } else if(formData.password !== formData.confirmPassword){
            setError("Пароли не совпадают!");
        } else if(formData.isAccept === false || formData.isAccept === undefined){
            setError("You must accept the Terms of Service and Privacy Policy");
        } else{
            setError("");

            alert(`
            name: ${formData.firstName} ${formData.lastName}
            email: ${formData.email}
            password: ${formData.password}
            accept: ${formData.isAccept}
            `);
        }
    }

    return(
        <FormBlock onSubmit={validateForm}>
            {
                inputs.map(item => {
                    return <Input key={nanoid()} name={item.name} type={item.type} placeholder={item.placeholder} value={formData[item.name]} onChange={editInputValue}/>
                })
            }
            <Label>
                <input name="isAccept" type="checkbox" checked={formData.isAccept} onChange={editInputValue}/>
                <div>I accept the <a href="/">Terms of Use</a> {"&"} <a href="/">Privacy Policy</a>.</div>
            </Label>
            <Error>{error}</Error>
            <Button type="submit">Sign Up</Button>
        </FormBlock>
    );
}

export default Form;