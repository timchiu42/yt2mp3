import { useDispatch, useSelector } from "react-redux";
import { setIsSending, setOutputs } from "../redux/outputUrl";
import { clearUrl } from "../redux/inputUrl";

import { config } from "../config/config.js";
import axios from "axios";

function App() {
  function sendToServer() {
    dispatch(setIsSending(true));
    axios
      .post(`${config.SERVER}`, { urls: inputUrls })
      .then((response) => {
        dispatch(setIsSending(false));
        dispatch(clearUrl());
        dispatch(setOutputs(response.data));
      })
      .catch((err) => {
        dispatch(setIsSending(false));
        dispatch(clearUrl());
        console.error(err);
        alert("Error");
      });
  }
  const inputUrls = useSelector((state) => state.inputUrl.urls);
  const { outputs, isSending } = useSelector((state) => state.outputUrl);
  const dispatch = useDispatch();

  let button = "";
  if (!isSending) {
    button = (
      <button
        onClick={() => {
          sendToServer(inputUrls);
        }}
      >
        {"Send"}
      </button>
    );
  } else {
    button = <button>{"Sending..."}</button>;
  }
  if (inputUrls.length === 0) {
    button = "";
  }

  let results = (
    <div>
      <ol>
        {outputs.map((url, i) => {
          return (
            <li key={i}>
              <a target="_blank" href={url}>
                {url}
              </a>
            </li>
          );
        })}
      </ol>
    </div>
  );

  let refresh = "";
  if (outputs.length !== 0) {
    refresh = <a href="">Convert new MP3</a>;
  }

  return (
    <div>
      {button}
      {results}
      {refresh}
    </div>
  );
}

export default App;
