import { IconArrowTopDown } from '../icon-family'
import Styles from './styles.module.css'
import Image from 'next/image'

export const UserProfile = () => {
  return(
    <div className={Styles.userProfile} >
      <div>
        <Image src="/user-avatar.png" alt="Usuario" width={48} height={48}/>
      </div>
      <div className={Styles.userData}>
        <h3>Mark Clarke</h3>
        <p>markclarke@gmail.com</p>
      </div>
      <div className={Styles.button}>
        <IconArrowTopDown color="black"/>
      </div>
    </div>
  );
}