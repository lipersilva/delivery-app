import { 
  IconFire, 
  IconWallet, 
  IconMotorcycle, 
  IconKnife, 
  IconStore, 
  IconMap, 
  IconBookmark, 
  IconDocument, 
  IconFeed, 
  IconGear, 
  IconMail, 
  IconHome,
  IconArrowTopDown
} from "../icon-family";

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
    case "bookmark":
      IconComponent = <IconBookmark size={size} color={color}/>;
      break;
    case "document":
      IconComponent = <IconDocument size={size} color={color}/>;
      break;
    case "feed":
      IconComponent = <IconFeed size={size} color={color}/>;
      break;
    case "gear":
      IconComponent = <IconGear size={size} color={color}/>;
      break;
    case "mail":
      IconComponent = <IconMail size={size} color={color}/>;
      break;
    case "home":
      IconComponent = <IconHome size={size} color={color}/>;
      break;
    case "arrowTopDown":
      IconComponent = <IconArrowTopDown size={size} color={color}/>;
      break;
  
    default: 
      return <IconFire size={size} color={color}/>;
  }
  return IconComponent;

}