import React from "react";
import ReactDOM from "react-dom";

import "./styles.css";

function App() {
  return (
    <div className="App">
      <h1>My Wallet</h1>

      <AddButton />

      <WatchDataButton />
    </div>
  );
}

class AddButton extends React.Component {
  render() {
    return (
      <div class="image-upload">
        <label for="file-input">
          <img
            alt="plus_image_here"
            src="https://upload.wikimedia.org/wikipedia/commons/b/b9/Ambox_plus.svg"
          />
        </label>
        <input id="file-input" type="file" />
      </div>
    );
  }
}

class WatchDataButton extends React.Component {
  render() {
    return (
      <div>
        <button
          alt="watch_data_image_here"
          onClick={function() {
            alert("watch data");
          }}
        >
          watch data
        </button>
      </div>
    );
  }
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
