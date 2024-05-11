import { ReactNode } from "react";

interface HeaderProps {
  logo: ReactNode;
}

const Header = ({ logo }: HeaderProps) => (
  <div className="h-[80px] bg-blue-950 flex items-center p-4">
    <div className="w-[120px]">{logo}</div>
  </div>
);

export default Header;
