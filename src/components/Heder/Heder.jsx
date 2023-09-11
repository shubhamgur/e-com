import {Button, Container,Nav,Navbar} from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { NavLink, useNavigate } from 'react-router-dom';
import { loginCondition, loginConditionLogout } from '../../reducers/productSlice';

const Heder=()=>{

const navigate=useNavigate();
const dispacth=useDispatch()

const login=useSelector((state)=> state.item.Userlogin)

const cards=useSelector((state)=> state.item.card)


    return(
        <>
         <Navbar bg="light" data-bs-theme="light">
        <Container>
          <Navbar.Brand><NavLink style={{textDecoration: "none",color:'black'}} to='/'>Home Page</NavLink></Navbar.Brand>
          <Nav>
            {!login && (
              <Button variant="secondary"className='me-3' onClick={()=>{navigate('/login')}}>Login</Button>
            )} 
            { login && (
<Button className='me-3' onClick={()=>{dispacth(loginConditionLogout())}} variant="danger">Logout</Button>
            )}
            <Button onClick={()=>{navigate('/card')}} className="ms-3" variant="secondary"><i style={{fontSize:'20px'}} class="bi bi-cart-check"></i>
           <i style={{marginLeft:'5px'}} class='bi bi--circle-fill'>{cards.length}</i>
           </Button>
          </Nav>
        </Container>
      </Navbar>
     
        </>
    )
}

export default Heder;