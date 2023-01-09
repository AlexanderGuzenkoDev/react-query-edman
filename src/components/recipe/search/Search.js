import React from 'react'

function Search() {
  return (
    <div className="py-4 px-2">
      <div className="text-muted small fw-bolder mb-5">Enter a what you have eaten, like "coffee and croissant" or "chicken enchilada" to see how it works. We have accurate data tens of thousands of foods, including international dishes.</div>
      <div className="form-group">
        <label htmlFor="search">Keywords</label>
        <div className="input-group mb-3 mt-2">
          <input type="text" className="form-control" placeholder="Type one or more keywords" />
          <button className="btn btn-success" type="submit"><span className="fa fa-search"></span></button>
        </div>
      </div>
    </div>
  )
}

export default Search