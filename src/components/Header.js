import React,{useState} from 'react'
import styled from 'styled-components'
import CloseIcon from '@mui/icons-material/Close';


function Header() {

    const [menuStatus,setMenuStatus] = useState(false);
    

    return (
        <Container>
            <>
                <a href="/"><img src="/images/logo.svg" width={75} height={20} alt=""/></a>
            </>
            <Menu>
                <a href="#">Model S</a>
                <a href="#">Model 3</a>
                <a href="#">Model X</a>
                <a href="#">Model Y</a>
                <a href="#">Cybertruck</a>
                <a href="#">Powerwall</a>
            </Menu>
            <RightMenu>
                <a href="#">Shop</a>
                <a href="#">Account</a>
                <a href="#" onClick={() => setMenuStatus(true)}>Menu</a>
            </RightMenu>
            <BurgerNav show={menuStatus}>
                <CloseWrapper>
                <CustomClose onClick={()=> setMenuStatus(false)}/>
                </CloseWrapper>
                <li>
                    <a href="#">Existing Inventory</a>
                </li>
                <li>
                    <a href="#">Used Inventory</a>
                </li>
                <li>
                    <a href="#">Trade-In</a>
                </li>
                <li>
                    <a href="#">Test Drive</a>
                </li>
                <li>
                    <a href="#">Roadster</a>
                </li>
                <li>
                    <a href="#">Commercial Energy</a>
                </li>
                <li>
                    <a href="#">Utilities</a>
                </li>
                <li>
                    <a href="#">Energy</a>
                </li>
                <li>
                    <a href="#">Charging</a>
                </li>
                <li>
                    <a href="#">Find Us</a>
                </li>
                <li>
                    <a href="#">Support</a>
                </li>
                <li>
                    <a href="#">Investor Relations</a>
                </li>
                

            </BurgerNav>
        </Container>
    )
}

export default Header

const Container = styled.div`
    display:flex;
    min-height:60px;
    position:fixed;
    align-items:center;
    justify-content:space-between;
    padding:0 20px;
    top:0;
    left:0;
    right:0
    
`

const Menu = styled.div`
display:flex;
align-items:center;
flex:1;
justify-content:center;

a {
    font-weight:400;
    padding:0 10px;
    flex-wrap:nowrap;
    font-size:12px;
    cursor:pointer;
}

@media(max-width:768px){
    display:none;
}


`

const RightMenu = styled.div`
a {
    font-weight:400;
    margin-right:10px;
    font-size:12px;
} 
`

const BurgerNav = styled.div`
    position:fixed;
    top:0;
    bottom:0;
    right:0;
    background-color:white;
    width:175px;
    z-index:1;
    list-style:none;
    padding:20px;
    display:flex;
    flex-direction:column;
    text-align:start;
    transform:${props => props.show ? 'translateX(0)': 'translateX(100%)'};
    transition:transform 0.4s ease-in;
    
    li{
        padding:6px 0;
        

        a{
            font-weight:500;
            font-size:12px;
            color:#393c41;
        }
        a:hover{
            font-weight:500;
            font-size:12px;
            color:#393c41;
            background: grey;
            width: auto;
            height: auto;
            opacity:0.2;
            border-radius:50px;
            
        }
    }
    `
    const CloseWrapper = styled.div`
        display:flex;
        justify-content:flex-end;

    `

    const CustomClose = styled(CloseIcon)`
        cursor:pointer;
        margin-bottom:20px;
    `

  

    