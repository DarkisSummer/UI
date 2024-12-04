import { Button } from 'antd';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

const StyledHeader = styled.header`
    background-color: var(--main-color);
    padding: 10px;

    nav {
        width: 100%;
        display: flex;
        list-style-type: none;
        margin: 0;
        padding: 0;
    }

    .nav-item {
        margin-right: 15px;
    }

    .nav-item button {
        color: #ffffff;
        font-weight: 700;
        transition: none !important;
    }

    .nav-item button span:hover {
        color: #ffffff;
    }

    .nav-item button:hover span {
        color: #ffffff;
    }

    .nav-item button:hover {
        color: #ffffff;
    }
`

function Header() {
    const navigate = useNavigate();

    return (
        <StyledHeader>
            <nav>
                <div className='nav-item'>
                    <Button onClick={() => navigate('/')} type="text" size='large'>Home</Button>
                </div>
                <div className='nav-item'>
                    <Button onClick={() => navigate('/events')} type="text" size='large'>Events</Button>
                </div>
                <div className='nav-item'>
                    <Button onClick={() => navigate('/admin')} type="text" size='large'>Admin panel</Button>
                </div>
            </nav>
        </StyledHeader>
    );
};

export default Header;