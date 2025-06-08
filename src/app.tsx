import React, { useState } from "react";
import TodoInput from "./comps/todo";

function App() {
  // const [count, setCount] = useState(0);
  const [list, setList] = useState<string[]>([]);
  return (
    <div>
      {/* <h1>{count}</h1>
      <button onClick={() => setCount(count + 1)}>增加</button> */}
      <TodoInput onAdd={(text) => setList([...list, text])} />
      <ul>
        {list.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  );
}

export default <App />;
