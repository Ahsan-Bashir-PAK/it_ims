import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import SideBar from './components/sideBar'
const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Trainee Managment System',
  description: 'Developed by IT Branch NHMP',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      
      <body className={inter.className}>
      {/* <SideBar/> */}
        {children}
      </body>
     
    </html>
  )
}
