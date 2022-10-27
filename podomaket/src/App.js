import { useEffect } from "react";
import { useDispatch } from "react-redux";
import Router from "../src/shared/Router";
import { localGet } from "../src/localStorage";
import { setToken } from "../src/features/userSlice";

function App() {
  return (
    <div>
      <Router />
    </div>
  );
}

export default App;
