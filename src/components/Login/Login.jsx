import { useEffect } from 'react';
import { useState } from 'react';
import { Button, Col, Row } from 'react-bootstrap';
import Heder from '../Heder/Heder';
import style from './Login.module.css';
import Spinner from 'react-bootstrap/Spinner';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { loginCondition } from '../../reducers/productSlice';

const Login=()=>{

const [name,setName]=useState('');
const [pass,setPass]=useState('');
const [msg,setMsg]=useState('');
const [loder,setLoder]=useState(false);

const navigate=useNavigate();

const dispacth=useDispatch()

useEffect(()=>{
setMsg('')
},[pass,name])

const subBtn=()=>{
    if(!name){
setMsg('Enter User Name...');
return;
    }

    if(!pass){
        setMsg('Enter User Password...')
        return;
    }

    if(name!=pass){
        setMsg('Wrong User Name And Password...'); 
        return; 
    }

    setLoder(true)
    setTimeout(()=>{
       setLoder(false);
       dispacth(loginCondition())
navigate('/')
    },2000)
}

    return(
        <>
        {!loder && (
           <>
           <Heder/>
        <h1 className={style.heading}>Login From</h1>
<div className={style.table}>
<Row>
    <Col><strong>User Name</strong></Col>
    <Col><input type='text' value={name} onChange={(e)=>{setName(e.target.value)}}/></Col>
</Row>
<Row>
    <Col className='mt-3'><strong>Password</strong></Col>
    <Col className='mt-3'><input value={pass} type='password' onChange={(e)=>{setPass(e.target.value)}}/></Col>
</Row>
<Row>
    <Col className='mt-3'><Button variant="success" onClick={subBtn}>Submit</Button></Col>
    <Col className='mt-3 ms-0'><Button variant="warning" onClick={()=>{setName('');setPass('')}}>
        Reset</Button></Col>
</Row>
<p className={style.msg}>{msg}</p>
           </div>
           </>
        )}
        
{loder && (
 <Spinner animation="border" variant="danger" style={{marginTop:'270px'}}/>
)}


        <style>
            {
                `body{
                    background-color:pink
                }`
            }
        </style>
        </>
    )
}

export default Login;