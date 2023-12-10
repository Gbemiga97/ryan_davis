'use client'

import { RiYoutubeFill, RiLinkedinFill, RiGithubFill, RiInstagramFill } from 'react-icons/ri'

import Link from 'next/link'


const icons = [
  {
    path: '/',
    icon: <RiYoutubeFill />
  },
  {
    path: '/',
    icon: <RiLinkedinFill />
  },
  {
    path: '/',
    icon: <RiGithubFill />
  },
  {
    path: '/',
    icon: <RiInstagramFill />
  },
]

const Socials = ({containerStyles, iconStyles}) => {
  return (
    <div className={`${containerStyles}`}>
      {
        icons.map(({icon, path}, i) => (
          <Link
          key={i} href={path}
          className={`${iconStyles}`}
          >
          {icon}
          </Link>
        ))
      }
    </div>
  )
}

export default Socials