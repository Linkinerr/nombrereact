import { useState } from "react";

export const Home = () => {
  const [counter, setCounter] = useState(0);

  const sumar = () => {
    setCounter(counter + 1);
  };
  return (
    <div>
      <h4>{counter}</h4>
      <button onClick={sumar}>Sumar</button>
    </div>
  );
};
export default Home;
