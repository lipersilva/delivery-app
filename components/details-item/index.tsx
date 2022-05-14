import { IconMoney, IconStar, IconTargetLocation, IconSilverware, IconDeliveryMotorcycle } from '../icon-family'
import Styles from './styles.module.css'

type DetailsItemProps = {
  rate?: number;
  reviews?: number | undefined;
  category?: string;
  price?: number;
  deliveryTime?: string;
  distance?: string;
  bonus?: string;
};

export const DetailsItem = ({ ...props }:DetailsItemProps) => {
  return(
    <div className="mt-3 flex">
      {props.rate && RateComponent(props.rate, props.reviews)}
      {props.category && CategoryComponent(props.category)}
      {props.price && PriceComponent(props.price)}
      {props.bonus && BonusComponent(props.bonus)}
      {props.distance && DistanceComponent(props.distance)}
      {props.deliveryTime && DeliveryTimeComponent(props.deliveryTime)}
    </div>
  )
}

const RateComponent = (rate: number, reviews:number | undefined) => {
  return(
    <div className={Styles.infomation}>
      <IconStar size={16} color="#FACD5D"/>
      <span className="font-bold">{rate}</span>
      ({reviews})
    </div>
  );
}

const CategoryComponent = (category:string) => {
  return(
    <div className={Styles.infomation}>
      <IconSilverware size={16} color="#A3A3A4"/>
      {category}
   </div>
  );
}
 
const PriceComponent = (price:number) => {
  return(
    <div className={Styles.infomation}>
      <IconMoney size={16} color="#A3A3A4"/>
      {price}
    </div>
  );
}

const BonusComponent = (bonus:string) => {
  return(
    <div className={Styles.infomation}>{bonus}</div>
  );
}

const DistanceComponent = (distance:string) => {
  return(
    <div className={Styles.infomation}>
      <IconTargetLocation size={16} color="#A3A3A4"/>
      {distance}
    </div>
  );
}

const DeliveryTimeComponent = (deliveryTime:string) => {
  return(
    <div className={Styles.infomation}>
      <IconDeliveryMotorcycle size={16} color="#A3A3A4"/>
      {deliveryTime}
    </div>
  );
}