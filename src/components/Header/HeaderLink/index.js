import { Link } from "react-router-dom";
import Style from "./headerLinks.module.css";

const HeaderLink = ({ path, children }) => {
  return (
    <Link to={path} className={Style.HeaderLink}>
      {children}
    </Link>
  );
};

export default HeaderLink;
