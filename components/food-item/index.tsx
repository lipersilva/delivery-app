
import Image from "next/image"
import Link from "next/link";
import { DetailsItem } from "../details-item";
import Styles from './styles.module.css';
import { TypePageProps } from "./types";

export const FoodItem = ({ ...props}:TypePageProps ) => {
  return(
    <div>
      <Link href={`/product/${props.id}`}>
        <a>
          <div className={Styles.thumb}>
            <Image src={props.imageUrl} alt={props.name} width={336} height={176} loading="lazy" />
          </div>
          <div className={Styles.header}>
            <h3>{props.name}</h3>
            <span>
              {props.deliveryFee}
            </span>
          </div>
          <DetailsItem rate={props.rate} reviews={props.reviews} category={props.category} deliveryTime={props.deliveryTime} />
        </a>
      </Link>
    </div>
  );
}