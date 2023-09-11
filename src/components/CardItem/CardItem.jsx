import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import SingleCardItem from '../SingleCardItem/SingleCardItem';
import style from './CardItem.module.css'
import { useDispatch, useSelector } from 'react-redux';
import BillCard from '../BillCard/BillCard';
import { Button } from 'react-bootstrap';
import { NavLink, useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { deleteItemCard } from '../../reducers/productSlice';

const CardItem=()=>{

const [msg,setMsg]=useState('')

const dispatch=useDispatch()

    const cards=useSelector((state)=> state.item.card)
    const login=useSelector((state)=> state.item.Userlogin)
    const items=useSelector((state)=>state.item.value);
    const ctagry=[];
console.log(cards)
    for(let i=0;i<items.length;i++){
        if(!ctagry.includes(items[i].category)){
            ctagry.push(items[i].category)
        }
        }

        const stylling=({isActive})=>isActive ? style.active:''

    const navigate=useNavigate()

    const bill=cards.map((ele,ind)=><BillCard title={ele.title} price={ele.price} />)

    let totalBill=0;
    for(let i=0;i<cards.length;i++){
totalBill+=cards[i].price
    }

const orderBtn=()=>{
    if(!login){
        navigate('/login')
        return;
    }  

    if(totalBill===0){
        setMsg('Select Items...');
        setTimeout(()=>{
setMsg('')
        },2000)
        return;
    }
    for(let i=0;i<cards.length;i++){
        dispatch(deleteItemCard(cards[i].id))
    }
    navigate('/sucess')
}


    const lists=ctagry.map((ele,ind)=><Button style={{margin:'3px 4px'}} key={ind} variant='warning'> 
    <NavLink  style={{textDecoration: "none",color:'black'}} className={stylling}  to={'/'+ele}> {ele}</NavLink>
    </Button> )

    const list=cards.map((ele,ind)=><SingleCardItem title={ele.title} price={ele.price} rating={ele.rating}
     image={ele.images[0]} key={ind} keys={ind} />)

    return(
        <>
      <div style={{backgroundColor:'rgb(211, 167, 175)',padding:'20px'}}>
      {lists}
      </div>
        <div>
        <style>
            {
                `body{
background-color:pink
                }`
            }
        </style>
        </div>
        <div className={style.main}>
        <Row>
        <Col sm={8}>{list}</Col>
        <Col sm={4}><div>
            <h2 className={style.billHeding}>Total Bill</h2>
           { bill}
           <Row className={style.total}>
            <Col><strong>Total Bill</strong></Col>
            <Col><strong>{totalBill}$</strong></Col>
           </Row>
           <div>
           <h3 className={style.msg}>{msg}</h3>
           <Button className={style.btn} onClick={orderBtn} variant='warning'>Order</Button>
           </div>
            </div></Col>
      </Row>
    
      </div>
        </>
    )
}

export default CardItem;