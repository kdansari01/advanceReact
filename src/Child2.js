import { memo } from "react";
import { isEqual } from "lodash";

const Child2 = ({ count, inc }) => {
  console.log("child2");

  return (
    <>
      <div onClick={inc}>Hello Child {count.count}</div>
    </>
  );
};
const nonFuncProps = (props) => {
  return Object.keys(props).reduce((acc, curr) => {
    if (typeof props[curr] === "function") return acc;
    acc[curr] = props[curr];
    return acc;
  }, {});
};

export default memo(Child2, (prev, next) => {
  const nextData = nonFuncProps(next);
  const prevData = nonFuncProps(prev);
  return isEqual(prevData, nextData);
});

// export default memo(Child2, (prev, next) => {
//   console.log("child2", { prev, next });
//   if (next.count === prev.count) return true;
//   if (next.count % 2 === 0) return false;
//   return true;
// });
