import './App.css';
import PreNavbar from './components/PreNavbar';
import Navbar from './components/Navbar.js'
import {BrowserRouter as Router,Route,Routes} from 'react-router-dom'
import Slider from './components/Slider.js'
import Offers from './components/Offers';
import data from './data/data.json'
import Heading from './components/Heading.js'
import StarProduct from './components/StarProducts.js'
import HotAccessoriesMenu from './components/HotAccessoriesMenu.js'
import HotAccessories from './components/HotAccessories.js'
import NavOptions from './components/NavOptions.js'
var banner =data.banner;
var Offer=data.offer;
var starProduct=data.starProduct;
var music=data.hotAccessories.music;
var musicCover=data.hotAccessoriesCover.music;
var smartDevice=data.hotAccessories.smartDevice;
var smartDeviceCover=data.hotAccessoriesCover.smartDevice;
var home=data.hotAccessories.home;
var homeCover=data.hotAccessoriesCover.home;
var lifestyle=data.hotAccessories.lifeStyle;
var lifestyleCover=data.hotAccessoriesCover.lifeStyle;
var mobileAccessories=data.hotAccessories.mobileAccessories;
var mobileAccessoriesCover=data.hotAccessoriesCover.mobileAccessories;
var miPhones=data.miPhones;
var redmiPhones=data.redmiPhones;
var tv=data.tv;
var laptop=data.laptop;
var fitnessAndLifeStyle=data.fitnessAndLifeStyle;
var home1=data.home;
var audio=data.audio;
var accessories=data.accessories;
function App() {
  return (
   <Router>
    <PreNavbar/>
    <Navbar/>
    <Routes>
    <Route exact path='/miphones' element={<NavOptions miPhones={miPhones}/>}/>
    <Route exact path='/redmiphones' element={<NavOptions redmiPhones={redmiPhones}/>}/>
    <Route exact path='/tv' element={<NavOptions tv={tv}/>}/>
    <Route exact path='/laptops' element={<NavOptions laptop={laptop}/>}/>
    <Route exact path='/accessories' element={<NavOptions accessories={accessories}/>}/>
    <Route exact path='/home1' element={<NavOptions home1={home1}/>}/>
s    <Route exact path='/audio' element={<NavOptions audio={audio}/>}/>
    </Routes>
    
    <Slider start={banner.start}/>
    <Offers offers={Offer} />
    <Heading text="STAR PRODUCTS" />
    <StarProduct starProduct={starProduct} />
    <Heading text="HOT ACCESSORIES"/>
    <HotAccessoriesMenu />
    <Routes>
    <Route exact path='/music' element={<HotAccessories music={music} musicCover={musicCover}/>}/>
    <Route exact path='/smartDevice' element={<HotAccessories smartDevice={smartDevice} smartDeviceCover={smartDeviceCover}/>}/>
    <Route exact path='/home' element={<HotAccessories home={home} homeCover={homeCover}/>}/>
    <Route exact path='/lifestyle' element={<HotAccessories lifestyle={lifestyle} lifestyleCover={lifestyleCover}/>}/>
    <Route exact path='/mobileAccessories' element={<HotAccessories mobileAccessories={mobileAccessories} mobileAccessoriesCover={mobileAccessoriesCover}/>}/>

    </Routes>
   </Router>
  );
}

export default App;
