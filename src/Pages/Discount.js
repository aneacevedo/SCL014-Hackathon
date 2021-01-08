import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import WelcomeDiscount from "../Components/Discount/WelcomeDiscount";
import DiscountLvl1 from '../Components/Discount/DiscountLvl1';
import DiscountAdidas from '../Components/Discount/DiscountAdidas';
import DiscountMc from '../Components/Discount/DiscountMc';
import DiscountHomy from '../Components/Discount/DiscountHomy';


const Discount = () => {
  return (
    <div>
      <WelcomeDiscount/>
      <DiscountLvl1/>
      <DiscountAdidas/>
      <DiscountMc/>
      <DiscountHomy/>
    </div>
  );
};

export default Discount;
