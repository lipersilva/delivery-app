import { IconFire, IconWallet, IconMotorcycle, IconKnife, IconStore, IconMap } from "../icon-family";

type IconBaseProps = {
  size?: string | number;
  color?: string;
  iconName: string
}

export const IconBase = ({iconName, size, color}: IconBaseProps):JSX.Element => {
  let IconComponent:JSX.Element;

  switch (iconName) {
    case "fire":
      IconComponent = <IconFire size={size} color={color}/>;
      break;
    case "wallet":
      IconComponent = <IconWallet size={size} color={color}/>;
      break;
    case "motorcycle":
      IconComponent = <IconMotorcycle size={size} color={color}/>;
      break;
    case "knife":
      IconComponent = <IconKnife size={size} color={color}/>;
      break;
    case "store":
      IconComponent = <IconStore size={size} color={color}/>;
      break;
    case "map":
      IconComponent = <IconMap size={size} color={color}/>;
      break;
  
    default: 
      return <IconFire size={size} color={color}/>;
  }
  return IconComponent;

}