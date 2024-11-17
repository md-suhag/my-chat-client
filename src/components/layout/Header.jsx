import {
  AppBar,
  Backdrop,
  Box,
  IconButton,
  Toolbar,
  Tooltip,
  Typography,
} from "@mui/material";
import React, { lazy, Suspense, useState } from "react";
import { grayColor, lightBlue, orange } from "../../constants/color";
import {
  Add as AddIcon,
  Group as GroupIcon,
  Menu as MenuIcon,
  Search as SearchIcon,
  Logout as LogoutIcon,
  Notifications as NotificationsIcon,
  Chat,
} from "@mui/icons-material";
import { useNavigate } from "react-router-dom";
const Search = lazy(() => import("../specific/Search"));
const Notification = lazy(() => import("../specific/Notification"));
const NewGroup = lazy(() => import("../specific/NewGroup"));

const Header = () => {
  const [isMobile, setIsMobile] = useState(false);
  const [isSearch, setIsSearch] = useState(false);
  const [isNewGroup, setIsNewGroup] = useState(false);
  const [isNotification, setIsNotification] = useState(false);

  const navigate = useNavigate();

  const handleMobile = () => {
    setIsMobile((prev) => !prev);
  };
  const openSearch = () => {
    setIsSearch((prev) => !prev);
    console.log("search toggled:", !isSearch);
  };

  const openNewGroup = () => {
    setIsNewGroup((prev) => !prev);
    console.log("new group toggled:", !isNewGroup);
  };
  const navigateToGroup = () => navigate("/groups");

  const openNotification = () => {
    setIsNotification((prev) => !prev);
  };
  const logoutHandler = () => {
    console.log("logout");
  };
  return (
    <>
      <Box sx={{ flexGrow: 1 }} height={"4rem"}>
        <AppBar
          // position="static"
          sx={{
            bgcolor: lightBlue,
          }}
        >
          <Toolbar>
            <Typography
              variant="h5"
              sx={{
                display: { xs: "none", sm: "flex" },
                alignItems: "center",
                gap: "0.4rem",
                fontWeight: "bold",
                fontFamily: "cursive",
                postion: "relative",
                cursor: "pointer",
              }}
              onClick={() => navigate("/")}
            >
              <Chat
                style={{
                  position: "absolute",
                  top: "10px",
                  left: "10px",
                  zIndex: "0",
                  fontSize: "2rem",
                }}
              />{" "}
              <span
                style={{
                  textShadow: "2px 2px 0 #2694ab,-2px -2px 0 #2694ab",
                  position: "absolute",
                  zIndex: "1",
                }}
              >
                {" "}
                MyChat
              </span>
            </Typography>
            <Box sx={{ display: { xs: "block", sm: "none" } }}>
              <IconButton color="inherit" onClick={handleMobile}>
                <MenuIcon />
              </IconButton>
            </Box>
            <Box sx={{ flexGrow: 1 }} />
            <Box>
              <IconBtn
                title="Search"
                icon={<SearchIcon />}
                onClick={openSearch}
              />
              <IconBtn
                title="New Group"
                icon={<AddIcon />}
                onClick={openNewGroup}
              />
              <IconBtn
                title="Manage Group"
                icon={<GroupIcon />}
                onClick={navigateToGroup}
              />
              <IconBtn
                title="Notifications"
                icon={<NotificationsIcon />}
                onClick={openNotification}
              />
              <IconBtn
                title="Logout"
                icon={<LogoutIcon />}
                onClick={logoutHandler}
              />
            </Box>
          </Toolbar>
        </AppBar>
      </Box>

      {isSearch && (
        <Suspense fallback={<Backdrop open />}>
          <Search />
        </Suspense>
      )}
      {isNotification && (
        <Suspense fallback={<Backdrop open />}>
          <Notification />
        </Suspense>
      )}
      {isNewGroup && (
        <Suspense fallback={<Backdrop open />}>
          <NewGroup />
        </Suspense>
      )}
    </>
  );
};

const IconBtn = ({ title, icon, onClick }) => {
  return (
    <Tooltip title={title}>
      <IconButton color="inherit" size="large" onClick={onClick}>
        {icon}
      </IconButton>
    </Tooltip>
  );
};

export default Header;
