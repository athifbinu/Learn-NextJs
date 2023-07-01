
"use client"
import Link from 'next/link'
import React from 'react'
import styles from "./navbar.module.css"


const Navbar = () => {


  const links = [
    {
      id: 1,
      title: "Home",
      url: "/"
    },
    {
      id: 2,
      title: "Portfolio",
      url: "/Portfolio"
    },
    {
      id: 3,
      title: "Blog",
      url: "/Blog"
    },
    {
      id: 4,
      title: "About",
      url: "/About"
    },
    {
      id: 5,
      title: "Contact",
      url: "/Contact"
    },
    {
      id:6,
      title:"Dashboard",
      url:"/Dashboard"
    },
  ]
  return (
    <div className={styles.container}>
      <Link href="/" className={styles.logo}>
        lamia
        </Link>
      <div className={styles.links}>
      
        {links.map(link => (
            <Link key={link.id} href={link.url} className={styles.link}>
              {link.title}
            </Link>
        ))}
        <button className={styles.logout} onClick={()=>{console.log("log out")}}>logout</button>
      </div>

    </div>
  )
}

export default Navbar
