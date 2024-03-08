import { createContext, useReducer } from "react";
import { useEffect, useState } from "react";
import axios from "axios";


export const willStore = createContext({
    display: "",
    displayTab: () => {},
    addBlogPost: () => {},
    editBlogPost: () => {},
    delBlogPost: () => {},
    postList: [],
  })

  const pureReducerFunction = (currentState, action) => {
    let newPostListFromReducer = currentState;
    if(action.type === "INITIAL_POSTS"){
      newPostListFromReducer = action.payload.data;
    }else if(action.type === "ADD_POST"){
      newPostListFromReducer = [action.payload.data, ...currentState]
    }else if(action.type === "DEL_POST"){
      newPostListFromReducer =  currentState.filter((post) => post.id !== action.payload.id);
    }else if(action.type === "EDIT_POST"){
      let newPostList = currentState.filter((post) => post.id !== action.payload.id);
      newPostListFromReducer =  [action.payload.data, ...newPostList];
    }
    return newPostListFromReducer;
  }


const WillStoreContextProvider = ({children}) => {
  const [display, setDisplay] = useState("createPost");
  const [addPost, setAddPost] = useState("");
  const [delPost, setDelPost] = useState("");
  const [editPost, setEditPost] = useState("");
  // const [postList, setPostList] = useState([]);


  const [postList, dispatchPostlist] = useReducer(pureReducerFunction, []);



  const displayTab = (tab) => {
    setDisplay(tab);
  };


  useEffect(() => {
    const controller = new AbortController();
    const { signal } = controller;
    const fetchApi = async () => {
      try {
        const { data } = await axios.get(`http://localhost:8081/posts`, signal);
        dispatchPostlist({type: "INITIAL_POSTS", payload: {
          data,
        }})
      } catch (err) {
        console.log("Error", err);
      }
    };

    fetchApi();

    return () => {
      controller.abort();
    };
  }, []);

  useEffect(() => {
    let fetchAddPost;
    try {
      fetchAddPost = async ({ userId, title, tags, body, reactions, id }) => {
        const {data} = await axios.post(`http://localhost:8081/posts`, {
          id,
          title,
          body,
          userId,
          tags,
          reactions,
        });
        
        dispatchPostlist({
          type: "ADD_POST",
          payload: {
            data,
          }
        })
      };
    } catch (error) {
      console.log("Error", error);
    }

    if (addPost.title) {
      fetchAddPost(addPost);
    }
  }, [addPost]);

  const addBlogPost = (userId, title, tags, body, reactions, id) => {
    setAddPost({ userId, title, tags, body, reactions, id });
  };

  useEffect(() => {
    let fetchDeletePost;
    try {
      fetchDeletePost = async (id) => {
        await axios.delete(`http://localhost:8081/posts/${id}`);
        dispatchPostlist({
          type: "DEL_POST",
          payload: {
            id
          }
        })
      
      };
    } catch (error) {
      console.log("Error", error);
    }

    if (delPost) {
      fetchDeletePost(delPost);
    }
  }, [delPost]);
  const delBlogPost = (id) => {setDelPost(id)};


  useEffect(() => {
    let fetchEditPost;
    try {
      fetchEditPost = async ({ userId, title, tags, body, reactions,id}) => {
        const {data} = await axios.put(`http://localhost:8081/posts/${id}`, {
          id,
          userId,
          title,
          body,
          tags,
          reactions
        });
        dispatchPostlist({
          type: "EDIT_POST",
          payload: {
            id,
            data
          }
        })

      };
    } catch (error) {
      console.log("Error", error);
    }

    if (editPost.title) {
      fetchEditPost(editPost);
    }
  }, [editPost]);

  const editBlogPost = (userId, title, tags, body, reactions, id) => {
      setEditPost({userId, title, tags, body, reactions, id})};

  return (
    <willStore.Provider value={{displayTab,
      addBlogPost,
      editBlogPost,
      delBlogPost, display, postList}}>
      {children}
    </willStore.Provider>
  )
}


export default WillStoreContextProvider;