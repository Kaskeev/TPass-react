import Content from "./Components/Content/Content";
import Footer from "./Components/Footer/Footer";
import Header from "./Components/Header/Header";
import Section from "./Components/Section/Section";

function App() {
  let logo = "https://tpass.co/static/home/images/logo.svg";
  let logoFooter = "https://tpass.co/static/home/images/logo-inverse.svg";
  let products = [
    {
      title: "Order ahead, skip the line",
      image: "https://tpass.co/static/home/svgs/order-ahead.svg",
      id: 1,
      text: "Feel like a rock star when you bypass the line and save a bunch of time.",
    },
    {
      title: "Bonus and discounts",
      image: "https://tpass.co/static/home/svgs/bonus.svg",
      id: 2,
      text: " You can enjoy lots of discounts from the selected stores, or accumulate points.",
    },
    {
      title: "Share with your friends",
      image: "https://tpass.co/static/home/svgs/share.svg",
      id: 3,
      text: "Send gifts to your friends and family, and pick up for your coworkers when they can't get away .",
    },
  ];
  return (
    <div>
      <Header logo={logo} />
      <Content />
      <Section products={products} />
      <Footer logo={logoFooter} />
    </div>
  );
}

export default App;
