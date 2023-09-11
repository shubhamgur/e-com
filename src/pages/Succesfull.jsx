import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import style from './Succesfull.module.css';
import {delateValue,addingData,cardEmpty} from './../reducers/productSlice'

const Succesfull=()=>{

   const items=useSelector((state)=>state.item.value);
    const dispacth=useDispatch()
    console.log(items)
   useEffect(()=>{
     //  for(let i=0;i<items.length;i++){
          // items[i].id=1;
       /// }
        console.log(items)
        dispacth(cardEmpty())
       // dispacth(delateValue())
        //dispacth(addingData(items))
   },[])

    return(
        <>
        <div className={style.main}>
        <h1 className={style.iocn}><i class="bi bi-check-lg"></i></h1>
        <h1 className={style.iocn}>Thank You</h1>
        <h2 className={style.con}>Order Confirmed</h2>
        <h3 className={style.linkLine}>Go Back To <NavLink className={style.link} to='/'>Home</NavLink> Page</h3>
        </div>
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

export default Succesfull;