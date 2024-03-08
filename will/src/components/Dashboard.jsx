import React from 'react'
import Postlist from './Postlist'
import Createform from './Createform'

const Dashboard = ({display, postList}) => {
  return (
    <div style={{width: "100%"}}>
        {display === "postList" ? <Postlist postList={postList}/> : <Createform />}
    </div>
  )
}

export default Dashboard