import { Home, Error, Downloads } from "./pages";
import { Switch, Route } from "react-router-dom";
// const ContainerVariants = {
//   hidden: { opacity: 0 },
//   visible: { opacity: 1, transition: {type:"spring",stiffness:300} },
// };

function App() {
  return (
    <Switch>
      <Route exact path="/">
        <Home></Home>
      </Route>
      <Route path="/downloads">
        <Downloads></Downloads>
      </Route>
      <Route path="*">
        <Error></Error>
      </Route>
    </Switch>
  );
}

export default App;
