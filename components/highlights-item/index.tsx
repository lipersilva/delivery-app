import Styles from "./styles.module.css";
import Image from "next/image"
import { IconMoney, IconStar, IconTargetLocation, IconSilverware } from '../icon-family'

type Props = {
  name: string;
  rate: number;
  comments: string;
  food: string;
  distance: number;
  price: number;
  bonus: string;
  brandUrl: string;
}

export const HighlightsItem = ({ name, brandUrl, comments, rate, food, price , distance, bonus}: Props) => {
  return(
    <div className={Styles.restaurant}>
      <div className={Styles.brand}>
        <Image src={brandUrl} alt={name} width={64} height={64} />
      </div>
      <div className={Styles.information}>
        <h3>{name}</h3>
        <div className="my-3">
          <div>
            <IconStar size={16} color="#FACD5D"/>
            <span>{rate}</span>
            {comments}
          </div>
          <div>
            <IconSilverware size={16} color="#A3A3A4"/>
            {food}
          </div>
          <div>
            <IconMoney size={16} color="#A3A3A4"/>
            {price}
          </div>
        </div>
        <div>
          <div>{bonus}</div>
          <div>
            <IconTargetLocation size={16} color="#A3A3A4"/>
            {distance}
          </div>
        </div>
      </div>
    </div>
  );
}