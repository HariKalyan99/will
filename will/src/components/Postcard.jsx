import React, { useContext, useState } from 'react'
import Editpost from './Editpost'
import { willStore } from '../store/Willstore';


const Postcard = ({post}) => {

    const [displayEdit, setDisplayEdit] = useState(false)
    const {delBlogPost
      } = useContext(willStore);
  return (
    <div className="col" >
      {displayEdit && <div style={{position: "relative", zIndex: 10}}>
            <Editpost post={post}   setDisplayEdit={setDisplayEdit} displayEdit={displayEdit}/>
          </div>}
          <div className="card shadow-sm">
            <div className="card-body" style={{height: "400px"}}>
            <h4>{post.title}</h4>
              <p className="card-text">{post.body}</p>
              <div className="d-flex justify-content-between align-items-center">
                <div className="btn-group">
                  {post.tags.map((tag, ind) => <button key={ind} type="button" className="btn btn-sm btn-outline-secondary">{tag}</button>)}
                </div>
                <small className="text-body-secondary">{post.userId}</small>
                
              </div>
              <button className="btn btn-primary w-10 py-2" type="button" onClick={() => delBlogPost(post.id)}>
            DELETE
          </button>
          <button className="btn btn-primary w-10 py-2" type="button" onClick={() => {
            setDisplayEdit(!displayEdit);
          }}>
            EDIT
          </button>
          
            </div>
          </div>
    </div>
  )
}

export default Postcard