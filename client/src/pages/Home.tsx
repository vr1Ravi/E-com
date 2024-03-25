import { Link } from "react-router-dom";
import Carousel from "react-bootstrap/Carousel";
import Carousel1 from "../assets/carousel1.jpg";
import Carousel2 from "../assets/carousel2.jpg";
import Carousel3 from "../assets/carousel3.jpg";
import "bootstrap/dist/css/bootstrap.min.css";
const Home = () => {
  return (
    <div
      style={{ height: "calc(100vh - 4rem)" }}
      className=" sr py-8 px-[5%] fkex flex-col w-full"
    >
      {/* Carousel */}
      <section className=" h-[20rem] mx-auto w-full">
        <Carousel className="w-full">
          <Carousel.Item>
            <img className="h-[20rem] w-full" src={Carousel1} alt=".." />
            <Carousel.Caption>
              <h3>New Arrivals</h3>
              <p>
                Discover the latest additions to our collection. Shop now for
                the trendiest styles!
              </p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img className="h-[20rem] w-full" src={Carousel2} alt=".." />

            <Carousel.Caption>
              <h3>Best Sellers</h3>
              <p>
                Explore our best-selling products. Find out what everyone is
                loving right now!
              </p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img className="h-[20rem] w-full" src={Carousel3} alt=".." />
            <Carousel.Caption>
              <h3>Sale Now On</h3>
              <p>
                Don't miss out on our big sale! Enjoy huge discounts on selected
                items. Limited time only!
              </p>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
      </section>
      <h1 className="mt-12 flex justify-between items-center">
        Latest Products{" "}
        <Link
          className="text-xl decoration-transparent text-blue-500"
          to={"/search"}
        >
          More
        </Link>
      </h1>
      <main className="w-full flex gap-4 overflow-x-auto scroll-ba"></main>
    </div>
  );
};

export default Home;
