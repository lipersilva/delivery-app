
import Image from "next/image"
import Link from "next/link";
import { DetailsItem } from "../details-item";
import Styles from './styles.module.css';
import { TypePageProps } from "./types";

export const FoodItem = ({ ...props}:TypePageProps ) => {
  return(
    <div className={Styles.item}>
      <Link href={`/product/${props.id}`}>
        <a>
          <div className={Styles.thumb}>
            <Image 
              src={props.imageUrl} 
              alt={props.name} 
              layout="fill" 
              loading="lazy" 
              
            />
          </div>
          <div className={Styles.header}>
            <h3>{props.name}</h3>
            <span>
              {props.deliveryFee}
            </span>
          </div>
          <DetailsItem 
            rate={props.rate} 
            reviews={props.reviews} 
            category={props.category} 
            deliveryTime={props.deliveryTime} 
          />
        </a>
      </Link>
    </div>
  );
}