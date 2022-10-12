import React, { useState, useEffect } from "react";

import { TextField, Button, Typography, Paper } from "@material-ui/core";
import axios from "axios";

const Form = ({ getPosts }) => {
  const [postData, setPostData] = useState({
    title: "",
    message: "",
    name: "",
    age: "",
  });

  useEffect(() => {
    getPosts();
  }, [postData]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    await axios.post("http://localhost:5000/posts", postData);
    clear();
  };

  const clear = () => {
    setPostData({
      title: "",
      age: "",
      message: "",
      name: "",
    });
  };

  return (
    <Paper style={{ width: "400px" }}>
      <Typography variant="h4" align="center">
        Create a user
      </Typography>
      <form autoComplete="off" noValidate onSubmit={handleSubmit}>
        <TextField
          name="title"
          variant="outlined"
          label="Title"
          fullWidth
          style={{ marginBottom: "10px" }}
          value={postData.title}
          onChange={(e) => setPostData({ ...postData, title: e.target.value })}
        />
        <TextField
          name="message"
          variant="outlined"
          label="Message"
          style={{ marginBottom: "10px" }}
          fullWidth
          value={postData.message}
          onChange={(e) =>
            setPostData({ ...postData, message: e.target.value })
          }
        />
        <TextField
          name="name"
          variant="outlined"
          label="Name"
          fullWidth
          style={{ marginBottom: "10px" }}
          value={postData.name}
          onChange={(e) => setPostData({ ...postData, name: e.target.value })}
        />

        <TextField
          name="age"
          variant="outlined"
          label="Age"
          fullWidth
          style={{ marginBottom: "10px" }}
          value={postData.age}
          onChange={(e) => setPostData({ ...postData, age: e.target.value })}
        />

        <Button
          variant="contained"
          color="primary"
          size="large"
          type="submit"
          fullWidth
          style={{ marginBottom: "10px" }}
        >
          Submit
        </Button>

        <Button
          variant="contained"
          color="secondary"
          size="small"
          onClick={clear}
          fullWidth
        >
          Clear
        </Button>
      </form>
    </Paper>
  );
};

export default Form;
