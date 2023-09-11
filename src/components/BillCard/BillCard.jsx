import { Col, Row } from "react-bootstrap";

const BillCard=({title,price})=>{
    return(
        <div style={{backgroundColor:' rgb(240, 223, 225)'}}>
        <Row className="mb-3">
            <Col className="mt-3"><strong>{title}</strong></Col>
            <Col className="mt-3"><strong>{price}</strong></Col>
        </Row>
        <p style={{border:'1px solid '}}></p>
        </div>
    )
}

export default BillCard;