import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import "bootstrap/dist/css/bootstrap.min.css";
import $ from "jquery";
import Popper from "popper.js";
import "bootstrap/dist/js/bootstrap.bundle.min";

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);

// fetch(
//   "https://gist.githubusercontent.com/camperbot/5a022b72e96c4c9585c32bf6a75f62d9/raw/e3c6895ce42069f0ee7e991229064f167fe8ccdc/quotes.json"
// )
//   .then((response) => {
//     return response.json;
//     console.log(response);
//   })
//   .then((quotes) => {
//     this.setState({ quotes: quotes });
//     console.log(quotes);
//   });

// var colores = [
//   "blue",
//   "red",
//   "yellow",
//   "green",
//   "pink",
//   "black",
//   "gray",
//   "magenta",
// ];

// return (
//   <div
//     className="container-fluid  row align-items-center vh-100 justify-content-center texto"
//     style={styleOj}
//   >
//     <div className="col-sm-6 bg-white" id="quote-box">
//       {this.state.phrases.map((frases, index) => {
//         return (
//           <>
//             <em>
//               <h2 id="text" className="my-4 mx-4" key={index.quote}>
//                 {frases.quote}
//               </h2>
//             </em>
//             <div
//               className="d-flex justify-content-between"
//               key={index.author}
//             >
//               <p></p>
//               <p id="author">-{frases.author}</p>
//             </div>
//             {/* <Botones /> */}
//             <div className="d-flex justify-content-between">
//               <div>
//                 <button type="button" className="btn " style={colorButtons}>
//                   <i className="fab fa-twitter"></i>
//                 </button>
//                 <button
//                   type="button"
//                   className="btn  mx-2 my-2"
//                   style={colorButtons}
//                 >
//                   <i className="fab fa-tumblr"></i>
//                 </button>
//               </div>
//               <div id="new-quote">
//                 <button
//                   onClick={this.componentDidMount}
//                   type="button"
//                   className="btn  my-2rigth-0"
//                   style={colorButtons}
//                 >
//                   New qoute
//                 </button>
//               </div>
//             </div>
//           </>
//         );
//       })}
//     </div>
//   </div>
// );

// _handlePhrase = (e) => {
//   this.setState({
//     color: e.target.value,
//   });
// };
