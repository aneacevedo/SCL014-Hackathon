import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import FormPage from "./Pages/FormPage";
import HomePage from "./Pages/HomePage";
import Categories from "./Pages/Categories";
import Misiones from "./Pages/Misiones";
import NewMacher from "./Components/Categories/NewMacher";
import TrueMacher from "./Components/Categories/TrueMacher";
import MachLover from "./Components/Categories/MachLover";
import CabifyMission from "./Components/Missions/CabifyMission";
import Information from "./Pages/Information";
import Discount from "./Pages/Discount";
import MisionFriend from "./Components/Missions/MisionFriend";
import Points from "./Components/Categories/Points";
import Gift from "./Pages/Gift";
import GiftNewMacher from "./Pages/GiftNewMacher";
import QRNew from "./Pages/QRNew";


function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/" exact>
            <HomePage />
          </Route>
        </Switch>
        <Switch>
          <Route path="/form1" exact>
            <FormPage />
          </Route>
        </Switch>
        <Switch>
          <Route path="/gana" exact>
            <Categories />
          </Route>
        </Switch>
        <Switch>
          <Route path="/misiones" exact>
            <Misiones />
          </Route>
        </Switch>
        <Switch>
          <Route path="/gana/newmacher" exact>
            <NewMacher />
          </Route>
        </Switch>
        <Switch>
          <Route path="/gana/truemacher" exact>
            <TrueMacher />
          </Route>
        </Switch>
        <Switch>
          <Route path="/gana/machlover" exact>
            <MachLover />
          </Route>
        </Switch>
        <Switch>
          <Route path="/abrircaja" exact>
            <Gift />
          </Route>
        </Switch>
        <Switch>
          <Route path="/regalodbs" exact>
            <GiftNewMacher />
          </Route>
        </Switch>
        <Switch>
          <Route path="/qr" exact>
            <QRNew />
          </Route>
        </Switch>
        <Switch>
          <Route path="/misiones/cabify" exact>
            <CabifyMission />
          </Route>
        </Switch>
        <Switch>
          <Route path="/informacion" exact>
            <Information />
          </Route>
        </Switch>
        <Switch>
          <Route path="/misionamigo" exact>
            <MisionFriend />
          </Route>
        </Switch>
        <Switch>
          <Route path="/descuentos" exact>
            <Discount />
          </Route>
        </Switch>
        <Switch>
          <Route path="/puntos" exact>
           <Points />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
