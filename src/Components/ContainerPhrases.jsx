import React from "react";
import axios from "axios";
import Botones from "./Botones";

class ContainerPhrases extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      quote: "",
      author: "",
      color: "red",
      colorIcons: "white",
    };

    this.componentDidMount = this.componentDidMount.bind(this);
  }

  componentDidMount() {
    axios
      .get(
        "https://gist.githubusercontent.com/camperbot/5a022b72e96c4c9585c32bf6a75f62d9/raw/e3c6895ce42069f0ee7e991229064f167fe8ccdc/quotes.json"
      )
      .then((res) => {
        let randomPhrases =
          res.data.quotes[Math.floor(Math.random() * res.data.quotes.length)];

        this.setState({
          quote: randomPhrases["quote"],
          author: randomPhrases["author"],
        });
      });
    this._otherColors();
  }

  _otherColors() {
    var colors = [
      "#16a085",
      "#27ae60",
      "#2c3e50",
      "#f39c12",
      "#e74c3c",
      "#9b59b6",
      "#FB6964",
      "#342224",
      "#472E32",
      "#BDBB99",
      "#77B1A9",
      "#73A857",
      "#B246F0 ",
      "#4691F0 ",
      "#F1C513",
      "#13F121",
      "#f97171",
      "#F12B13",
      "#F08146",
      "#1338F1",
      "blue",
      "red",
      "yellow",
      "green",
      "pink",
      "black",
      "gray",
      "magenta",
    ];

    var color = colors[Math.floor(Math.random() * colors.length)];
    this.setState({
      color: color,
    });
  }

  render() {
    const styleOj = {
      background: this.state.color,
      color: this.state.color,
    };

    const colorButtons = {
      color: this.state.colorIcons,
      background: this.state.color,
    };

    return (
      <div
        className="container-fluid  row align-items-center vh-100 justify-content-center texto"
        style={styleOj}
      >
        <div className="col-sm-6 bg-white" id="quote-box">
          <>
            <em>
              <h2 id="text" className="my-4 mx-4">
                {this.state.quote}
              </h2>
            </em>
            <div className="d-flex justify-content-between">
              <p></p>
              <p id="author">-{this.state.author}</p>
            </div>
            {/* <Botones /> */}
            <div className="d-flex justify-content-between">
              <div>
                <a
                  id="tweet-quote"
                  href={`https://twitter.com/intent/tweet?text=${'"'}${
                    this.state.quote
                  }${'"'} ${this.state.author}`}
                  target="_blank"
                  title="Post a tweet!"
                >
                  {" "}
                  <button
                    type="button"
                    className="btn mx-2 my-3"
                    style={colorButtons}
                  >
                    <i className="fab fa-twitter"></i>
                  </button>
                </a>
                {/* <button
                  type="button"
                  className="btn  mx-2 my-2"
                  style={colorButtons}
                >
                  <i className="fab fa-tumblr"></i>
                </button> */}
              </div>
              <div id="new-quote">
                <button
                  onClick={this.componentDidMount}
                  type="button"
                  className="btn  my-3 rigth-0 "
                  style={colorButtons}
                  id="new-quote"
                >
                  New qoute
                </button>
              </div>
            </div>
          </>
        </div>
      </div>
    );
  }
}

export default ContainerPhrases;
