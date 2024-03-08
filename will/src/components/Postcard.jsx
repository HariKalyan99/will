import React from 'react'

const Postcard = ({post}) => {
  return (
    <div class="col" >
          <div class="card shadow-sm">
            <div class="card-body" style={{height: "400px"}}>
            <h4>{post.title}</h4>
              <p class="card-text">{post.body}</p>
              <div class="d-flex justify-content-between align-items-center">
                <div class="btn-group">
                  {post.tags.map((tag, ind) => <button key={ind} type="button" class="btn btn-sm btn-outline-secondary">{tag}</button>)}
                </div>
                <small class="text-body-secondary">{post.userId}</small>
              </div>
            </div>
          </div>
    </div>
  )
}

export default Postcard