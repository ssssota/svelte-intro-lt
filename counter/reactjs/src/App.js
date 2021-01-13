import { useState } from "react";
import StyledButton from "./components/StyledButton";

function App() {
  const [count, setCount] = useState(0);
  return (
    <div className="App">
      <h1>Counter {count}</h1>
      <button onClick={() => setCount(0)}>RESET</button>
      <StyledButton onClick={() => setCount(count + 1)}>+1</StyledButton>
      <StyledButton onClick={() => setCount(count - 1)}>-1</StyledButton>
    </div>
  );
}

export default App;
