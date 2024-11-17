import { Box, Typography } from "@mui/material";
import { lightBlue } from "@mui/material/colors";
import moment from "moment";
import React, { memo } from "react";
import { fileFormat } from "../../lib/features";
import RenderAttachment from "./RenderAttachment";

const MessageComponent = ({ message, user }) => {
  const { sender, content, attachments = [], createdAt } = message;

  const sameSender = sender._id === user._id;

  const timeAgo = moment(createdAt).fromNow();

  return (
    <div
      style={{
        alignSelf: sameSender ? "flex-end" : "flex-start",
        // backgroundColor: "white",
        color: "black",
        borderRadius: "5px",
        padding: "0.5rem",
        width: "fit-content",
        maxWidth: "80%", // Limit width for readability
      }}
    >
      {!sameSender && (
        <Typography fontWeight="600" variant="caption" color={lightBlue[600]}>
          {sender.name}
        </Typography>
      )}

      {content && (
        <Typography
          maxWidth="290px"
          sx={{
            bgcolor: sameSender ? "#a0d8ff" : "#d0d0d0",
            color: "black",
            padding: "10px",
            borderRadius: "10px",
            position: "relative",
            "&::after": {
              content: '""',
              position: "absolute",
              width: 0,
              height: 0,
              borderStyle: "solid",
              borderWidth: sameSender ? "0 0 10px 10px " : "0 10px 10px 10px",
              borderColor: sameSender
                ? " transparent transparent transparent #a0d8ff" // Right triangle for sender
                : "transparent transparent #d0d0d0 transparent", // Left triangle for others
              top: "50%",
              transform: "translateY(-50%)",
              right: sameSender ? "-10px" : "auto",
              left: sameSender ? "auto" : "-10px",
            },
          }}
        >
          {content}
        </Typography>
      )}

      {/* Attachments */}
      {attachments.length > 0 &&
        attachments.map((attachment, index) => {
          const url = attachment.url;
          const file = fileFormat(url);
          return (
            <Box key={index}>
              <a
                href={url}
                target="_blank"
                download
                style={{
                  color: "black",
                }}
              >
                {RenderAttachment(file, url)}
              </a>
            </Box>
          );
        })}

      {/* Timestamp */}
      <Typography variant="caption" color="text.secondary">
        {timeAgo}
      </Typography>
    </div>
  );
};

export default memo(MessageComponent);
