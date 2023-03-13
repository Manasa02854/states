import React from 'react'
import STYLE from "./Netflix.module.css"

const Netflix = () => {
  return (
    <>
    <div className={STYLE.Net}>
    <div>
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQBHPqVm7ZMZHu8iTYxvza9yb7ykUazV1vVSw&usqp=CAU" alt="" />
    </div>
    <div className={STYLE.netflix}>
      <ul>
        <li > <a href="TvShows"> TvShows</a></li>
        <li> <a href="Movies"> Movies</a></li>
        <li> <a href="RecentlyAdded">RecentlyAdded</a> </li>
        <li> <a href="MyList">MyList</a> </li>
      </ul>
    </div>
      
    </div>
    </>
  )
}

export default Netflix
