import { Fragment } from "react";
import "./App.css";
import dashboard from "./assets/images/illustration-dashboard.png";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Form from "./components/Form";
function App() {
  return (
    <Fragment>
     <Header/>
      <main>
        <section className="comming-soon__section">
          <h1 className="title">
            We are launching <span className="soon">soon!</span>
          </h1>
          <p>Subscribe and get notified</p>
          <Form/>
          <img src={dashboard} alt="" />
        </section>
      </main>
      <Footer/>
    </Fragment>
  );
}

export default App;
