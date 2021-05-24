import React, { Component } from 'react';
import Stack from "./stack";

class Index extends Component {

    render() { 
        return ( 
            <>     
                {/* Text */}
                <div className= "">
                    <div className= "row p-3">
                        <div className= "col-md-9 mr-auto" ></div>

                        <div className= "col-md-5 p-3" >
                             <Stack  />
                        </div>
                    </div>

                    

                    <div className= "" style= {{background: "#0000ff5a", marginTop: "150px", height: "50vh"}}>
                        <div className="row" style= {{}}>
                           <div className= "col-md-2 col-sm-5 mx-auto">
                                <img src= "../image/my_pics.jpg" alt= "img_pics.jpg" style= {{border: "8px solid black", borderRadius: "300px", height: "300px", width: "250px", marginTop: "-150px"}}/>
                           </div>
                        </div>                    
                        <div className= "m-3 px-5 text-center text-white">
                            <div style= {{fontSize: "2em"}}>
                                "The New World of Programming, shaping 
                                today for a better tomorrow"
                            </div>
                            <div style= {{fontSize: "1em", paddingLeft: "50%"}}>
                                -Valentine Umeh
                            </div>
                        </div>
                        <img  src="../image/my_pics.jpg" alt="img.jpg" height= "200px" width= "150px" />
                       
                    </div>
                </div>
                                             
            </>
         );
    }
}
 
export default Index;
