import React, { useState, useRef } from 'react'
import CSS from './Header.module.scss'
import {BiMenuAltRight, BiPhoneCall} from 'react-icons/bi';
import {motion} from 'framer-motion';
import { getMenuStyles, headerVariants } from '../../utils/motion';
import useHeaderShadow from "../../hooks/useHeaderShadow"
import useOutsideAlerter from '../../hooks/useOutsideAlerter';

const Header = () => {
    const [menuOpened, setMenuOpened] = useState(false);
    const headerShadow = useHeaderShadow();
    const menuRef = useRef();
    
    useOutsideAlerter({
        menuRef, setMenuOpened,
    })

  return (
    <motion.div
    initial="hidden"
    whileInView="show"
    variants={headerVariants}
    viewport={{once: false, amount: 0.25}}
    className={` paddings  ${CSS.wrapper}`}
    style={{boxShadow: headerShadow}}
    >

        <div className={`flexCenter innerWidth ${CSS.container}`}>
            <div className={CSS.name}>
                Shuja
            </div>
            <ul
            ref = {menuRef}
            style={getMenuStyles(menuOpened)}
            className={`flexCenter ${CSS.menu}`}>
                <li><a href="#experties">Services</a></li>
                <li><a href="#work">Experience</a></li>
                <li><a href="#potfolio">Portfolio</a></li>
                <li><a href="#people">Testimonials</a></li>
                <li className={`flexCenter ${CSS.phone}`}>
                    <p>+92 345 0583043</p>
                    <BiPhoneCall size ={"40px"} />
                </li>
            </ul>
            {/* for medium and small screen */}
            <div className={CSS.menuIcon}
            onClick={()=>setMenuOpened((prev)=> !prev)}
            >

                <BiMenuAltRight size={40}/>
            </div>
        </div>
    </motion.div>
  )
}

export default Header
