import icon1 from "../assets/icon1.png";
import icon2 from "../assets/icon2.png";
import icon3 from "../assets/icon3.png";
import icon4 from "../assets/icon4.png";

export const Content = () => {
  return (
    <div className="container">
      <div className="block">
        <img src={icon1} />
        <h2>Declarative</h2>
        <p>React makes it painless to create interactive UIs.</p>
      </div>
      <div className="block">
        <img src={icon2} />
        <h2>Components</h2>
        <p>Build encapsulated components that manage their state.</p>
      </div>
      <div className="block">
        <img src={icon3} />
        <h2>Single-Way</h2>
        <p>A set of immutable values arepassed to the component's.</p>
      </div>
      <div className="block">
        <img src={icon4} />
        <h2>JSX</h2>
        <p>Statically-typed, designed to run on modern browsers</p>
      </div>
    </div>
  );
};

export default Content