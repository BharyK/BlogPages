import React from "react";
import { HeadderNavigation } from "./Header";
import { Box } from "@mui/material";
import { BlogPage } from "../components/BlogPage";
import blogData from "../API/data.json";

function LandingPage() {

  return (
    <div>
      <HeadderNavigation />
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignContent: "center",
            alignItems: "center",
            width: "80%",
            margin: "auto"
          }}
        >
          <BlogPage blogData={blogData} />
        </Box>
    </div>
  );
}

export { LandingPage };
