import "./App.css";
import Form from "./components/Form";
import Posts from "./components/Posts";
import axios from "axios";
import { useState } from "react";

import Grid from "@mui/material/Grid";

function App() {
  const [posts, setPosts] = useState("");
  const getPosts = async () => {
    const allPosts = await axios.get("http://localhost:5000/posts");
    setPosts(allPosts);
  };

  return (
    <Grid container style={{ padding: "30px" }}>
      <Grid item xs={8}>
        <Posts posts={posts} getPosts={getPosts} />
      </Grid>
      <Grid item xs={4}>
        <Form getPosts={getPosts} />
      </Grid>
    </Grid>
  );
}

export default App;
