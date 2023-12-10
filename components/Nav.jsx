import Link from "next/link"
import { usePathname } from "next/navigation"
import { motion } from "framer-motion"


const links = [
    {pathName: '/', name: 'home'},
    {pathName: '/projects', name: 'my projects'},
    {pathName: '/contact', name: 'contact'},
]

const Nav = ({containerStyles, linkStyles, underlineStyles}) => {

    const path = usePathname()
 
 
    return (
    <nav className={`${containerStyles}`}>
        {
            links.map(({name, pathName}, i) => (
                <Link
                key={i}
                href={pathName}
                className={`${linkStyles} capitalize`}
                >
                {
                    pathName === path && (
                        <motion.span 
                        initial={{ y: '-100%' }}
                        animate={{ y: 0 }} 
                        transition={{ type: 'tween' }} 
                        layoutId='underline'
                        className={`${underlineStyles}`}
                        />
                    )
                }
                {name}
                </Link>
            ))
        }
    </nav>
  )
}

export default Nav