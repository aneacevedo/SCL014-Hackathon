import React from "react";
import Geolocation from "../Components/Form/Geolocation";
import ModalThanks from "../Components/Form/modalThanks";
import Preferences from "../Components/Form/Preferences";
import Age from "../Components/Form/Age";
import Gender from "../Components/Form/Gender";
import Competitive from '../Components/Form/Competitive'
import Time from '../Components/Form/Time'
import { BrowserRouter as Router, Switch, Route} from "react-router-dom";
import HomePage from './HomePage';
import Categories from './Categories'
import ModalAlmostFinish from "../Components/Form/ModalAlmostFinish";

const FormPage = () => {
  return (
    <div>
      <Router>
      <Switch>
          <Route path="/" exact>
            <HomePage />
          </Route>
        </Switch>
        <Switch>
          <Route path="/form1" exact>
            <Age />
          </Route>
        </Switch>
        <Switch>
          <Route path="/form2" exact>
            <Gender />
          </Route>
        </Switch>
        <Switch>
          <Route path="/form3" exact>
            <Preferences />
          </Route>
        </Switch>
        <Switch>
          <Route path="/form4" exact>
            <ModalAlmostFinish />
          </Route>
        </Switch>
        <Switch>
          <Route path="/form5" exact>
            <Time />
          </Route>
        </Switch>
        <Switch>
          <Route path="/form6" exact>
            <Competitive />
          </Route>
        </Switch>
        <Switch>
          <Route path="/form7" exact>
            <Geolocation />
          </Route>
        </Switch>
        <Switch>
          <Route path="/form8" exact>
            <ModalThanks/>
          </Route>
        </Switch>
        <Switch>
          <Route path="/gana" exact>
            <Categories/>
          </Route>
        </Switch>
      </Router>
    </div>
  );
};

export default FormPage;
