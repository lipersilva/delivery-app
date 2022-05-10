import Styles from './styles.module.css'

type Props = {
  name: string;
  iconName: string;
  legend: string;
}

export const Category = ( { name, iconName, legend}: Props) => {
  return(
    <div className={Styles.card}>
      <div>{iconName}</div>
      <h3>{name}</h3>
      <p>{legend}</p>
    </div>
  );
}