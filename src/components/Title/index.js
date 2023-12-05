import Styles from "./title.module.css";

const Title = ({ children }) => {
  return <div className={Styles.title}>{children}</div>;
};

export default Title;
