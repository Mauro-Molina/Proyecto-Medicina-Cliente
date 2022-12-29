import "./HomePage.css";
import Banner from '../../components/Banner/'
import Services from "../../components/Services";
import Department from "../../components/Department";
import Noticies from "../../components/Noticies";
import Work_process from "../../components/Work_process";
import Reservation from "../../components/Reservation";
import Contact from "../../components/Contact";
import Footer from "../../components/Footer";

function HomePage() {
  return (
    <div>
      <Banner></Banner>
      <Services></Services>
      <Department></Department>
      <Noticies></Noticies>
      <Work_process></Work_process>
      <Reservation></Reservation>
      <Contact></Contact>
      <Footer></Footer>
    </div>
  );
}


export default HomePage;
