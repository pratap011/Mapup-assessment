
import './App.css';
import {useState,useEffect} from 'react'; 
import {Button} from "antd";
import OSM from './OSM';
import 'leaflet/dist/leaflet.css';
import './index.css';
import {UserOutlined} from "@ant-design/icons"
import FormInput from './formInput';
import Map from './Map';
import SideBar from './sidebar';
import Footer from './Footer';
function App() {
  var component;
  return (
    //A base component where the sidebar, button, form input and map is rendered

    <div className="App">
      <div className='header'>
      <SideBar/>
      <FormInput/>
      <div style={ {display:"flex",justifyContent:"space-between",width:"10%",position:"relative"}} className="user-button">
      <UserOutlined style={{fontSize:"33px"}}/>
      <Button size="medium" type="primary">Login</Button>
      </div>
      </div>
      <br></br>
      <Map/>
    </div>
  );
}

export default App;
 