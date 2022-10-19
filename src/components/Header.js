import React from "react";

const Header = props => {
  const { search, onInputChange, onSearchClick } = props;
  return (
    <div className="jumbotron text-center" >
      <h2 className="display-1">
        <i className="material-icons brand-icon">fastfood</i> <strong>HOMExMADE</strong>

        <div className="input-group w-50 mx-auto mt-5">
        <h3 className="text-center"style={{marginTop:"10px"}}>“Let food be thy medicine and medicine be thy food.” – Hippocrates </h3>
        </div>

        <div className="input-group w-50 mx-auto mt-5">
        <h3>Check out our favorite foods to make for every occasion, including holiday recipes, quick and easy dinners, healthy breakfast and lunch ideas, and more. Plus, the best cooking tips and shortcuts.</h3>
        </div>
      </h2>
      <div className="input-group w-50 mx-auto mt-5">
        <input
          type="text"
          className="form-control"
          placeholder="Search Your Recipe..."
          value={search}
          onChange={onInputChange}
        />
        <div className="input-group-append">
          <button className="btn btn-dark" onClick={onSearchClick}>
            Search Recipe
          </button>
        </div>
      </div>
    </div>
  );
};

export default Header;