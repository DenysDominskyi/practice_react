import { Link } from 'react-router-dom';
import styled from 'styled-components';
import Category from './componn/Category';
import Search from './componn/Search';
import './Delicious.scss'
import Pages from "./pages/Pages";
import { GiKnifeFork } from 'react-icons/gi';

const Delicious = () => {
    return (
        <div className='delicious'>
            <Nav>
                <GiKnifeFork />
                <Logo to={'/delicious'}>deliciouss</Logo>
            </Nav>
            <Search />
            <Category />
            <Pages />
        </div>
    )
};

const Logo = styled(Link)`
    text-decoration: none;
    font-size: 1.5rem;
    font-weight: 400;
    font-family: 'Lobster Two', cursive;
`
const Nav = styled.div`
    padding: 3rem 0rem;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    svg{
        font-size: 2rem;
    }
`

export default Delicious;