import React from "react";

export default function SearchBox(props) {
  return (
    <div>
        <form className="form-inline my-2 my-lg-0">
        <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" onChange={props.handleInputChange} name="search" value={props.search}/>
        </form>
    </div>
  );
}
