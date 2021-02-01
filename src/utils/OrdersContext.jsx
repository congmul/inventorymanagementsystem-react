import React from "react";

const OrdersContext = React.createContext([{
  year: "",
  month: "",
  product: "",
  condition: "",
  code: "",
  date: "",
  buyer: "",
  description: "",
  price:0,
  selling:0,
  return: false,
  shipped: true,
}]);

export default OrdersContext;