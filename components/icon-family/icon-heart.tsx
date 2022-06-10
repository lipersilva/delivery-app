import { IconProps } from "../../types"

export const IconHeart = (props: IconProps) => {

  const { size, color } = props;

  return(
    <svg 
    width={size || "20" } 
    height={size || "19" } 
    viewBox="0 0 20 19" 
    fill="none" 
    xmlns="http://www.w3.org/2000/svg"
    >
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d="M10 2.15368C11.09 0.838692 12.76 0 14.5 0C17.58 0 20 2.49537 20 5.69482C20 9.59836 16.6 12.7978 11.45 17.6332L10 19L8.55 17.6332C3.4 12.7978 0 9.59836 0 5.69482C0 2.49537 2.42 0 5.5 0C7.24 0 8.91 0.838692 10 2.15368ZM10 16.2044L10.1 16.1008C14.86 11.6381 18 8.68719 18 5.69482C18 3.62398 16.5 2.07084 14.5 2.07084C12.96 2.07084 11.46 3.10627 10.93 4.51444H9.07C8.54 3.10627 7.04 2.07084 5.5 2.07084C3.5 2.07084 2 3.62398 2 5.69482C2 8.68719 5.14 11.6381 9.89 16.1008L10 16.2044Z"
        fill={color || "gray" } 
      />
    </svg>
  );
};