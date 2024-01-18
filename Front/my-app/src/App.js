import {BrowserRouter,Routes,Route} from "react-router-dom"
import MainContext from "./context/context";
import Home from "./pages/Home/Home";
import Add from "./pages/Add/Add";
import Basket from "./pages/Basket/Basket";
import Wishlist from "./pages/Wishlist/Wishlist";
import Detail from "./pages/Detail/Detail";
import { useEffect, useState } from "react";
import axios from "axios"
import toast, { Toaster } from 'react-hot-toast';
import Header from "./layout/Header/Header";
import Footer from "./layout/Footer/Footer";


function App() {
  const[data,setData]=useState([])
  const[loading,setLoading]=useState(true)
  const[error,setError]=useState("")
  const[filter,setFilter]=useState([])
  const[wish,setWish]=useState(localStorage.getItem("wish")?JSON.parse(localStorage.getItem("wish")):[])
  const[basket,setBasket]=useState(localStorage.getItem("bask")?JSON.parse(localStorage.getItem("bask")):[])
  const[count,setCount]=useState(localStorage.getItem("count")?Math.max(0,parseInt(localStorage.getItem("count"))):0)

const addBasket=(item)=>{
  const target=basket.find(pro=>pro._id==item._id)
  if(!target){
    const newItem={...item,count:1,totalPrice:item.price}
    setBasket([...basket,newItem])
    localStorage.setItem("bask",JSON.stringify([...basket,newItem]))
    toast.success("Əlavə olundu")
  }else{
    const newData={...item,count:target.count+1,totalPrice:item.price*(target.count+1)}
    setBasket([...basket.filter(pro=>pro._id != item._id),newData])
    localStorage.setItem("bask",JSON.stringify([...basket.filter(pro=>pro._id != item._id),newData]))
    toast.success("Əlavə olundu")
  }
}

const handleIncrease=(item)=>{
  const updatedata=[...basket]
  const target= updatedata.find(pro=>pro._id==item._id)
  target.count +=1
  target.totalPrice=item.price*target.count
  setBasket(updatedata)
  localStorage.setItem("bask",JSON.stringify(updatedata))
}

const handleDecrease=(item)=>{
  let updatedata=[...basket]
  let target= updatedata.find(pro=>pro._id==item._id)

  if(target.count > 1){
setCount(count-1)
    localStorage.setItem("count",count-1) 

    target.count -= 1
  target.totalPrice=item.price*target.count
  setBasket(updatedata)
  localStorage.setItem("bask",JSON.stringify(updatedata))
  }else{
    setCount(count-1)
    localStorage.setItem("count",count-1) 
    updatedata=updatedata.filter(pro=>pro._id !== item._id)
    setBasket(updatedata)
    localStorage.setItem("bask",JSON.stringify(updatedata))
       

  }
}

  const handleDelete=()=>{
    setWish([])
    localStorage.removeItem("wish")
  }
  const deleteHandler=(id)=>{
    
    axios.delete(`http://localhost:3009/user/${id}`).then(res=>{
      setData([...res.data])
      setFilter([...res.data])
    })
  }

  const addWishlist=(item)=>{
    const target=wish.find(items=>items._id==item._id)
    if(target){
    toast.error("Wishlistdə mövcuddur")
    } else{
  setWish([...wish,item])
      localStorage.setItem("wish",JSON.stringify([...wish,item]))
      toast.success("Əlavə olundu")

    }
  }
  const removeWish=(id)=>{
    const item=wish.find(wi=>wi._id==id)
    wish.splice(wish.indexOf(item),1)
    setWish([...wish])
    localStorage.setItem("wish",JSON.stringify([...wish]))
  }

  const handleFilter=()=>{
    setFilter([...data.sort((a,b)=>b.price - a.price)])
  }

  const searchHandler=(searchValue)=>{
    if(searchValue){
      setFilter([...data.filter(item=>item.title.toLowerCase().trim().includes(searchValue.trim().toLowerCase()))])
    }else{
      setFilter([...data])
    }
  }

  useEffect(()=>{
  axios.get("http://localhost:3009/user").then(res=>{
    setData(res.data)
    setFilter(res.data)
    setLoading(false)
  }).catch(error=>{
    setLoading(false)
    setError(error)
  })
  },[])
  const datas={
    handleDelete,searchHandler,deleteHandler,addWishlist,removeWish,handleFilter,handleDecrease,handleIncrease,addBasket,
    data,setData,loading,setLoading,error,setError,filter,setFilter,wish,setWish,basket,setBasket,count,setCount

  }
  return (
    <MainContext.Provider value={datas}>
     <BrowserRouter>
     <Header/>
     <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/add" element={<Add/>}/>
      <Route path="/basket" element={<Basket/>}/>
      <Route path="/wishlist" element={<Wishlist/>}/>
      <Route path="/:id" element={<Detail/>}/>
     </Routes>
      <Footer/>
    </BrowserRouter>
    </MainContext.Provider>
   
  );
}

export default App;
