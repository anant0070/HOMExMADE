import React from 'react'

const Home = () => {
  return (
   <div >
<div id="carouselExampleFade" className="carousel slide carousel-fade" data-bs-ride="carousel">
  <div className="carousel-inner">
    <div className="carousel-item active">
      <img src={process.env.PUBLIC_URL + "/cake.jpg"} style={{height:"100vh",width:"100vw"}} className="d-block w-100" alt="FOOD 1" />
    </div>
    <div className="carousel-item">
      <img src={process.env.PUBLIC_URL + "/pizza.jpg"} style={{height:"100vh",width:"100vw"}} className="d-block w-100" alt="..." />
    </div>
    <div className="carousel-item">
      <img src={process.env.PUBLIC_URL + "/chicken.jpg"} style={{height:"100vh",width:"100vw"}} className="d-block w-100" alt="..." />
    </div>
    <div className="carousel-item">
      <img src={process.env.PUBLIC_URL + "/biryani.jpg"} style={{height:"100vh",width:"100vw"}} className="d-block w-100" alt="..." />
    </div>
    <div className="carousel-item">
      <img src={process.env.PUBLIC_URL + "/rasgulla.jpg"} style={{height:"100vh",width:"100vw"}} className="d-block w-100" alt="..." />
    </div>
  </div>
  <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Previous</span>
  </button>
  <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Next</span>
  </button>
</div>
   </div>
  )
}

export default Home