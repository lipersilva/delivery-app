
import { IconProps } from "../../types"

export const IconTargetLocation = (props: IconProps) => {

  const { size, color } = props;

  return(
    <svg 
    width={size || "16" } 
    height={size || "16" } 
    viewBox="0 0 16 16" 
    fill="none" 
    xmlns="http://www.w3.org/2000/svg"
    >
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d="M7.2 0.843943C3.86271 1.21286 1.21286 3.86271 0.843943 7.2H0V8.8H0.843943C1.21286 12.1373 3.86271 14.7871 7.2 15.1561V16H8.8V15.1561C12.1373 14.7871 14.7871 12.1373 15.1561 8.8H16V7.2H15.1561C14.7871 3.86271 12.1373 1.21286 8.8 0.843943V0H7.2V0.843943ZM3.2 7.2H2.45671C2.80752 4.74745 4.74745 2.80752 7.2 2.45671V3.2H8.8V2.45671C11.2526 2.80752 13.1925 4.74745 13.5433 7.2H12.8V8.8H13.5433C13.1925 11.2526 11.2526 13.1925 8.8 13.5433V12.8H7.2V13.5433C4.74745 13.1925 2.80752 11.2526 2.45671 8.8H3.2V7.2ZM8 9.6C8.88366 9.6 9.6 8.88366 9.6 8C9.6 7.11634 8.88366 6.4 8 6.4C7.11634 6.4 6.4 7.11634 6.4 8C6.4 8.88366 7.11634 9.6 8 9.6ZM4.8 8C4.8 9.76731 6.23269 11.2 8 11.2C9.76731 11.2 11.2 9.76731 11.2 8C11.2 6.23269 9.76731 4.8 8 4.8C6.23269 4.8 4.8 6.23269 4.8 8Z" 
        fill={color || "gray"}
      />
    </svg>
  );
};


