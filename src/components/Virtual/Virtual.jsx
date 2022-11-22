import React from 'react'
import css from './Virtual.module.css'
import Shade from '../../assets/shade.png'
import ChangeImg from './ChangeImg'

const Virtual = () => {
   return (
      <div className={css.Virtual}>
         <div className={css.left}>
            <span>Virtual Try-on</span>
            <span>Never Buy the wrong Shade Again</span>
            <span>Try Now!</span>
            <img src={Shade} alt="" />
         </div>

         <div className={css.right}>
            <ChangeImg />
         </div>
      </div>
   )
}

export default Virtual