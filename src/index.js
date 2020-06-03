import React, { useContext } from "react";
import ReactDOM from "react-dom";
import { UserProvider } from "./UserProvider";
import { ThemeProvider } from "./ThemeProvider";
import { MenusProvider, MenusContext } from "./MenuProvider";

import "./styles.css";
function ChildWithoutContextUsage() {
  console.log("Child render");
  return <div>Menus Child without useContext</div>;
}

function ChildWithContextUsage() {
  console.log("Child with context render");
  const { menu } = useContext(MenusContext);
  return <div>Menus Child with useContext</div>;
}

function App() {
  return (
    <div className="App">
      <h1>Hello CodeSandbox</h1>
      <h2>Start editing to see some magic happen!</h2>
      <UserProvider>
        <ThemeProvider>
          <MenusProvider>
            <ChildWithoutContextUsage />
            <ChildWithContextUsage />
          </MenusProvider>
        </ThemeProvider>
      </UserProvider>
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
