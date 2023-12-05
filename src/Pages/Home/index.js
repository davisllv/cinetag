import Banner from "components/Banner";
import Footer from "components/Footer";
import Header from "components/Header";
import Title from "components/Title";

const Inicio = () => {
  return (
    <>
      <Header />
      <Banner bannerPath={"home"} />
      <Title>
        <h1>Um lugar para guardar seus vídeos e filmes</h1>
      </Title>
      <Footer />
    </>
  );
};

export default Inicio;
