import styled from "styled-components"
import { useState } from "react"
import { FaSearch } from "react-icons/fa"
import { useNavigate } from "react-router-dom";

function Search() {
    const [input, setInput] = useState('');
    const navigate = useNavigate();

    const submitHandler = (e) => {
        e.preventDefault();
        navigate("/delicious/searched/" + input);
    }

    return (
        <FormSyle onSubmit={submitHandler}>
            <FaSearch></FaSearch>
            <input onChange={(e)=> setInput(e.target.value)} type='text' value={input}/>
        </FormSyle>
    )
}

const FormSyle = styled.form`
    position: relative;
    display: flex;
    justify-content: center;
    margin: 0 auto;
    width: 70%;
    input{
        border: none;
        background: linear-gradient(35deg, #494949, #313131);
        font-size: 1.5rem;
        color: #fff;
        padding: 0.7rem 3rem;
        border: none;
        border-radius: 1rem;
        outline: none;
        width: 100%;
    }
    svg{
        position: absolute;
        top: 50%;
        left: 0%;
        transform: translate(100%, -50%);
        color: #fff;
    }
`

export default Search
