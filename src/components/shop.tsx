import  Row  from 'react-bootstrap/Row';
import  Col  from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import 'bootstrap/dist/css/bootstrap.min.css';
import {BsHeart,BsFillHeartFill} from 'react-icons/bs'
import { data } from './data';
import * as React from 'react';
import Box from '@mui/material/Box'
import Slider from '@mui/material/Slider'
import Form from 'react-bootstrap/Form';
import { cartType } from '../App';
import { useState,useRef } from 'react';
import {HiOutlineShoppingBag} from 'react-icons/hi'
type Props={
    addTocart: (product: cartType) => void;
    like: (product: cartType) => void;
}

const Shop: React.FC<Props>=({addTocart,like})=>{
  const addref=useRef<cartType>()
    const [filt,setFilt]=useState<any>('name')
    const [adlike,setAdlike]=useState([])
   
    const marks = [
        {
          value: 100,
          label: '100$',
        },
        {
          value: 1000,
          label: '1000$',
        },
        {
          value: 1500,
          label: '1500$',
        },
        {
          value: 3000,
          label: '3000$',
        },
      ];
      
      function valuetext(value: number) {
        return `${value}$`;
      }
      function sortfilt(filt:any) {
        return function (a:any, b:any) {
        if (a[filt] > b[filt]) return 1;
        if (a[filt] < b[filt]) return -1;
        return 0;
        }
        };
        const addlike=(product:cartType)=>{
         
        }
       
    return(<Container fluid>
        <Row><Col className='shopenterance'><h2 style={{textShadow: '-4px 0px 0px rgba(0,0,0,0.45)'}}>Shop </h2><p style={{fontSize:'20px',fontWeight:'700'}}>Shop | Home</p></Col></Row>
        <Row lg={2} className='m-5  p-0'>
            <Col lg={3}>
            <Row lg={1} xs={1} sm={1} md={1} >
                    <Col className="shopcat p-0">
                    <div className="shopcatigories2" ><h4>Browse Categories</h4></div>
                    <div className="shopcatigories1"><label>  <input type="radio" name="test"/> Men (3600)</label></div>
                    <div className="shopcatigories1"><label><input type="radio" name="test"/>  Women (3600)</label></div>
                    <div className="shopcatigories1"><label><input type="radio" name="test"/> Accessories (3600)</label></div>
                    <div className="shopcatigories1"><label><input type="radio" name="test"/> Footwear (3600)</label></div>
                    <div className="shopcatigories1"><label><input type="radio" name="test"/> Bay item (3600)</label></div>
                    <div className="shopcatigories1"><label><input type="radio" name="test"/> Electronics (3600)</label></div>
                    <div className="shopcatigories1"><label><input type="radio" name="test"/>Video Games & Consoles</label></div>
                    <div className="shopcatigories1"><label><input type="radio" name="test"/> TV & Audio</label></div>
                    <div className="shopcatigories1"><label><input type="radio" name="test"/>Gadgets</label></div>

                  </Col>
                    <Col  className="shopcat p-0">
                    <div className="shopcatigories2" ><h4>Product Filters</h4></div>
                    <p> Brands</p>
                    <div className="shopcatigories1"><label>  <input type="radio" name="test"/> Apple(29)</label></div>
                    <div className="shopcatigories1"><label><input type="radio" name="test"/>  Asus(29)</label></div>
                    <div className="shopcatigories1"><label><input type="radio" name="test"/> Gionee(19)</label></div>
                    <div className="shopcatigories1"><label><input type="radio" name="test"/> Micromax(19)</label></div>
                    <div className="shopcatigories1"><label><input type="radio" name="test"/> Samsung(19)</label></div>
                    <div>
                    <p> Colors</p>
                    <div className="shopcatigories1"><label>  <input type="radio" name="test"/> Black(29)</label></div>
                    <div className="shopcatigories1"><label><input type="radio" name="test"/>  Black Leather(29)</label></div>
                    <div className="shopcatigories1"><label><input type="radio" name="test"/> Black with red(19)</label></div>
                    <div className="shopcatigories1"><label><input type="radio" name="test"/> Gold(19)</label></div>
                    </div>
                    <div className='inputrange'>
                        <p>Price</p>
                       
                    <Form.Range   />
                    </div>
                    </Col>
                    <Col></Col>
                </Row>
        
            </Col>
            <Col lg={9} className='m-0 p-0'>
                <Row lg={1} className='filtrow'>
                    <Col className='shopfilter'><p className='filtp'><select value={filt} onChange={(event:React.ChangeEvent<HTMLSelectElement>)=>setFilt(event.target.value)} ><option value='name'>Name</option>
                    <option value='cost'>Price</option><option value='id'>Most popular</option></select></p></Col>
                </Row>
            <Row lg={5} xs={1} sm={2}  className=' mt-2 p-3'>
                {
                    data.sort(sortfilt(filt)
                    ).map((product:any,index:number)=>(
                        <Col className='shopcol' key={index}><div className='shop1'><img src={product.imgurl} height='100px' /><span className='shopnew'>new</span><span className='shopheart'><BsFillHeartFill className={`hart${index}`} onClick={()=>like(product)}></BsFillHeartFill></span><p className='shoptxt'><p style={{textAlign:'center'}}>{product.cost}$</p>{product.name}</p><span className='shopcolor'><input type='radio' className='shopcolor1'/><input type='radio' className='shopcolor2'/><input type='radio' className='shopcolor3'/></span><button className='shopbuton' onClick={()=>addTocart(product)}>Add To Cart</button></div></Col>
                ))
                }

            </Row>
            </Col>
        </Row>
    </Container>)
};export default Shop;