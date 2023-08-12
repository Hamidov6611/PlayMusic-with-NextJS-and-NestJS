"use client"
import DehazeIcon from '@mui/icons-material/Dehaze';
import ClearIcon from '@mui/icons-material/Clear';
import Sidebar from './Sidebar';
import { useState } from 'react'
import { useRouter } from 'next/router';

const menuItems = [
  {text: "Главная", href: "/"},
  {text: "Список треков", href: "/tracks"},
  {text: "Список альбомов", href: "/albums"},
]

const Navbar = () => {
    const [isSidebar, setIsSidebar] = useState<boolean>(false)
  return (
    <div className={`w-[100%] h-[70px] bg-blue-600 shadow-lg flex items-center`}>
        <DehazeIcon fontSize='large' sx={{marginLeft:"20px", color:"#fff", cursor:"pointer"}} onClick={() => setIsSidebar(true)}/>
        
        {isSidebar && <Sidebar handleClick={() => setIsSidebar(false)} />}
    </div>
  )
}

export default Navbar