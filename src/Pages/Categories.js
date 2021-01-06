import React from "react";
import MisionPoints from "../Components/Categories/MisionPoint";
import InfoPointDiscount from "../Components/Categories/infoPointDiscount";
import NewMacher from "../Components/Categories/NewMacher";
import TrueMacher from "../Components/Categories/TrueMacher";
import MachLover from "../Components/Categories/MachLover";
import Levels from "../Components/Categories/Levels";
import Misiones from "./Misiones";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import ProgressBar from "../Components/Categories/ProgressBar";
import Information from "./Information";

const Categories = () => {
  return (
    <div>
      <ProgressBar />
      <MisionPoints />
      <Levels />
      <Router>
        <InfoPointDiscount />
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
      </Router>
    </div>
  );
};

export default Categories;
