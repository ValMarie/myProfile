import React, { Component } from 'react';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink, } from 'reactstrap'

class Navigation extends Component {

  navStyle= {
    fontStyle: "bold",
    color: "#ffffff",
  }

  imgStyle= {    
    borderRadius: "40px", 
    height: "40px",
     width: "40px"
    };


    render() { 
        return ( 
                <Navbar expand= "md" className= "fixed-top" style= {{ background: "#0f0000"}}>                  
                    
                  <NavbarBrand  style= {this.navStyle} className= "mx-auto">
                     <img src= "../image/FB_IMG_15781724751959730.jpg"  alt= "" className= "mx-3 " style= {this.imgStyle}/>
                        My Profile
                  </NavbarBrand>
                  <NavbarToggler  className= ""/> 
                  <Collapse  navbar>
                      
                   {" "}
                      <span className="sr-only">Toggler</span>{" "}
                      <span className="icon-bar"></span>{" "}
                      <span className="icon-bar"></span>{" "}
                      <span className="icon-bar"></span>{" "}
                      
                      
                    <Nav href="#" navbar style=  {this.navStyle} className= "mx-auto">
                      <NavItem>
                        <NavLink href="#about" className="page-scroll">
                          About Me
                        </NavLink>
                      </NavItem>
                      <NavItem>
                        <NavLink href="#stack"className="page-scroll" > 
                          My Stack
                        </NavLink>
                      </NavItem>
                      <NavItem>
                        <NavLink href="#projects" className="page-scroll">
                          Projects
                        </NavLink>
                      </NavItem>
                      <NavItem>
                        <NavLink href="#contact" className="page-scroll">
                          Contact
                        </NavLink>
                      </NavItem>
                    </Nav>
                  </Collapse>
                </Navbar>
         );
    }
}

export default Navigation;


/* <div>
        <Navbar color="faded" light>
          <NavbarBrand href="/" className="mr-auto">reactstrap</NavbarBrand>
          <NavbarToggler onClick={this.toggleNavbar} className="mr-2" />
          <Collapse isOpen={!this.state.collapsed} navbar>
            <Nav navbar>
              <NavItem>
                <NavLink href="/components/">Components</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="https://github.com/reactstrap/reactstrap">GitHub</NavLink>
              </NavItem>
            </Nav>
          </Collapse>
        </Navbar>
      </div>
    );
  }
}



<UncontrolledDropdown nav inNavbar>
              <DropdownToggle nav caret>
                Options
              </DropdownToggle>
              <DropdownMenu right>
                <DropdownItem>
                  Option 1
                </DropdownItem>
                <DropdownItem>
                  Option 2
                </DropdownItem>
                <DropdownItem divider />
                <DropdownItem>
                  Reset
                </DropdownItem>
              </DropdownMenu>
            </UncontrolledDropdown>
 */




