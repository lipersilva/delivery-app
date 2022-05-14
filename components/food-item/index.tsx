
import Image from "next/image"
import { DetailsItem } from "../details-item";
import Styles from './styles.module.css'

type FoodItemProps = {
  name: string,
  imageUrl: string;
  reviews?: number | undefined;
  deliveryFee: string,
  rate: number,
  category: string;
  deliveryTime: string,
};


export const FoodItem = ({ ...props}:FoodItemProps ) => {
  return(
    <div>
      <div className={Styles.thumb}>
        <Image src={props.imageUrl} alt={props.name} width={336} height={176} />
      </div>
      <div className={Styles.header}>
        <h3>{props.name}</h3>
        <span>
          {props.deliveryFee}
        </span>
      </div>
      <DetailsItem rate={props.rate} reviews={props.reviews} category={props.category} deliveryTime={props.deliveryTime} />
    </div>
  );
}