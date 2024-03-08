import { createContext } from "react";
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


const WillStoreContextProvider = ({children}) => {
  const [display, setDisplay] = useState("createPost");
  const [addPost, setAddPost] = useState("");
  const [delPost, setDelPost] = useState("");
  const [editPost, setEditPost] = useState("");
  const [postList, setPostList] = useState([]);



  const displayTab = (tab) => {
    setDisplay(tab);
  };


  useEffect(() => {
    const controller = new AbortController();
    const { signal } = controller;
    const fetchApi = async () => {
      try {
        const { data } = await axios.get(`http://localhost:8081/posts`, signal);
        setPostList(data);
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
        setPostList([data, ...postList]);
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
        let newPostList = postList.filter((post) => post.id !== id);
        setPostList(newPostList);
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
        let newPostList = postList.filter((post) => post.id !== id);
        setPostList([data, ...newPostList]);
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