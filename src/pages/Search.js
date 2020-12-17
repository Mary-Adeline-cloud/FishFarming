import React from "react";
import "./Search.css";

function Search() {
  return (
    <div class="container">
      <div class="col-12" style={{position:"static"}}>
        <form style={{ marginLeft:"30px"}}>
          <input
            type="text"
            className="input1"
            name="search"
            placeholder="Search.."
            style={{position:"static"}}
          />
        </form>
      </div>
    </div>
  );
}

export default Search;
