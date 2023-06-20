import "./Home.css";
import ProductCard from "../components/ProductCard";
import { useSelector } from "react-redux";

const Home = () => {
  const state = useSelector((state) => state);
  const { products } = state.shopping;
  return (
    <>
      <div className="container_principal">
        <section id="artesanal">
          <div className="title_principal">
            <p>Burguer Artesanais</p>
          </div>
          <div className="container">
            {products.map((producto) =>
              producto.type === "artesanal" ? (
                <ProductCard data={producto} key={producto.id} />
              ) : (
                <></>
              )
            )}
          </div>
        </section>
        <section id="convencional">
          <div className="title_principal">
            <p>Burguer Convencionais</p>
          </div>
          <div className="container">
            {products.map((producto) =>
              producto.type === "convencional" ? (
                <ProductCard data={producto} key={producto.id} />
              ) : (
                <></>
              )
            )}
          </div>
        </section>
      </div>
    </>
  );
};

export default Home;
