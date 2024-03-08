import React from 'react'
import Postcard from './Postcard'

const Postlist = ({postList}) => {
  return (
    <div class="album py-5 bg-body-tertiary">
    <div class="container">
      <div class="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">
        {postList.map((post) => <Postcard post={post} key={post.id}/>)}
      </div>
    </div>
  </div>
  )
}

export default Postlist