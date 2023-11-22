import Style from "./banner.module.css";
const Banner = ({ bannerPath }) => {
  return (
    <div
      className={Style.banner}
      style={{ backgroundImage: `url('/imagens/banner-${bannerPath}.png')` }}
    ></div>
  );
};

export default Banner;
