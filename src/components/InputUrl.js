import { useDispatch, useSelector } from "react-redux";
import { editInputUrl, addUrl, removeUrl } from "../redux/inputUrl";

function App() {
  const { inputUrl, urls } = useSelector((state) => state.inputUrl);
  const dispatch = useDispatch();
  return (
    <div>
      <input
        type="text"
        value={inputUrl}
        onChange={(e) => {
          dispatch(editInputUrl(e.target.value));
        }}
      />
      <button
        onClick={() => {
          dispatch(addUrl());
        }}
      >
        {"Add"}
      </button>
      <ol>
        {urls.map((e, i) => {
          return (
            <li key={i}>
              {e}
              <div
                onClick={() => {
                  dispatch(removeUrl(i));
                }}
              >
                {"[remove]"}
              </div>
            </li>
          );
        })}
      </ol>
    </div>
  );
}

export default App;
