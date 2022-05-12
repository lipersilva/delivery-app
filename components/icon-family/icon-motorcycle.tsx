import { IconProps } from "../../types"

export const IconMotorcycle = (props: IconProps) => {

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
        fill="#503E9D"
      />
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d="M25.692 16H20.4V18.4615H24.708L27.108 20.9231H17.4C14.4 20.9231 12 23.3846 12 26.4615C12 29.5385 14.4 32 17.4 32C20.064 32 22.272 30.0062 22.704 27.4092L25.248 25.8462C25.2 26.0554 25.2 26.2523 25.2 26.4615C25.2 29.5385 27.6 32 30.6 32C33.6 32 36 29.5385 36 26.4615C36 23.3846 33.6 20.9231 30.6 20.9231H30.504L25.692 16ZM20.208 27.3969C19.8 28.64 18.696 29.5385 17.364 29.5385C15.708 29.5385 14.364 28.16 14.364 26.4615C14.364 24.7631 15.708 23.3846 17.364 23.3846C18.708 23.3846 19.8 24.2954 20.208 25.5385H16.8V27.3846L20.208 27.3969ZM27.564 26.4615C27.564 28.16 28.908 29.5385 30.564 29.5385C32.2209 29.5385 33.564 28.1609 33.564 26.4615C33.564 24.7622 32.2209 23.3846 30.564 23.3846C28.908 23.3846 27.564 24.7631 27.564 26.4615Z" 
        fill={color || "white"}
      />
    </svg>
  );
};