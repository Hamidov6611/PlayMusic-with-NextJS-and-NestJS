import Navbar from '@/components/Navbar'
import './globals.css'
import {FC, ReactNode} from 'react'

interface LayoutProps {
  children: ReactNode
}


const Layout: FC<LayoutProps> = ({children}) => {
  return <div className='bg-red-500'>
    <Navbar />
    {children}
    </div>
}

export default Layout
