import { useState } from "react"; // Hook
import logo from "./logo.svg";
import style from "./App.module.css";
import Page from "./Page";
import Form from "./Form";
import Fetch from "./Fetch";

function App() {
  const [count, setCount] = useState(0);

  const handleAdd = () => {
    setCount(count + 1);
    setCount(count + 1); // save the same count, means will not add 1 more
    // setCount((x) => x + 1); // save added 1 more by function
  };
  const handleSubtract = () => {
    setCount((x) => x - 1); // save added 1 more by function
  };

  return (
    <div className={style.App}>
      <header className={style["App-header"]}>
        <button
          onClick={handleAdd}
          style={{
            backgroundColor: "gray",
            fontSize: "6em",
            width: "1.2em",
            height: "100%",
            padding: "0",
            borderRadius: "50%",
            boxShadow: "2px 2px 0px 1px black",
          }}
        >
          +
        </button>
        <button
          onClick={handleSubtract}
          style={{
            backgroundColor: "gray",
            fontSize: "6em",
            width: "1.2em",
            height: "100%",
            padding: "0",
            borderRadius: "50%",
            boxShadow: "2px 2px 0px 1px black",
          }}
        >
          -
        </button>
        <p>{count}</p>
        <div className={style.text}>FONT SIZE 2EM</div>
        <Page />
        <Form />
        <Fetch />
      </header>
    </div>
  );
}

export default App;
