import Styles from './styles.module.css'
import { IconBase } from '../../components'
import Link from 'next/link';

type Props = {
  id: string;
  name: string;
  iconName: string;
  legend: string;
  backgroundSection:string;
}

export const Category = ( { id, name, iconName, legend, backgroundSection}: Props) => {
  return(
    <Link href={`/categories/${id}`}>
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