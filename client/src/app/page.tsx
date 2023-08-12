"use client"
import TrackService from "@/service/track.service";
import { Button } from "@mui/material";
import Image from "next/image";
import { useEffect } from "react";

export default function Home() {
  const getAll = async () => {
  const data = await TrackService.getAllTracks()
  console.log(data)
  }
  // useEffect(() => {
  //   getAll()
  // },[])
  return (
    <>
      <div className={`mt-[150px] flex flex-col items-center`}>
        <h1>Добро пожаловать!</h1>
        <h3>Здесь собраны лучшие треки!</h3>
      </div>
    </>
  );
}


// {["", "Список треков", "Список альбомов"