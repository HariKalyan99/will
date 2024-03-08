import React, { useContext, useState } from 'react'
import { willStore } from '../store/Willstore';

const Editpost = ({post, setDisplayEdit, displayEdit}) => {

  const [getUserId, setUserId] = useState(post.userId);
  const [getTitle, setTitle] = useState(post.title);
  const [getTags, setTags] = useState(post.tags);
  const [getBody, setBody] = useState(post.body);
  const [getReactions, setReactions] = useState(post.reactions);

  const {editBlogPost} = useContext(willStore);

  const handleSubmit = (e) => {
    e.preventDefault();
          let UserId = getUserId
      let Title = getTitle
      let Tags = getTags
      let Body = getBody
      let Reactions = getReactions        
      let prevId = post.id
      let tags = Tags.split(",");
    editBlogPost(UserId,
      Title,
      tags,
      Body,
      Reactions, prevId)
      setDisplayEdit(!displayEdit)
  }
  return (
    <main className="form-signin m-auto">
      <form onSubmit={(e) => handleSubmit(e)}>
        <h1 className="h3 m-3 fw-normal">Please sign in</h1>

        <div className="form-floating m-4">
          <input
            type="text"
            className="form-control"
            id="floatingInput"
            placeholder="name@example.com"
            value={getUserId}
            onChange={(e) => setUserId(e.target.value)}
            
          />
          <label htmlFor="floatingInput">USER ID</label>
        </div>
        <div className="form-floating m-4">
          <input
            type="text"
            className="form-control"
            id="floatingInput"
            placeholder="name@example.com"
            value={getTitle}
            onChange={(e) => setTitle(e.target.value)}
            
          />
          <label htmlFor="floatingInput">TITLE</label>
        </div>
        <div className="form-floating m-4">
          <input
            type="text"
            className="form-control"
            id="floatingInput"
            placeholder="name@example.com"
            value={getTags}
            onChange={(e) => setTags(e.target.value)}
            
          />
          <label htmlFor="floatingInput">TAGS</label>
        </div>
        <div className="form-floating m-4">
          <textarea
            className="form-control"
            placeholder="Leave a comment here"
            id="floatingTextarea"
            style={{ height: "100px" }}
            value={getBody}
            onChange={(e) => setBody(e.target.value)}
            
          ></textarea>
          <label htmlFor="floatingTextarea">BODY</label>
        </div>
        <div className="form-floating m-4">
          <input
            type="text"
            className="form-control"
            id="floatingPassword"
            placeholder="Password"
            value={getReactions}
            onChange={(e) => setReactions(e.target.value)}
            
          />
          <label htmlFor="floatingPassword">REACTIONS FOR THIS POST</label>
        </div>
        <div className="d-flex justify-content-center">
          <button className="btn btn-primary w-20 py-2" type="submit">
            Sign in
          </button>
        </div>
        <p className="mt-5 mb-3 text-body-secondary">© 2024</p>
      </form>
    </main>
  )
}

export default Editpost