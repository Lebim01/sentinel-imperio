import { FC, ReactNode } from "react";

type Props = {
  children: ReactNode;
};

const Button: FC<Props> = ({ children }) => {
  return (
    <button className="bg-primary text-white rounded-lg px-8 py-4 font-bold hover:bg-primary/80 active:bg-primary/80 select-none">
      {children}
    </button>
  );
};

export default Button;
