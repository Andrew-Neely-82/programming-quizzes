import { links } from "./index.js";
import "./style.scss";

const Navbar = () => {
  return (
    <div className="Navbar_">
      <div className="Navbar_container">
        <div className="Navbar_title">Programming Quizzes!</div>
        <div className="Navbar_links">
          {links.map((info, key) => {
            return (
              <span key={key}>
                <a href={info.link}>{info.name}</a>
              </span>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
