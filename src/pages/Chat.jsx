import React, { useRef } from "react";
import AppLayout from "../components/layout/AppLayout";
import { IconButton, Stack } from "@mui/material";
import { grayColor, lightBlue, orange } from "../constants/color";
import {
  AttachFile as AttachFileIcon,
  Send as SendIcon,
} from "@mui/icons-material";
import { InputBox } from "../components/styles/StyledComponents";
import { sampleMessage } from "../constants/sampleData";
import MessageComponent from "../components/shared/MessageComponent";

const user = {
  _id: "djfdj",
  name: "suhag ahmed",
};

const Chat = () => {
  const containerRef = useRef(null);
  return (
    <>
      <Stack
        ref={containerRef}
        boxSizing={"border-box"}
        padding={"1rem"}
        spacing={"1rem"}
        height={"90%"}
        bgcolor={"rgba(0,0,0,0.04)"}
        sx={{
          overflowX: "hidden",
          overflowY: "auto",
          scrollbarWidth: "thin", // Firefox support for thin scrollbar
          scrollbarColor: lightBlue, // Firefox scrollbar color
          "&::-webkit-scrollbar": {
            width: "2px", // Width of the scrollbar
          },
          "&::-webkit-scrollbar-thumb": {
            backgroundColor: lightBlue,
            borderRadius: "10px",
          },
        }}
      >
        {sampleMessage.map((i) => (
          <MessageComponent key={i._id} message={i} user={user} />
        ))}
      </Stack>

      <form style={{ height: "10%" }}>
        <Stack
          direction={"row"}
          height={"100%"}
          padding={"0.5rem"}
          alignItems={"center"}
          position={"relative"}
        >
          <IconButton
            sx={{
              position: "absolute",
              left: "1.5rem",
              rotate: "30deg",
            }}
          >
            <AttachFileIcon />
          </IconButton>

          <InputBox placeholder="Type message here...." />

          <IconButton
            type="submit"
            sx={{
              bgcolor: lightBlue,
              color: "white",
              padding: "0.5rem",
              marginLeft: "0.5rem",
              rotate: "-30deg",
              "&:hover": {
                bgcolor: "darkcyan",
              },
            }}
          >
            <SendIcon />
          </IconButton>
        </Stack>
      </form>
    </>
  );
};

export default AppLayout()(Chat);
