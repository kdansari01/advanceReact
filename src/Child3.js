import { memo } from "react";

const Child3 = () => {
  console.log("child3");

  return (
    <>
      <div>Hello Child3</div>
    </>
  );
};

export default memo(Child3);
