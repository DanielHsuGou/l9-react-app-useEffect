import { useState } from "react"; // Hook
import style from "./Form.module.css";

export default function Form() {
  const [value, setValue] = useState("");
  const [submiValue, setSubmitValue] = useState("");

  function handleChange(event) {
    setValue(event.target.value);
  }

  function handleSubmit(event) {
    event.preventDefault();
    setSubmitValue(value);
  }

  return (
    <form onSubmit={handleSubmit}>
      <input id="input" type="text" value={value} onChange={handleChange} />
      <input type="submit" />
      {submiValue && <p>{submiValue}</p>}
    </form>
  );
}
