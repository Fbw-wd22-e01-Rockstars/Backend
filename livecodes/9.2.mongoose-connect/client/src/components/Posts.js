import React, { useState, useEffect } from "react";
import axios from "axios";

//materila UI
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

const Posts = ({ posts, getPosts }) => {
  useEffect(() => {
    getPosts();
  }, []);

  console.log(posts.data);
  return (
    <div>
      {posts?.data?.map((post) => {
        return (
          <Box style={{ display: "inline-block", padding: "20px" }}>
            <Card style={{ width: "250px" }}>
              <CardContent>
                <Typography variant="body2">
                  <b>Title:</b> {post.title}
                </Typography>
                <Typography
                  sx={{ fontSize: 14 }}
                  color="text.secondary"
                  gutterBottom
                >
                  <b>Age:</b>
                  {post.age}
                </Typography>

                <Typography variant="body2">
                  <b>Message:</b> {post.message}
                </Typography>
                <Typography variant="body3">
                  <b>Name:</b> {post.name}
                </Typography>
              </CardContent>
              <CardActions>
                <Button size="small">Learn More</Button>
              </CardActions>
            </Card>
          </Box>
        );
      })}
    </div>
  );
};

export default Posts;
