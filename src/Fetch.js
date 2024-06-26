import style from "./Fetch.module.css";
import { useState, useEffect } from "react";
import Spinner from "./Spinner";

export default function Fetch() {
  const [data, setData] = useState({});
  const [isLoading, setIsLoading] = useState(false);

  const getData = async () => {
    try {
      setIsLoading(true);

      const res = await fetch("https://swapi.dev/api/people/4");
      const fetchData = await res.json();
      console.log(fetchData);
      setData(fetchData);
    } catch (err) {
      console.log(err);
    } finally {
      setTimeout(() => setIsLoading(false), 1000);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  let arr = Object.entries(data);
  console.log(arr);

  return (
    <>
      <div className={style.fetch}>Fetch</div>
      {isLoading ? (
        <Spinner />
      ) : (
        arr.map((e, i) => (
          <div key={i}>
            {e[0].toUpperCase()}
            {": "}
            {e[1]}
          </div>
        ))
      )}
    </>
  );
}
