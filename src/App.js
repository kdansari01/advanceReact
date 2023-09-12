import { useCallback, useMemo, useState } from "react";
import Child1 from "./Child1";
import Child2 from "./Child2";
import "./styles.css";

export default function App() {
  const [count, setCount] = useState(0);
  const [childCount, setChildCount] = useState(0);

  const handleInc = () => setChildCount((prev) => prev + 1);
  const memoizedInc = useCallback(handleInc, []);

  const memoizedData = useMemo(() => {
    function test() {
      return [1, 2, Math.random()];
    }
    const data = test();
    return data;
  }, []);

  console.log(memoizedData);

  const childCountObj = { count: childCount };

  return (
    <div className="App">
      {count}
      <button onClick={() => setCount((prev) => prev + 1)}>Inc</button>
      <Child1 count={childCountObj} inc={handleInc} />
      <Child2 count={childCountObj} inc={handleInc} />
    </div>
  );
}
