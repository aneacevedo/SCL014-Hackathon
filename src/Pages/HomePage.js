import React from "react";
import Carousel from '../Components/Home/Carousel/carousell';
import Saldo from "../Components/Home/Saldo";
import Dashboard from "../Components/Home/Dashboard";
import MenuComponent from '../Components/Home/MenuComponent'; 
import ModalWelcome from '../Components/Form/modalWelcome';
import IconMachelo from '../Components/Home/iconMachelo';

const HomePage = () => {
  return (
    <div>
      <ModalWelcome/>
      <Saldo/>
      <Carousel/>
      <Dashboard/>
      <MenuComponent/>
      <IconMachelo/>
    </div>
  );
};

export default HomePage;
