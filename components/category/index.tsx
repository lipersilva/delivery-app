import Styles from './styles.module.css'
import { IconBase } from '../../components'
import Link from 'next/link';

type Props = {
  name: string;
  iconName: string;
  legend: string;
  backgroundSection:string;
}

export const Category = ( { name, iconName, legend, backgroundSection}: Props) => {
  return(
    <Link href="/categoria">
      <a className={Styles.card}>
      <div 
        className={Styles.icon} 
        style={{backgroundColor: backgroundSection}}
      >
        <IconBase iconName={iconName} color="white" size={48}/>
      </div>
      <h3>{name}</h3>
      <p>{legend}</p>
    </a>
    </Link>
  );
}