import React from 'react';

function Searchbar(props) {
  return (
    <div className='container border border-2 border-dark d-flex flex-column p-3'>
      <h4>Book Search</h4>
      <div className="input-group">
        <input type="text" className="form-control border-dark" placeholder="Search for a book" aria-label="Search" aria-describedby="button-addon2" value={props.value} onChange={props.onChange}/>
        <button className="btn btn-outline-dark" type="button" id="button-addon2" onClick={props.onClick}>Search</button>
      </div>
    </div>
  )
}

export default Searchbar;