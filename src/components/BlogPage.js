import { Box, Grid, Typography, Button, Stack, Divider } from "@mui/material";
import React from "react";
import { BlogPageHeader } from "../components/BlogPageHeader";

function BlogPage({ blogData }) {
  console.log(blogData.blog);
  return (
    <Box>
      <BlogPageHeader />
      {blogData.blog.map((blog, index) => {
        return (
          <Box key={`${index}`}>
            <Divider sx={{ marginTop: "60px" }} />
            <Typography
              gutterBottom
              variant="h3"
              component="div"
              mt={5}
              mb={5}
              columns={{ xs: 1, sm: 1, md: 12 }}
            >
              {blog.blogHeader}
            </Typography>
            <Stack direction="row" spacing={1} mb={8}>
              {blog.keyNotes.map((label, index) => {
                return (
                  <Button
                    //sx={{ background: "#0376fc", border: "1px solid #0376fc", color: "white" }}
                    variant={label.active ? "contained" : "outlined"}
                    key={`${index}`}
                  >
                    {label.label}
                  </Button>
                );
              })}
            </Stack>

            <Grid container spacing={{ xs: 1, md: 3 }} key={`${index}`}>
              {blog.blogInfo.map((item, index) => {
                return (
                  <Grid item xs={12} sm={4} md={4}>
                    <Box>
                      <img src={item.image} alt="" />
                      <Typography
                        variant="body2"
                        color="#0376fc"
                        fontWeight="600"
                        fontSize="14px"
                        mt={1}
                      >
                        {item.blogCaption}
                      </Typography>
                      <Typography variant="h6" component="div" mt={2}>
                        {item.blogSubHeader}
                      </Typography>
                      <Typography
                        component="div"
                        mt={2}
                        fontWeight="400"
                        fontSize="16px"
                        color="#667085"
                      >
                        {item.blogContent}
                      </Typography>
                    </Box>
                  </Grid>
                );
              })}
            </Grid>
          </Box>
        );
      })}
    </Box>
  );
}

export { BlogPage };
