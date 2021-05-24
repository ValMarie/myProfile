import React, {Component} from "react"

class About extends Component {


imgStyle= {    
    
    };


render() {
        return (
            <div id= "about">
             <div className="container-fluid">
                <div className="row py-3" style={{background: "#0c0c0c", height: "50vh" }}>

                    <div className= "row mx-auto">
                        <div className="col-md-3 ">
                          {/* <img src= "../image/FB_IMG_15781724751959730.jpg" alt= "" style= {this.imgStyle}/> */}
                        </div>
                    </div>


                   <div className= "row">
                     <div className="col-md-7 col-sm-8 mx-auto">
                        <div className="text-center text-white">
                            <h2 className=" "><strong> ABOUT ME </strong></h2>
                                <p className="">

                                    I am a full stack programmer with main focus on Web and Apps Development
                                    My stack strenght lies in several Javascript packages including React, Node, 
                                    and VueJS. I love the backend logics and the frontend designs. My goal is to 
                                    shape the world with the flexible tools of programming 

                                </p>
                        </div>
                       </div>
                    </div>

                 </div>
                </div>
             </div>
        

        );
    }
}

export default About;