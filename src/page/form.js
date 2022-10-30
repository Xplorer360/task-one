import React from "react";
import { BrowserRouter as Router, Link } from "react-router-dom";
import logo from "./BTR_9991 copy.JPG";
import footer from "./Footer text.png";
import vector from "./Zuri.Internship_Logo.png";
import IG from "./I4G.png";
import Icon from "./Icon (1).png";
import vector2 from "./slack.png";
export const PostForm = () => {
  return (
    <body>
      <main>
        <div>
          <img className="profile" id="profile__img" src={logo} />
          <p className="name">Halima Ibrahim</p>
          <p className="twitter" id="twitter">
            @HalimaIbro360{" "}
          </p>
          <p className="slack" id="slack">
            Halimatu Ibrahim
          </p>
        </div>

        <Router>
          <div>
            <a
              id="btn-zuri"
              href="https://www.twitter.com/HalimaIbro360"
              target="_blank"
              rel="noreferrer"
            >
              <button className="button">Twitter</button>
            </a>
          </div>
        </Router>
        <Router>
          <div>
            <a
              id="btn-zuri"
              href="https://training.zuri.team/”"
              target="_blank"
              rel="noreferrer"
            >
              <button className="button">Zuri team</button>
            </a>
          </div>
        </Router>
        <Router>
          <div>
            <a
              id="books"
              href="http://books.zuri.team"
              target="_blank"
              rel="noreferrer"
            >
              <button className="button">Zuri books</button>
            </a>
          </div>
        </Router>
        <Router>
          <div>
            <a
              id="book-python"
              href="https://books.zuri.team/python-for-beginners?ref_id=<Halimatu Ibrahim>"
              target="_blank"
              rel="noreferrer"
            >
              <button className="button">Python Books</button>
            </a>
          </div>
        </Router>
        <Router>
          <div>
            <a
              id="pitch"
              href="https://background.zuri."
              target="_blank"
              rel="noreferrer"
            >
              <button className="button">Background Check for Coders</button>
            </a>
          </div>
        </Router>
        <Router>
          <div>
            <a
              id="book__design"
              href="https://books.zuri.team/design-rules"
              target="_blank"
              rel="noreferrer"
            >
              <button className="button">Design Books</button>
            </a>
          </div>
        </Router>
        <div className="icon">
          <img className="icon1" src={vector2} />
          <img className="icon2" src={Icon} />
        </div>
      </main>

      <footer className="bottom-img">
        <img className="foot1" src={vector} />
        <img className="foot2" src={footer} />
        <img className="foot3" src={IG} />
      </footer>
    </body>
  );
};
