import Body from "./body/Body";
import Header from "./header/Header";
import "./Home.css";

const Home = () => {
  console.log("server code beautify 1");

  return (
    <div className="home">
      <Header />
      <Body />
    </div>
  )
}

export default Home;