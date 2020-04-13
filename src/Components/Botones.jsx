import React from "react";
// import axios from "axios";

class Botones extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      color: "red",
      colorIcons: "white",
    };
  }

  render() {
    // const styleOj = {
    //   background: this.state.color,
    //   color: this.state.color,
    // };

    const colorButtons = {
      color: this.state.colorIcons,
      background: this.state.color,
    };

    return (
      <div className="d-flex justify-content-between">
        <div>
          <button type="button" className="btn " style={colorButtons}>
            <i className="fab fa-twitter"></i>
          </button>
          <button type="button" className="btn  mx-2 my-2" style={colorButtons}>
            <i className="fab fa-tumblr"></i>
          </button>
        </div>
        <div id="new-quote">
          <button
            // onClick={this.componentDidMount}
            type="button"
            className="btn  my-2rigth-0"
            style={colorButtons}
          >
            New qoute
          </button>
        </div>
      </div>
    );
  }
}

export default Botones;
