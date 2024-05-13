import React from "react";

const shapes = {
  circle: "rounded-[50%]",
  round: "rounded-[10px]",
} as const;
const variants = {
  outline: {
    white_A700: "border-white-A700 border-[0.5px] border-solid text-white-A700",
    gray_900_01: "border-gray-900_01 border-[0.5px] border-solid text-gray-900_01",
    gray_100: "border-gray-100 border-[0.5px] border-solid text-black-900",
  },
  fill: {
    gray_900_01: "bg-gray-900_01 text-white-A700",
    gray_100: "bg-gray-100 text-gray-500",
    green_600_01: "bg-green-600_01 text-white-A700",
    gray_50: "bg-gray-50 text-black-900",
    white_A700: "bg-white-A700 text-gray-900_01",
    gray_900_26: "bg-gray-900_26 text-white-A700",
  },
} as const;
const sizes = {
  lg: "h-[36px] px-2",
  "5xl": "h-[48px] px-[13px]",
  "3xl": "h-[44px] px-[9px] text-xl",
  "4xl": "h-[44px] px-[17px] text-sm",
  "2xl": "h-[42px] px-2.5",
  "7xl": "h-[52px] px-3.5",
  xl: "h-[40px] px-[35px] text-sm",
  "6xl": "h-[52px] px-[17px] text-base",
  md: "h-[32px] px-3.5 text-xs",
  xs: "h-[28px] px-2 text-xs",
  sm: "h-[30px] px-1.5",
} as const;

type ButtonProps = Omit<
  React.DetailedHTMLProps<React.ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>,
  "onClick"
> &
  Partial<{
    className: string;
    leftIcon: React.ReactNode;
    rightIcon: React.ReactNode;
    onClick: () => void;
    shape: keyof typeof shapes;
    variant: keyof typeof variants;
    size: keyof typeof sizes;
    color: string;
  }>;
const Button: React.FC<React.PropsWithChildren<ButtonProps>> = ({
  children,
  className = "",
  leftIcon,
  rightIcon,
  shape = "",
  variant = "fill",
  size = "sm",
  color = "gray_900_26",
  ...restProps
}) => {
  return (
    <button
      className={`${className} flex items-center justify-center text-center cursor-pointer ${(shape && shapes[shape]) || ""} ${(size && sizes[size]) || ""} ${(variant && variants[variant]?.[color as keyof (typeof variants)[typeof variant]]) || ""}`}
      {...restProps}
    >
      {!!leftIcon && leftIcon}
      {children}
      {!!rightIcon && rightIcon}
    </button>
  );
};

export { Button };
