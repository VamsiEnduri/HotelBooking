import React from "react";
import "./FeaturedProps.css";
const FeaturedProps = () => {
  return (
    <div className="fp">
      <div className="fPropsItem">
        <img
          src="https://images.unsplash.com/photo-1599392687131-d82ad47a871f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTE3fHxob3RlbHN8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60"
          alt=""
          className="fPropsImg"
        />
        <span className="fpName">Deltas Residency</span>
        <span className="fpCity">Austria</span>
        <span className="fpPrice">starting from $160</span>
        <div className="faRating">
          <button>8.3</button>
          <span>Excellent</span>
        </div>
      </div>

      <div className="fPropsItem">
        <img
          src="https://images.unsplash.com/photo-1560703649-e3055f28bcf8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80"
          alt=""
          className="fPropsImg"
        />
        <span className="fpName">Swapna Residency</span>
        <span className="fpCity">Delhi</span>
        <span className="fpPrice">starting from $140</span>
        <div className="faRating">
          <button>8.1</button>
          <span>Excellent</span>
        </div>
      </div>

      <div className="fPropsItem">
        <img
          src="https://images.unsplash.com/photo-1588351829783-6edb9bd6af6a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8ODB8fGhvdGVsc3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=800&q=60"
          alt=""
          className="fPropsImg"
        />
        <span className="fpName">Taj Residency</span>
        <span className="fpCity">Mumbai</span>
        <span className="fpPrice">starting from $120</span>
        <div className="faRating">
          <button>8.9</button>
          <span>Excellent</span>
        </div>
      </div>

      <div className="fPropsItem">
        <img
          src="https://images.unsplash.com/photo-1585694854987-19b609e7721b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NDB8fGhvdGVsc3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=800&q=60"
          alt=""
          className="fPropsImg"
        />
        <span className="fpName">Venkat Residency</span>
        <span className="fpCity">Paris</span>
        <span className="fpPrice">starting from $120</span>
        <div className="faRating">
          <button>8.9</button>
          <span>Excellent</span>
        </div>
      </div>
    </div>
  );
};

export default FeaturedProps;
