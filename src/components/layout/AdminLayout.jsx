import Grid from "@mui/material/Grid";
import React, { useState } from "react";
import { grayColor, matBlack } from "../../constants/color";
import {
  Chat,
  Close as CloseIcon,
  Dashboard as DashboardIcon,
  ExitToApp as ExitToAppIcon,
  Groups as GroupsIcon,
  ManageAccounts as ManageAccountsIcon,
  Menu as MenuIcon,
  Message as MessageIcon,
} from "@mui/icons-material";
import {
  Box,
  Drawer,
  IconButton,
  Stack,
  styled,
  Typography,
} from "@mui/material";
import {
  useLocation,
  Link as LinkComponent,
  Navigate,
  useNavigate,
} from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { adminLogout } from "../../redux/thunks/admin";
// import { Link } from "./../styles/StyledComponents";

const Link = styled(LinkComponent)`
  text-decoration: none;
  border-radius: 2rem;
  padding: 1rem 2rem;
  color: black;
  &:hover {
    color: rgba(0, 0, 0, 0.54);
  }
`;

const adminTabs = [
  {
    name: "Dashboard",
    path: "/admin/dashboard",
    icon: <DashboardIcon />,
  },
  {
    name: "Users",
    path: "/admin/users",
    icon: <ManageAccountsIcon />,
  },
  {
    name: "Chats",
    path: "/admin/chats",
    icon: <GroupsIcon />,
  },
  {
    name: "Messages",
    path: "/admin/messages",
    icon: <MessageIcon />,
  },
];

const Sidebar = ({ w = "100%" }) => {
  const location = useLocation();
  const naviate = useNavigate();
  const dispatch = useDispatch();

  const logoutHandler = () => {
    dispatch(adminLogout());
  };
  return (
    <Stack
      width={w}
      direction={"column"}
      height={"100%"}
      p={"1rem"}
      spacing={"3rem"}
      bgcolor={"#f1f1f1"}
    >
      <Typography
        variant="h5"
        sx={{
          display: "inline-flex",
          alignItems: "center",
          gap: "0.4rem",
          fontWeight: "bold",
          fontFamily: "cursive",
          postion: "relative",
          padding: "1.5rem",
          cursor: "pointer",
        }}
        onClick={() => naviate("/")}
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
            textShadow: "2px 2px 0 #fff,-2px -2px 0 #fff",
            position: "absolute",
            top: "15px",
            left: "25px",
            zIndex: "1",
          }}
        >
          {" "}
          MyChat
        </span>
      </Typography>

      <Stack spacing={"1rem"}>
        {adminTabs.map((tab) => (
          <Link
            key={tab.path}
            to={tab.path}
            sx={
              location.pathname === tab.path && {
                bgcolor: matBlack,
                color: "white",
                ":hover": { color: "white" },
              }
            }
          >
            <Stack direction={"row"} alignItems={"center"} spacing={"1rem"}>
              {tab.icon}
              <Typography>{tab.name}</Typography>
            </Stack>
          </Link>
        ))}

        <Link onClick={logoutHandler}>
          <Stack direction={"row"} alignItems={"center"} spacing={"1rem"}>
            <ExitToAppIcon />

            <Typography>Logout</Typography>
          </Stack>
        </Link>
      </Stack>
    </Stack>
  );
};

const AdminLayout = ({ children }) => {
  const { isAdmin } = useSelector((state) => state.auth);
  const [isMobile, setIsMobile] = useState(false);

  const handleMobile = () => setIsMobile(!isMobile);

  const handleClose = () => setIsMobile(false);
  if (!isAdmin) return <Navigate to={"/admin"} />;
  return (
    <Grid container minHeight={"100vh"}>
      <Box
        sx={{
          display: { xs: "block", md: "none" },
          position: "fixed",
          right: "1rem",
          top: "1rem",
          bgcolor: "white",
          borderRadius: "50%",
          boxShadow: "0 0 10px #ccc",
        }}
      >
        <IconButton onClick={handleMobile}>
          {isMobile ? <CloseIcon /> : <MenuIcon />}
        </IconButton>
      </Box>

      <Grid item md={4} lg={3} sx={{ display: { xs: "none", md: "block" } }}>
        <Sidebar />
      </Grid>
      <Grid
        item
        xs={12}
        md={8}
        lg={9}
        // sx={{
        //   bgcolor: grayColor,
        // }}
      >
        {children}
      </Grid>

      <Drawer
        sx={{
          display: {
            md: "none",
          },
        }}
        open={isMobile}
        onClose={handleClose}
      >
        <Sidebar w={"70vw"} />
      </Drawer>
    </Grid>
  );
};

export default AdminLayout;
