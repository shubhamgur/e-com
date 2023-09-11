import { Button } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { NavLink, useNavigate, useParams } from "react-router-dom";
import { addCards, addedItem, baynow } from "../../reducers/productSlice";
import Footer from "../Footer/Footer";
import Heder from "../Heder/Heder";
import Item from "../Item/Item";
import style from './SingleProduct.module.css'

const SingleProduct=()=>{

    const dispatch=useDispatch()
    const data=useParams()
    const ctagry=[];

const navigate=useNavigate()

    const cards=useSelector((state)=> state.item.card)
    const items=useSelector((state)=>state.item.value);

    for(let i=0;i<items.length;i++){
        if(!ctagry.includes(items[i].category)){
            ctagry.push(items[i].category)
        }
        }

        const stylling=({isActive})=>isActive ? style.active:''
       

        const list1=items.filter((ele,inds)=>{if(ele.category===data.pid){return ele}});
        const addCard=(ind,id)=>{
            dispatch(addCards(list1[ind]))  
           dispatch(addedItem(id))
        }

const buynowBtn=(ind,id)=>{
    navigate('/card')
}

console.log(list1)
//console.log( singleItem)

const list=list1.map((ele,ind)=>
<Item title={ele.title} key={ind} keys={ind} brand={ele.brand} price={ele.price} rating={ele.rating} dess={ele.description}
image={ele.images[0]} image2={ele.images[3]} image3={ele.images[2]} buynowBtn={buynowBtn} addCard={addCard} added={ele.added} id={ele.id}/>)



const lists=ctagry.map((ele,ind)=><Button style={{margin:'3px 4px'}} key={ind} variant='warning'> 
        <NavLink  style={{textDecoration: "none",color:'black'}} className={stylling}  to={'/'+ele}> {ele}</NavLink>
        </Button> )

    return(
        <>
        <Heder/>
        <div style={{backgroundColor:'rgb(211, 167, 175)',padding:'20px'}}>
      {lists}
      </div>
        <style>
        {`  body{
                   background-color:pink
                }`}
        </style>
        <div>
            {list}
        </div>
        <div>
        <Footer/>
        </div>
        </>
    )
}

export default SingleProduct;