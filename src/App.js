import styled from "styled-components";
import SignUp from "./components/SignUp";

const Link = styled.div`
    margin: 15px 0 0;
    font-size: 14px;
    color: var(--main-white);
    text-align: center;
    & a{
        color: var(--main-white);
        text-decoration: underline;
        &:hover{
            text-decoration: none;
        }
    }
`;

function App() {
    return (
        <div className="App">
            <SignUp/>
            <Link>Already have an account? <a href="/">Login here</a>.</Link>
        </div>
    );
}

export default App;