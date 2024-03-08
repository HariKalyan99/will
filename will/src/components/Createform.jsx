import React, { useContext, useRef } from "react";
import {v4 as uuidv4} from 'uuid';
import {useNavigate} from 'react-router-dom'
import { willStore } from "../store/Willstore";


const Createform = () => {

  const navigate = useNavigate();

  const {addBlogPost, displayTab} = useContext(willStore);


  const userIdRef = useRef("")
  const titleRef = useRef("")
  const tagRef = useRef("")
  const bodyRef = useRef("")
  const reactionsRef = useRef("")

  const handleSubmit = (e) => {
    e.preventDefault();
    const userId = userIdRef.current.value
const title = titleRef.current.value
const tag = tagRef.current.value.split(",")
const body = bodyRef.current.value
const reactions = reactionsRef.current.value
addBlogPost(userId,
  title,
  tag,
  body,
  reactions, uuidv4());
  navigate('/post-list')
  displayTab("postList")
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
            ref={userIdRef}
          />
          <label htmlFor="floatingInput">USER ID</label>
        </div>
        <div className="form-floating m-4">
          <input
            type="text"
            className="form-control"
            id="floatingInput"
            placeholder="name@example.com"
            ref={titleRef}
          />
          <label htmlFor="floatingInput">TITLE</label>
        </div>
        <div className="form-floating m-4">
          <input
            type="text"
            className="form-control"
            id="floatingInput"
            placeholder="name@example.com"
            ref={tagRef}
          />
          <label htmlFor="floatingInput">TAGS</label>
        </div>
        <div className="form-floating m-4">
          <textarea
            className="form-control"
            placeholder="Leave a comment here"
            id="floatingTextarea"
            style={{ height: "100px" }}
            ref={bodyRef}
          ></textarea>
          <label htmlFor="floatingTextarea">BODY</label>
        </div>
        <div className="form-floating m-4">
          <input
            type="text"
            className="form-control"
            id="floatingPassword"
            placeholder="Password"
            ref={reactionsRef}
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
  );
};

export default Createform;
