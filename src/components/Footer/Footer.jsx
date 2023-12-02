import React from 'react'
import css from './Footer.module.scss'
import { motion } from 'framer-motion'
import {footerVariants, staggerChildren} from '../../utils/motion'

const Footer = () => {
  return (
    <motion.section
    variants={staggerChildren}
    initial="hidden"
    whileInView="show"
    viewport={{once: false, amount: 0.25}}
    className={` paddings ${css.wrapper}`}>

        <motion.div
        variants={footerVariants}
        className={` innerWidth ypaddings flexCenter ${css.container}`}>
            <div className={css.left}>
                <span className="primaryText">
                    Lets make somethings <br/> amazing together.
                </span>
                <span className="primaryText">
                    Start by <a href="shujabinrehmat@gmail.com">Saying Hi</a>
                </span>
            </div>
            <div className={css.right}>
                <div className={css.info}>
                    <span className="secondaryText">Information</span>
                    <p>Village Begusht Garam Chashma Chitral</p>
                </div>

                <div className={css.menu}>
                    <li>Services</li>
                    <li>Works</li>
                    <li>Notes</li>
                    <li>Experiences</li>
                </div>
            </div>
        </motion.div>
    </motion.section>
  )
}

export default Footer
