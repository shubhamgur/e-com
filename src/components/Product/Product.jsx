import { Button } from "react-bootstrap";
import { useEffect, useState } from "react";
import { ButtonGroup } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { addingData, cardEmpty, delateValue, loginConditionLogout } from "../../reducers/productSlice";
import style from './Product.module.css';
import { NavLink, useNavigate } from "react-router-dom";

const Product=()=>{

const [input,setInput]=useState('')

const cards=useSelector((state)=> state.item.card)

const navigate=useNavigate()

const login=useSelector((state)=> state.item.Userlogin)


const ctagry=[];
const dispatch=useDispatch();

const items=useSelector((state)=>state.item.value);
console.log(items)

for(let i=0;i<items.length;i++){
if(!ctagry.includes(items[i].category)){
    ctagry.push(items[i].category)
}
}

const productss=ctagry.filter((ele)=>{if(input===''){return ele}
else if(ele.toLowerCase().includes(input.toLowerCase())){return ele}})
.map((ele,ind)=><Button key={ind} style={{margin:'20px 35px'}} onClick={()=>{console.log(ele)}} variant="warning">
 <NavLink to={ele} className={style.link}>{ele}</NavLink> 
    </Button>)

useEffect(()=>{
    if(items.length===0){
fetch('https://dummyjson.com/products?limit=100').then((res)=>res.json()).then((data)=>{
    dispatch(addingData(data.products));
})
    }else{
    console.log('one')
    dispatch(delateValue());
    dispatch(addingData(items)); 
    }
},[])

    return(
        <>
        <div>
            <style>
              {`  body{
background-image:url('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRQjncasE6CcOWE41bSfOdR7FUEY9NfEqgx6g&usqp=CAU');
background-repeat: no-repeat;
  background-size: 1450px 630px;
              }`}
            </style>
            </div>
            <div className={style.main}>
            <h1 className={style.heading}>Welcome Online Shopping</h1>
           <span className={style.contor}> 
          {!login && (<Button variant="light" onClick={()=>{navigate('/login')}}>Login</Button>)} 
          {login && (<Button variant="danger" onClick={()=>{dispatch(loginConditionLogout())}}>Logout</Button> )}
           <Button onClick={()=>{navigate('/card')}} className="ms-3" variant="light"><i style={{fontSize:'20px'}} class="bi bi-cart-check"></i>
           <i style={{marginLeft:'5px'}}  class="bi bi--circle-fill">{cards.length}</i>
           </Button></span>
            </div>
<h3 className={style.category}>Categorys</h3>
<div>
<input onChange={(e)=>{setInput(e.target.value)}} className={style.input} type='text' placeholder="Search..."/>
</div>
<div className={style.btns}>
{productss}
{productss.length===0 && (
    <h1 className={style.nfound}>Item Not Found...</h1>
)}
</div>
        </>
    )
}

export default Product;