import pop1 from  '../images/pop.webp'
import pop2 from  '../images/pop2.webp'
import pop3 from  '../images/pop3.webp'
import pop4 from  '../images/pop4.webp'
import 'react-multi-carousel/lib/styles.css';
import Carousel from 'react-multi-carousel'
import  Container  from 'react-bootstrap/Container';
import  Row  from 'react-bootstrap/Row';
import  Col  from 'react-bootstrap/Col';
import 'bootstrap/dist/css/bootstrap.min.css';
import ban from '../images/ban11.webp'
import { data } from './data';
import { BsHeart,BsFillHeartFill } from 'react-icons/bs';
import phone from '../images/phon.webp'
import tr1 from '../images/tre1.webp'
import tr2 from '../images/tr2.webp'
import tr3 from '../images/tr3.webp'
import trend1 from '../images/tren1.webp'
import trend2 from '../images/tren2.webp'
import trend3 from '../images/tren3.webp'
import { AnimationOnScroll } from 'react-animation-on-scroll';
import "animate.css/animate.min.css";
import { cartType } from '../App';
import {useState} from 'react'
type Prop={
  like: (product: cartType) => void;
}
const Popular:React.FC<Prop>=({like})=>{
  const[col,setCol]=useState<boolean>(false)
    const responsive = {
        superLargeDesktop: {
          // the naming can be any, depends on you.
          breakpoint: { max: 4000, min: 3000 },
          items: 5
        },
        desktop: {
          breakpoint: { max: 3000, min: 1024 },
          items: 3
        },
        tablet: {
          breakpoint: { max: 1024, min: 464 },
          items: 2
        },
        mobile: {
          breakpoint: { max: 464, min: 0 },
          items: 1
        }
      };
    return(<Container fluid>
      <AnimationOnScroll animateIn="animate__bounceInUp">

<Row lg={2} className='mac' xs={1} sm={1}>
    <Col lg={4}>
    <div className='mac1'>
        <p>Macbook</p>
        <h3>MACBOOK Air 13</h3>
        <p>Lorem ipsum dolor sit amet, Similique, quaerat provident,quaerat provident,quaerat provident!</p>
        <button>Explore</button>
    </div>
    </Col>
    <Col lg={8}>
    <img src={ban} width='80%'/>
    </Col>
</Row></AnimationOnScroll>
<AnimationOnScroll animateIn="animate__bounceInUp">

<Row lg={1} xs={1} sm={1} className='mt-5'><Col  className='head6'><div className='head8'><span className='head7'>Hot Arrivals</span><span className='head7'>Audio & Video 
</span><span className='head7'>Laptops & Computers</span></div></Col></Row></AnimationOnScroll>
           
<AnimationOnScroll animateIn="animate__bounceInUp">
<Row lg={2}>
            <Col lg={9}>
            <Row lg={5} className='ms-5 p-0' xs={1} sm={2}>
                {
                    data.filter((products:any,index:number)=>index>9).map((product:any,index:number)=>(
                        <Col  className='shopcol' key={index}><div className='shop1'><img src={product.imgurl} width='70%' style={{backgroundPosition:'center center',backgroundRepeat:'no-repeat',backgroundSize:'cover'}}/><span className='shopnew'>new</span><span className='shopheart'><BsFillHeartFill className={`hart${product.id}`} onClick={()=>like(product)}></BsFillHeartFill></span><p className='shoptxt'><p style={{textAlign:'center'}}>{product.cost}$</p>{product.name}</p><span className='shopcolor'><input type='radio' className='shopcolor1'/><input type='radio' className='shopcolor2'/><input type='radio' className='shopcolor3'/></span><button className='shopbuton' >Add To Cart</button></div></Col>
                ))
                }
        
            </Row></Col>
            <Col lg={3} className='shopcol p-5' ><div className='shop1 p-1'><img src={phone} style={{backgroundPosition:'center center',backgroundRepeat:'no-repeat',backgroundSize:'cover'}}/><span className='shopnew'>new</span><span className='shopheart'><BsFillHeartFill onClick={()=>setCol(()=>!col)} className={col==true?'bck12':'bck13'}></BsFillHeartFill></span><p className='shoptxt'><p>LUNA Smartphone $379</p></p><span className='shopcolor'><input type='radio' className='shopcolor1 mt-3'/><input type='radio' className='shopcolor2'/><input type='radio' className='shopcolor3'/></span><button className='shopbuton mt-5' >Add To Cart</button></div>
            </Col></Row></AnimationOnScroll>
            
            <AnimationOnScroll animateIn="animate__bounceInUp">
        <Row lg={2} className='my-5 p-5' xs={1} sm={2}>
        <Col lg={3} >
           <div className='pop1'> <h3>Popular Categories</h3>
            </div>
            </Col>
        <Col lg={9} >
<Carousel responsive={responsive} 
       infinite={true} className="owl-carousel owl-theme skill-slider coruselimg trendimg " autoPlay={true} centerMode={true}>
  <div className='item1'><img src={pop1} height='60px' /><p style={{textAlign:'center',paddingTop:'20px',height:'100px'}}>Smartphones&Tablets</p></div>
  <div className='item2'><img src={pop2} height='60px'/><p style={{textAlign:'center',paddingTop:'20px',height:'100px'}}>Computers&Laptops</p></div>
  <div className='item1'><img src={pop3} height='60px'/><p style={{textAlign:'center',paddingTop:'20px',height:'100px'}}>Gadgest</p></div>
  <div className='item2'><img src={pop4} height='60px'/><p style={{textAlign:'center',paddingTop:'20px',height:'100px'}}>Accessories</p></div>
</Carousel>
</Col>
        </Row></AnimationOnScroll>
        <AnimationOnScroll animateIn="animate__bounceInUp">
        <Row lg={2} className='trend12  p-5'>
            <Col lg={4}><div className='trend11'><h2>Trend 2023</h2>
            <p>Lorem ipsum dolor sit amet, consectetur  consectetur  adipiscing Donec et.</p></div></Col>
            <Col lg={8}>
            <Row lg={3} xs={1} sm={1}>
        <Col  className='shopcol ' ><div className='shop1' style={{backgroundColor:'white',padding:'5px',marginBottom:'10px'}}><img src={trend1} style={{backgroundPosition:'center center',backgroundRepeat:'no-repeat',backgroundSize:'cover',width:'160px',height:'120px',}}/><span className='shopnew'>new</span><span className='shopheart'><BsHeart></BsHeart></span><p className='shoptxt'><p style={{color:'rgb(131,31,31)',marginTop:'30px',textAlign:'center'}}>Jump White 325$</p></p><span className='shopcolor'><input type='radio' className='shopcolor1'/><input type='radio' className='shopcolor2'/><input type='radio' className='shopcolor3'/></span></div></Col>
        <Col  className='shopcol ' ><div className='shop1' style={{backgroundColor:'white',padding:'5px',marginBottom:'10px'}}><img src={trend2} style={{backgroundPosition:'center center',backgroundRepeat:'no-repeat',backgroundSize:'cover',width:'160px',height:'120px'}}/><span className='shopnew'>new</span><span className='shopheart'><BsHeart></BsHeart></span><p className='shoptxt'><p style={{color:'rgb(131,31,31)',marginTop:'30px',textAlign:'center'}}>Jump White 325$</p></p><span className='shopcolor'><input type='radio' className='shopcolor1'/><input type='radio' className='shopcolor2'/><input type='radio' className='shopcolor3'/></span></div></Col>
        <Col  className='shopcol ' ><div className='shop1' style={{backgroundColor:'white',padding:'5px',marginBottom:'10px'}}><img src={trend3} style={{backgroundPosition:'center center',backgroundRepeat:'no-repeat',backgroundSize:'cover',width:'160px',height:'120px'}}/><span className='shopnew'>new</span><span className='shopheart'><BsHeart></BsHeart></span><p className='shoptxt'><p style={{color:'rgb(131,31,31)',marginTop:'30px',textAlign:'center'}}>Jump White 325$</p></p><span className='shopcolor'><input type='radio' className='shopcolor1'/><input type='radio' className='shopcolor2'/><input type='radio' className='shopcolor3'/></span></div></Col>

        </Row>
        </Col>
        </Row></AnimationOnScroll>
        <AnimationOnScroll animateIn="animate__bounceInUp">
        <Row lg={3} xs={1} sm={1} className='del11 m-5 pt-5'>
            <Col lg={4} className="del12"><div className="del14"><p style={{textAlign:'left'}}> Trend 2023
<div className="del13" style={{textAlign:'left',}}>Lorem ipsum dolor sit amet, consectetur.</div></p><div><img src={tr1}/></div></div></Col>
            <Col lg={4} className="del12"><div className="del14"><p style={{textAlign:'left'}}>Trend 2023
<div className="del13" style={{textAlign:'left'}}>Lorem ipsum dolor sit amet, consectetur.</div></p><div><img src={tr2}/></div></div></Col>
            <Col lg={4} className="del12"><div className="del14"><p style={{textAlign:'left'}}>Trend 2023
<div className="del13" style={{textAlign:'left'}}>Lorem ipsum dolor sit amet, consectetur.</div></p><div><img src={tr3}/></div></div></Col>
          
        </Row></AnimationOnScroll>
       
</Container>
    )
};export default Popular