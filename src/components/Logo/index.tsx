import { Home } from "lucide-react";

interface LogoProps {
  placement: "navbar" | "footer";
}

const Logo: React.FC<LogoProps> = ({ placement }) => {
  const logoClass = () => {
    return `text-xl font-bold ${
      placement === "navbar" &&
      "bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent"
    }`;
  };

  return (
    <div>
      <div className="flex items-center justify-center space-x-2">
        <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg flex items-center justify-center">
          <Home className="w-5 h-5 text-white" />
        </div>
        <span className={logoClass()}>DekaTech</span>
      </div>
    </div>
  );
};

export default Logo;
