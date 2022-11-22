import React from 'react'
import Hero from '../Hero/Hero'
import css from './Footer.module.css'
import Logo from '../../assets/logo.png'
import { GrLocation, GrPhone, GrLogin, GrMailOption, GrUser, GrLink } from 'react-icons/gr'

const Footer = () => {
   return (
      <div className={css.cFooterWrapper}>
         <hr />

         <div className={css.cFooter}>
            <div className={css.logo}>
               <img src={Logo} alt="" />
               <span>Amazon</span>
            </div>

            <div className={css.block}>
               <div className={css.detail}>
                  <span>Contact Us</span>
                  <span className={css.pngLine}>
                     <GrLocation className={css.icon} />
                     <span>Ha Noi - VIET NAM</span>
                  </span>

                  <span className={css.pngLine}>
                     <GrPhone className={css.icon} />
                     <span>012-345-6789</span>
                  </span>

                  <span className={css.pngLine}>
                     <GrMailOption className={css.icon} />
                     <span>banana1999@gmail.com</span>
                  </span>
               </div>
            </div>

            <div className={css.block}>
               <div className={css.detail}>
                  <span>Account</span>
                  <span className={css.pngLine}>
                     <GrLogin className={css.icon} />
                     <span>Sign In</span>
                  </span>
               </div>
            </div>

            <div className={css.block}>
               <div className={css.detail}>
                  <span>Company</span>
                  <span className={css.pngLine}>
                     <GrUser className={css.icon} />
                     <span>About us</span>
                  </span>
               </div>
            </div>

            <div className={css.block}>
               <div className={css.detail}>
                  <span>Resources</span>
                  <span className={css.pngLine}>
                     <GrLink className={css.icon} />
                     <span>Safety Privacy & Terms</span>
                  </span>
               </div>
            </div>
         </div>

         <div className={css.copyRight}>
            <span>Copyright ©2022 by QuanBanana</span>
            <span>All rights reserved</span>
         </div>
      </div>
   )
}

export default Footer