import logo1 from "../assets/img/logo_css.png";
import logo2 from "../assets/img/logo_html.png";
import logo3 from "../assets/img/logo_brush.png";
import { useNavigate } from "react-router-dom";
import Card from "../components/card/Card";

const Home = () => {
  const navigate = useNavigate();
  return (
    <div className="root">
      <section id="showcase">
        <div className="container">
          <h1>Professional Web Design</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu
            luctus ipsum, rhoncus semper magna. Nulla nec magna sit amet sem
            interdum condimentum.
          </p>
        </div>
      </section>
      {/* use Subscribe component here */}
      <section id="boxes">
        <div className="container-img">
          <img src={logo2} alt="html" onClick={() => navigate("/html")} />

          <img src={logo1} alt="css" onClick={() => navigate("/css")} />

          <img src={logo3} alt="gd" onClick={() => navigate("/logo")} />
        </div>
      </section>
    </div>
  );
};

export default Home;
