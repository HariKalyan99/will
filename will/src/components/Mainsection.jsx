import React from 'react'
import Sidebar from './Sidebar'
import Dashboard from './Dashboard'

const Mainsection = ({displayTab, display, postList}) => {
  return (
    <div style={{display: "flex"}}>
      <Sidebar displayTab={displayTab} display={display}/>
      <Dashboard display={display} postList={postList}/>
    </div>
  )
}

export default Mainsection