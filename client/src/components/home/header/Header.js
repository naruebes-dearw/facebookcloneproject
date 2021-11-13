import "./Header.css";
import HeaderCenter from "./headerCenter/HeaderCenter";
import HeaderLeft from "./headerLeft/HeaderLeft";
import HeaderRight from "./headerRight/HeaderRight";

const Header = () => {
  return (
    <div className="header">
      <HeaderLeft />
      <HeaderCenter />
      <HeaderRight />
    </div>
  )
}

export default Header;
