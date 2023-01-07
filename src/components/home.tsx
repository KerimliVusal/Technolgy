import  Col from "react-bootstrap/Col"
import  Row from "react-bootstrap/Row"
import Container from "react-bootstrap/Container";
import 'bootstrap/dist/css/bootstrap.min.css';
import home from '../images/hometech.webp'
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';
import SplitButton from 'react-bootstrap/SplitButton';
import de1 from '../images/deliveri.webp'
import de2 from '../images/deliver2.webp'
import de3 from '../images/deliveri3.webp'
import de4 from '../images/deliveri4.webp'
import { data } from "./data";
import { BsHeart,BsFillHeartFill } from "react-icons/bs";
import Carousel from 'react-bootstrap/Carousel';
import pic from '../images/deals.png.webp'
import Form from 'react-bootstrap/Form';
import pop1 from  '../images/pop.webp'
import pop2 from  '../images/pop2.webp'
import pop3 from  '../images/pop3.webp'
import pop4 from  '../images/pop4.webp'
import 'react-multi-carousel/lib/styles.css';
import Carousell from 'react-multi-carousel'
import Popular from "./popular";
import {AiOutlineMenu} from 'react-icons/ai'
import { AnimationOnScroll } from 'react-animation-on-scroll';
import "animate.css/animate.min.css";
import {RxDoubleArrowUp} from 'react-icons/rx'
import Footer from "./footer";
import { cartType } from "../App";
type Props={
  like: (product: cartType) => void;
}
const Home: React.FC<Props>=({like})=>{
  window.onscroll = function() {scrollFunction()};

function scrollFunction() {
 const mybutton= document.querySelector<HTMLElement>('.scroltop')!;
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}
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

    var countDownDate = new Date("Jan 5, 2024 15:37:25").getTime();

// Update the count down every 1 second
var x = setInterval(function() {

  // Get today's date and time
  var now = new Date().getTime();
    
  // Find the distance between now and the count down date
  var distance = countDownDate - now;
    
  // Time calculations for days, hours, minutes and seconds
//   var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);
    
  // Output the result in an element with id="demo"
 const de=document.querySelector<HTMLElement>(".demo")!.innerHTML = hours + "h:"
  + minutes + "m:" + seconds + "s ";
    
  // If the count down is over, write some text 
  if (distance < 0) {
    clearInterval(x);
    //  document.getElementById("demo").innerHTML = "EXPIRED";
  }
}, 1000);
    return(<>
    <Container fluid className='homecontainer'>
        <Row lg={3} className='home1' xs={1} sm={1}>
            <Col lg={3} xs={12} sm={12}>
            
                    <div className="shophome" style={{  backgroundColor:'lightblue',fontSize:'25px'}}> <AiOutlineMenu size={30}></AiOutlineMenu> Categories</div>
                    <div className="shophome"><label><input type="radio" name="test"/> Cameras & Photos</label></div>
                    <div className="shophome"><label><input type="radio" name="test"/> Accessories (3600)</label></div>
                    <div className="shophome"><label><input type="radio" name="test"/>Smartphones & Tablets</label></div>
                    <div className="shophome"><label><input type="radio" name="test"/> Bay item (3600)</label></div>
                    <div className="shophome"><label><input type="radio" name="test"/> Electronics (3600)</label></div>
                    <div className="shophome"><label><input type="radio" name="test"/> Gadgets (3600)</label></div>
                    <div className="shophome"><label><input type="radio" name="test"/> Electronics (3600)</label></div>
                    <div className="shophome"><label><input type="radio" name="test"/>Video Games & Consoles</label></div>
                    <div className="shophome"><label><input type="radio" name="test"/> TV & Audio</label></div>

            </Col>
            <Col lg={4} xs={12} sm={12} className="home31"><div className="home3"><h1>NEW ERA OF SMARTPHONES</h1>
            <h2 className="home5"><span className="home4">$520</span>$460</h2>
            <button>Shop now!</button></div></Col>
            <Col lg={5} xs={12} sm={12} className='home2'>
            </Col>
        </Row>
        <AnimationOnScroll animateIn="animate__bounceInUp">
        <Row lg={4} className='del m-5' xs={1} sm={1}>
            <Col className="del1"><p><img src={de1}/>Free Delivery
<div className="delidiv">from $50</div></p></Col>
            <Col className="del1"><p><img src={de2}/>Free Delivery
<div className="delidiv">from $50</div></p></Col>
            <Col className="del1"><p><img src={de3}/>Free Delivery
<div className="delidiv">from $50</div></p></Col>
            <Col className="del1"><p><img src={de4}/>Free Delivery
<div className="delidiv">from $50</div></p></Col>
        </Row></AnimationOnScroll>
        <AnimationOnScroll animateIn="animate__bounceInUp">
        <Row lg={2} className='m-5' xs={1} sm={1}>
        
            <Col lg={4} className='headcol'>
            <Carousel>
      <Carousel.Item>
        <img
          src={pic}  style={{backgroundPosition:'center center',marginLeft:'20px'}}
        /> 
      </Carousel.Item>
      <Carousel.Item>
        <img
          src={pic}  style={{backgroundPosition:'center center',marginLeft:'20px'}}
        /> 
      </Carousel.Item>
      </Carousel>
      <div className='head3'><span className='head1'><span style={{color:'#636363'}}> headphones</span> <span style={{color:'red'}}>$300</span></span><h4 className='head1'>Beoplay H7 <span>$225</span></h4>
      <div className="rangesale"> 
      <span className='head5'><span>available: 6</span><span>aleready sold: 28</span></span>
      <Form.Range value={20} disabled={true}/>
    </div>
      <div className='datehade'><h4 style={{color:'rgb(151,51,51)'}}>Hurry up!</h4><span className='demo'></span></div>
      </div>
            </Col>
           
            <Col lg={8} className='mt-3'> 
              <Row lg={1} xs={1} sm={1}><Col  className='head6'><div className='head8'><span className='head7'>Featured</span><span className='head7'>On Sale</span><span className='head7'>Best Rated</span></div></Col></Row>
            <Row lg={4} className='ms-5 p-0' xs={1} sm={2}>
                {
                    data.filter((products:any,index:number)=>index<8).map((product:any,index:number)=>(
                        <Col className='shopcol' key={index}><div className='shop1'><img src={product.imgurl} width='90%' style={{backgroundPosition:'center center',backgroundSize:'cover',backgroundRepeat:'no-repeat'}}/><span className='shopnew'>new</span><span className='shopheart'><BsFillHeartFill className={`hart${product.id}`} onClick={()=>like(product)}></BsFillHeartFill></span><p className='shoptxt'><p style={{textAlign:'center'}}>{product.cost}$</p>{product.name}</p><span className='shopcolor'><input type='radio' className='shopcolor1'/><input type='radio' className='shopcolor2'/><input type='radio' className='shopcolor3'/></span><button className='shopbuton' >Add To Cart</button></div></Col>
                ))
                }

            </Row>
            </Col>
        </Row></AnimationOnScroll>
       <Row lg={1}>
        <Popular like={like}/>
       </Row>
       <button className='scroltop'  onClick={()=>topFunction()}><RxDoubleArrowUp></RxDoubleArrowUp></button>
    </Container>
    <Footer/>
    </>)
};export default Home