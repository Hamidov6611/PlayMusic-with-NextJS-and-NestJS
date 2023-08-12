'use client'
import React from "react";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import {
  Divider,
  IconButton,
  List,
  ListItem,
  ListItemText,
} from "@mui/material";
import { useRouter } from "next/navigation";
type SidebarProps = {
  setIsSidebar?: boolean
  handleClick: () => void
}

const style = {
  width: "100%",
  maxWidth: 360,
  bgcolor: "background.paper",
};

const Sidebar = (props: SidebarProps) => {
  const router = useRouter()
  return (
    <div
      className={`fixed left-0 top-0 w-[100%] h-[100vh] bg-[rgba(0,0,0,.6)] m-0`}
      onClick={props.handleClick}
    >
      <div
        className={`w-[20%] h-[100%] bg-white shadow-lg flex flex-col`}
        onClick={(e) => e.stopPropagation()}
      >
        <ArrowBackIosIcon
          sx={{ cursor: "pointer", ml: 5, mt: 5 }}
          onClick={props.handleClick}
        />
      <List sx={style} component="nav" aria-label="mailbox folders">
        <ListItem button onClick={() => router.push('/')}>
          <ListItemText primary="Главная" sx={{color:"black"}} />
        </ListItem>
        <Divider />
        <ListItem button divider onClick={() => router.push('/tracks')}>
          <ListItemText primary="Список треков" />
        </ListItem>
        <ListItem button onClick={() => router.push('/albums')}>
          <ListItemText primary="Список альбомов" />
        </ListItem>
        <Divider light />
       
      </List>
      </div>
    </div>
  );
};

export default Sidebar;
