import { Button, Col, Row } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { deleteCart, deleteItemCard } from "../../reducers/productSlice";
import style from './SingleCardItem.module.css';

const SingleCardItem=({title, price, rating, image,keys})=>{


    const dispatch=useDispatch();
    const cards=useSelector((state)=> state.item.card)

const deleteBtn=()=>{
dispatch(deleteCart(keys))
dispatch(deleteItemCard(cards[keys].id))
}
console.log(keys)
    return(
        <div className={style.border}>
<Row>
    <Col>
    <img src={ image} height='170px' width='170px'/>
    </Col>
    <Col className={style.secondCol}><h4 className={style.heding}><strong>{title}</strong></h4>
    <h5><strong className={style.wigth}>Price:-</strong>{ price}$ </h5>
    <h5><strong className={style.wigth}>Rating:-</strong>{rating}/5</h5>
    <h5><strong className={style.wigth}>Quantity:-</strong>1</h5>
    <div className={style.btnss}> <Button variant="danger" onClick={deleteBtn} className={style.btn}>Delete</Button></div>
    </Col>
</Row>
        </div>
    )
}

export default SingleCardItem;