import { IconProps } from "../../types"

export const IconFire = (props: IconProps) => {

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
        fill="#FB6D3A"
      />
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d="M30.3945 21.9554C30.6993 22.2642 31.0086 22.5777 31.2765 22.9333L31.211 22.9467C31.6433 23.4533 31.997 24 32.259 24.6133L32.4293 24.96C33.6739 28 32.8223 31.5467 30.4642 33.76C28.3551 35.7333 25.4075 36.2533 22.6564 35.8933C20.0756 35.56 17.6782 33.9067 16.3158 31.6C15.8965 30.8933 15.5559 30.0933 15.3725 29.2933C15.1498 28.6267 15.0712 27.96 15.0188 27.2933C14.8354 24.4 16.0013 21.3333 18.1498 19.52C17.1673 21.7067 17.4031 24.44 18.8441 26.3467C18.9096 26.44 18.962 26.5067 19.0407 26.5733C19.2765 26.7867 19.5909 26.8667 19.8791 26.7333C20.1411 26.6267 20.3376 26.36 20.3376 26.0667C20.3376 25.8933 20.2852 25.76 20.2328 25.6267C18.6607 21.4267 19.9708 16.5333 23.2983 13.76C24.2153 13 25.3158 12.3067 26.5079 12C25.3158 14.4667 25.7088 17.68 27.6214 19.6267C28.0688 20.082 28.5624 20.459 29.0562 20.8362C29.4735 21.1548 29.8909 21.4736 30.2808 21.84C30.3186 21.8784 30.3565 21.9169 30.3945 21.9554ZM25.8005 32.1333C26.259 32 26.8485 31.6533 27.2153 31.3333H27.2022C27.9883 30.6 28.4468 29.4 28.4075 28.3067C28.4075 28.1067 28.3813 27.92 28.3289 27.7333C28.1158 26.5535 27.3814 25.893 26.62 25.2082C26.2112 24.8405 25.7946 24.4658 25.4468 24C25.1455 23.6 24.8835 23.0933 24.6607 22.5867C24.2939 23.5067 24.2677 24.3467 24.4249 25.3333C24.4738 25.628 24.5421 25.9105 24.6094 26.1889C24.7765 26.8805 24.9374 27.5461 24.7786 28.3067C24.5166 29.4933 23.5996 30.6667 22.0407 31.04C22.9184 31.92 24.3594 32.6667 25.8005 32.1333Z" 
        fill={color || "gray"}
      />
    </svg>
  );
};