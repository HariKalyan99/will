import React, { useContext } from 'react'
import Postcard from './Postcard'
import { willStore } from '../store/Willstore'

const Postlist = () => {
  const {postList} = useContext(willStore)
  return (
    <div className="album py-5 bg-body-tertiary">
    <div className="container">
      <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">
        {postList.map((post, ind) => <Postcard post={post} key={post.id}  />)}
      </div>
    </div>
  </div>
  )
}

export default Postlist