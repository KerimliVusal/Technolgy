import { useState ,useEffect,useRef} from 'react';
import { Prev } from 'react-bootstrap/lib/Pagination';
import './App.css';
import Cart from './components/cart';
import Footer from './components/footer';
import Home from './components/home';
import Popular from './components/popular';
import Shop from './components/shop';
import Navba from './components/nav';
import  { BrowserRouter, Route, Routes } from 'react-router-dom'
import Blog from './components/blog';
import Contact from './components/contact';
import Loa from './components/loa';
export type cartType={
  name:string;
  cost:number;
  amount:number;
  imgurl:string;
  id:number;
}
function App() {
  const[cartitem,setCartitem]=useState([] as cartType[])
  const [liken,setLiken]=useState([] as cartType[])
  const [loa,setLoa]=useState(true)
  const likref=useRef<any>()
  const addTocart = (clickedItem: cartType) => {
    setCartitem(prev => {
      // 1. Is the item already added in the cart?
      const isItemInCart = prev.find(item => item.id === clickedItem.id);
  
      if (isItemInCart) {
        return prev.map(item =>
          item.id === clickedItem.id
            ? { ...item, amount: item.amount + 1 }
            : item
        );
      }
      // First time the item is added
      return [...prev, { ...clickedItem, amount: 1 }];
    });
  };
  const removeFromcart = (id: number) => {
    setCartitem(prev =>
      prev.reduce((ack, item) => {
        if (item.id === id) {
          if (item.amount === 1) return ack;
          return [...ack, { ...item, amount: item.amount - 1 }];
        } else {
          return [...ack, item];
        }
      }, [] as cartType[])
    );
  };

   

  const like = (product: cartType) => {
    
    //   // 1. Is the item already added in the cart?
    //   const isItemInCart = prev.find(item => item.id === liked.id);
  
    //   if (isItemInCart) {
    //     return prev.map(item =>
    //       item.id === liked.id
    //         ? { ...item, amount: item.amount + 1 }
    //         : item
    //     );
    //   }
    //   // First time the item is added
    //   return [...prev, { ...liked, amount: 1 }];

    // });
    // likref.current=liken.find(ite=>ite.id===liked.id)

          const isInCart = liken.find(item => item.id ===product.id);
         
          for(let i=0;i<20;i++){
            if(isInCart){
              if(product.id===liken[i].id){
               const col=document.querySelector<HTMLElement>(`.hart${i}`)!.style.color='red';
              setLiken([...liken])}

            } 
            else{
               const col=document.querySelector<HTMLElement>(`.hart${i}`)!.style.color='red';
               return setLiken([...liken,product])

            }
           
          }
         }
       
  useEffect(()=>{
    setTimeout(()=>{
      setLoa(false)
    },7000)
   },[])
  return (
    <div className="App">
      {loa==true?<Loa/>
      :
        <div>
      <Navba cartitem={cartitem}/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/blog' element={<Blog/>}/>
        <Route path='/contact' element={<Contact/>}/>
        <Route path='/cart' element={<Cart cartitem={cartitem} addTocart={addTocart} removeFromcart={removeFromcart}/>}/>
        <Route path='/shop' element={<Shop addTocart={addTocart} like={like}/>}/>
      </Routes> 
      
 </div>   
}
    </div>
  );
}

export default App;
