import { IconProps } from "../../types"

export const IconMap = (props: IconProps) => {

  const { size, color } = props;

  return(
    <svg 
    width={size || "24" } 
    height={size || "24" } 
    viewBox="0 0 48 48" 
    fill="none" 
    xmlns="http://www.w3.org/2000/svg"
    >
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d="M0 9C0 4.02944 4.02944 0 9 0H39C43.9706 0 48 4.02944 48 9V39C48 43.9706 43.9706 48 39 48H9C4.02944 48 0 43.9706 0 39V9Z" 
        fill="#FACD5D"
      />
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d="M35.12 12.04L35.3333 12C35.7015 12 36 12.2985 36 12.6667V32.8267C36 33.1333 35.8 33.3733 35.52 33.4667L28 36L20 33.2L12.88 35.96L12.6667 36C12.2985 36 12 35.7015 12 35.3333V15.1733C12 14.8667 12.2 14.6267 12.48 14.5333L20 12L28 14.8L35.12 12.04ZM26.6667 17.16L21.3333 15.2933V30.84L26.6667 32.7067V17.16ZM14.6667 16.6133L18.6667 15.2667V30.8667L14.6667 32.4133V16.6133ZM29.3333 32.7333L33.3333 31.3867V15.6L29.3333 17.1467V32.7333Z"
        fill={color || "white"}
      />
    </svg>
  );
};
