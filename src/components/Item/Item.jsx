import { Button, Col ,Row} from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { addCards } from '../../reducers/productSlice';
import style from './Item.module.css'
import Carousel from 'react-bootstrap/Carousel';

const Item=({title,brand,price,rating,dess,image,keys,addCard,added,id,buynowBtn,image1,image2})=>{

const navigate=useNavigate()

const cardI=useSelector((state)=>state.item.card);



    return(
        <div className={style.main}>
            <Row>
                <Col>
            <h3 className={style.title}>{title}</h3>
        <div className={style.Carousel}>
        <img src={image} height='200px' width='300px'/>
        </div>
        </Col>
        <Col style={{marginLeft:'120px'}}>
        <h4><span className={style.wigth}>Brand:-</span>{brand}</h4>
        <h4><span className={style.wigth}>price:-</span>{price}$</h4>
        <h4><span className={style.wigth}>rating:-</span>{rating}/5</h4>
        <strong>{dess}</strong>
        <div className='mt-3'>
        <Button variant="info" onClick={()=>{addCard(keys,id)}} disabled={added}>{added ? 'Added':'Add To Card'}</Button>
        <Button className='ms-3' onClick={()=>{buynowBtn(keys,id)}} variant="success">Buy Now</Button>
        </div>
        </Col>
        </Row>
        </div>
    )
}

export default Item;