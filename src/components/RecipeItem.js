import React, { useState } from "react";

const RecipeItem = props => {
  const { name, image, ingredientLines } = props;
  const [hide,setHide]=useState({});

  const Hide=()=>{
    setHide({
      display:"none"
    })
  }

  return (<>
  
      <div className="card text-center  " style={hide}>
      <div className="text-right me-4 mt-3"><i className="fa fa-times fa-lg" aria-hidden="true" onClick={Hide} ></i></div>
        <img src={image} className="img-fluid w-50 mx-auto rounded-circle" />
        <div className="card-body">
          <h5>{name}</h5>
        </div>
        <ul>
        <li className="mb-1">
        <button className="btn btn-toggle " data-bs-toggle="collapse" data-bs-target="#collapse" aria-expanded="false">
          Ingredients
        </button>
        <div className="collapse" id="collapse">
          <ul className="btn-toggle-nav list-unstyled fw-normal pb-1 small list-group list-group-flush">    
          {ingredientLines.map(ingredient => (
            <li className="list-group-item">{ingredient}</li>
          ))}
          </ul>
        </div>
      </li>
      </ul>
        <i className="fa fa-heart" aria-hidden="true" ></i>
      </div>
      </>
  );
};

export default RecipeItem;