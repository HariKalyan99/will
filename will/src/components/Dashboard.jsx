import React, { useContext } from 'react'
import Postlist from './Postlist'
import Createform from './Createform'
import { willStore } from '../store/Willstore'

const Dashboard = () => {
  
  const {display} = useContext(willStore)

  return (
    <div style={{width: "100%"}}>
        {display === "postList" ? <Postlist   /> : <Createform  />}
    </div>
  )
}

export default Dashboard