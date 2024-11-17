import React from "react";
import AppLayout from "../components/layout/AppLayout";
import { Box, Typography } from "@mui/material";
import { grayColor } from "../constants/color";

const Home = () => {
  return (
    <Box bgcolor={grayColor} height={"100%"}>
      <Typography p={"2rem"} variant="h6" textAlign={"center"}>
        Select a friend to chat or Add new friend
      </Typography>
    </Box>
  );
};

export default AppLayout()(Home);
