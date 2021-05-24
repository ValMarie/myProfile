import React, { Component } from 'react';
import Navigation from './navbar';
import Index from './index';
import About from "./about";
import MyStack from "./my_stack";

// import $ from 'jquery';

 class MyApp extends Component {


 
  render() {
        

      return (
       <div classNmae= "container-fluid" style= {{ background: "#000000", overflow: "hidden"}}>
       {/* style= {{ backgroundImage: "url(../image/my_pics.jpg)", backgroundAttachment: "fixed", backgroundSize: "cover"}}> */}
      
          <Navigation />
          <Index />
          <About/>
          <MyStack />
       </div>
      )
    }
  }

export default MyApp;
