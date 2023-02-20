import logo from "../assets/ironhack-logo-xs.png";
import menu from "../assets/menu-top-xs.png";

export const Header = () => {
  return (
    <div className="header">
      <div className="menuHeader">
      <img src={logo} className="image-logo"/>
      <img src={menu} className="image-menu"/>
      </div>
      <div className="headerCtn">
        <h1>Say hello to ReactJS</h1>
        <p>You will learn how to use the most popular frontend library, and become a super Ninja developer.</p>
        <button>Awesome!</button>
      </div>
    </div>
  );
};

export default Header