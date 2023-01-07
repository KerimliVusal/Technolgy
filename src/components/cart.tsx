import 'bootstrap/dist/css/bootstrap.min.css';
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Container from 'react-bootstrap/Container'
import { data } from './data';
// type Props={
//     cartItems:CartItemType;
// }
const Cart:React.FC<any>=({cartitem ,removeFromcart,addTocart})=>{
    return(<Container className='cartback' fluid>
        <Row lg={1} xs={1} sm={1}>
            <Col>
            {cartitem.length?
             cartitem.map((pro:any,index:number)=>
                <Row key={index} lg={3} xs={3} sm={3}> 
            <Col lg={4} xs={6} className='cart1 p-2'><div ><img src={pro.imgurl} /></div><div>{pro.name}</div></Col>
            <Col lg={3} xs={3} className='cart2 '><div className='cart3'><button  onClick={() => removeFromcart(pro.id)}>-</button><div>{pro.amount}</div><button onClick={() => addTocart(pro)}>+</button></div></Col>
            <Col lg={3} xs={3} className='cart2 '>{pro.cost}$</Col>
             </Row>
):
<Col  className='ecart'><p className='emptycart'>Cart is Empty</p></Col>
}
</Col>
        </Row>
    </Container>
    );
};export default Cart