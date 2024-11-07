import React, { Component } from "react";
// This can be done with a function component as well
// but it is easier to show state changes with a class component
import Client from "shopify-buy";

const ShopContext = React.createContext();

const client = Client.buildClient({
  domain: "process.env.SHOPIFY_STOREFRONT_URL",
  storefrontAccessToken: "process.env.SHOPIFY_STOREFRONT_ACCESS_TOKEN",
});

export class ShopProvider extends Component {
  // We create a state object
  state = {
    products: [],
    product: {},
    checkout: {},
    isCartOpen: false,
    isMenuOpen: false,
  };

  createCheckout = async () => {};

  fetchCheckout = async () => {};

  addItemToCheckout = async () => {};

  removeLineItem = async (LineItemIdsToRemove) => {};

  fetchAllProducts = async () => {
    client.product.fetchAll().then((products) => {
      // Do something with the products
      console.log(products);
    });
  };

  fetchProductWithHandle = async (handle) => {};

  closeCart = () => {};

  openCart = () => {};

  closeMenu = () => {};

  openMenu = () => {};

  render() {
    return <ShopContext.Provider>{this.props.children}</ShopContext.Provider>;
  }
}

const ShopConsumer = ShopContext.Consumer;

export { ShopConsumer, ShopContext };
