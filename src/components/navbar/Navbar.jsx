import Link from 'next/link'
import React from 'react'

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
    <div>
      <Link href="/">lamia</Link>
      <div>
        {links.map(link => (
            <Link key={link.id} href={link.url}>
              {link.title}
            </Link>
        ))}
      </div>

    </div>
  )
}

export default Navbar
