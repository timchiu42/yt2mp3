import { useState } from "react";
import { config } from "../config/config.js";
import axios from "axios";
import { createSlice, configureStore } from "@reduxjs/toolkit";
import { connect, Provider } from "react-redux";

const counterSlice = createSlice({
  name: "namelist",
  initialState: {
    namelist: [
      { name: "tim", score: 0 },
      { name: "tom", score: 10 },
      { name: "cat", score: 20 },
    ],
  },
  reducers: {
    incremented: (state) => {
      state.namelist.forEach((e) => {
        e.score += 10;
      });
    },
    decremented: (state) => {
      state.namelist.forEach((e) => {
        e.score -= 10;
      });
    },
  },
});

const store = configureStore({
  reducer: counterSlice.reducer,
});

console.log(store);

export const { incremented, decremented } = counterSlice.actions;

// Can still subscribe to the store
store.subscribe();

// Still pass action objects to `dispatch`, but they're created for us
store.dispatch(incremented());
// {value: 1}
store.dispatch(incremented());
// {value: 2}
store.dispatch(decremented());
// {value: 1}

function Submit({ url, result, setResult }) {
  function sendUrl() {
    let urls = [
      "https://www.youtube.com/watch?v=V0XUd8f2pz8&ab_channel=AngelicMusicWorld",
      "https://www.youtube.com/watch?v=S3cHTNEsCcY",
      "https://www.youtube.com/watch?v=m78lJuzftcc&ab_channel=%E6%B7%BB%E7%BF%BC%E9%9F%B3%E6%A8%82TEAMEARMUSIC",
      url,
    ];
    axios
      .post(config.SERVER, { urls })
      .then((response) => {
        let data = response.data;
        setResult(data);
      })
      .catch((err) => {
        console.error(err);
      });
  }

  return (
    <div>
      <button
        onClick={() => {
          sendUrl(url);
        }}
      >
        Submit
      </button>
    </div>
  );
}

function Main() {
  const [url, setUrl] = useState("");
  const [result, setResult] = useState([]);

  return (
    <div>
      <h5>Youtube Link:</h5>
      <input
        type="text"
        value={url}
        onChange={(e) => [setUrl(e.target.value)]}
      />
      <Submit url={url} result={result} setResult={setResult} />
      <ol>
        {result.map((e, i) => (
          <li key={i}>
            <a target="_blank" rel="noreferrer" href={e}>
              {e}
            </a>
          </li>
        ))}
      </ol>
    </div>
  );
}

export default Main;
