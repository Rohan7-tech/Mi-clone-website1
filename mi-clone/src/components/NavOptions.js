import React from 'react'
import NavCard from './NavCard.js'
import '../styles/NavOptions.css'
//import {BrowserRouter as Router,Route,Routes} from 'react-router-dom'
const NavOptions = ({miPhones,redmiPhones,tv,laptop,fitnessAndLifeStyle,home1,audio,accessories}) => {
   
  return (
  
    <div className='navOptions'>
        
  { miPhones&&miPhones.map((item,index)=>
    <NavCard name={item.name} price={item.price} key={item.image} index={index} image={item.image}/>
   )}
    {redmiPhones&&redmiPhones.map((item,index)=>
    <NavCard name={item.name} price={item.price} key={item.image} index={index} image={item.image}/>
   )}
    {tv&&tv.map((item,index)=>
    <NavCard name={item.name} price={item.price} key={item.image} index={index} image={item.image} />
   )} 
   {laptop&& laptop.map((item,index)=>
    <NavCard name={item.name} price={item.price} key={item.image} index={index} image={item.image}/>
   )}
   { fitnessAndLifeStyle&&fitnessAndLifeStyle.map((item,index)=>
    <NavCard name={item.name} price={item.price} key={item.image} index={index} image={item.image}/>
   )}
    { home1&&home1.map((item,index)=>
    <NavCard name={item.name} price={item.price} key={item.image} index={index} image={item.image}/>
   )}
   { audio&&audio.map((item,index)=>
    <NavCard name={item.name} price={item.price} key={item.image} index={index} image={item.image}/>
   )}
       { accessories&&accessories.map((item,index)=>
    <NavCard name={item.name} price={item.price} key={item.image} index={index} image={item.image}/>
   )}
   </div>
    
    
  )
}


export default NavOptions