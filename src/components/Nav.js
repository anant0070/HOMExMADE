import React from 'react'

const Nav = () => {
  return (
    <section className="navbar-dark bg-dark header">
        <div style={{position:"fixed",top:0,zIndex:"100"}} className="container-fluid bg-black">
            <div className="col-sm-12 ">
                <nav className="navbar navbar-expand-lg">
                {/* logo */}
                    <a className="navbar-brand text-light" href="#"><img  height="50px" width="250"src={process.env.PUBLIC_URL + "/logoo.png"}></img></a>
                  {/* toggle button for responsive */}
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>

            <div className="collapse navbar-collapse " id="navbarSupportedContent" >
                <ul className="navbar-nav ml-auto">
                <li className="nav-item">
                    <a className="nav-link text-light" href="#home"><span style={{fontSize:"18px"}}>Home</span></a>
                  </li>
                  
                <li className="nav-item">
                    <a className="nav-link text-light" href="#search"><span style={{fontSize:"18px"}}>Search</span></a>
                  </li>
                  
    
                  
                  <li className="nav-item">
                    <a className="nav-link text-light " href="#sign"><span style={{fontSize:"18px"}}>Sign In</span></a>
                  </li>
                </ul>
                 
              </div>
                </nav>
            </div>
        </div>
    </section>
  )
}

export default Nav