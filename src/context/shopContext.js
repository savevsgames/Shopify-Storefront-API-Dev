import React, { Component } from "react";
// import dotenv from "dotenv";

// This can be done with a function component as well
// but it is easier to show state changes with a class component
import Client from "shopify-buy";

// dotenv.config();

const ShopContext = React.createContext();

const client = Client.buildClient({
  domain: process.env.REACT_APP_SHOPIFY_STOREFRONT_URL,
  storefrontAccessToken: process.env.REACT_APP_SHOPIFY_STOREFRONT_ACCESS_TOKEN,
});

console.log(process.env.REACT_APP_SHOPIFY_STOREFRONT_URL);
console.log(process.env.REACT_APP_SHOPIFY_STOREFRONT_ACCESS_TOKEN);

export class ShopProvider extends Component {
  // We create a state object
  state = {
    products: [],
    product: {},
    checkout: {},
    isCartOpen: false,
    isMenuOpen: false,
  };

  // ComponentDidMount is a lifecycle method that runs after the first render
  // It means the component has been mounted and is ready to go
  componentDidMount() {
    this.createCheckout();
    // this.fetchAllProducts();
  }

  //  We create a checkout and allow the user to store the cart in their local storage
  createCheckout = async () => {
    const checkout = client.checkout.create();
    localStorage.setItem("checkout_id", checkout.id);
    this.setState({ checkout: checkout });
    console.log(checkout);
  };

  fetchCheckout = async () => {};

  addItemToCheckout = async () => {};

  removeLineItem = async (LineItemIdsToRemove) => {};

  fetchAllProducts = async () => {
    const products = client.product.fetchAll();
    this.setState({ products: products }); // Array of all product objects
    console.log(products);
  };

  fetchProductWithHandle = async (handle) => {
    const product = client.product.fetchByHandle(handle);
    this.setState({ product: product }); // Single product object
    console.log(product);
  };

  closeCart = () => {};

  openCart = () => {};

  closeMenu = () => {};

  openMenu = () => {};

  render() {
    return (
      <ShopContext.Provider
        value={{
          ...this.state,
          createCheckout: this.createCheckout,
          fetchAllProducts: this.fetchAllProducts,
          fetchProductWithHandle: this.fetchProductWithHandle,
          openCart: this.openCart,
          closeCart: this.closeCart,
          openMenu: this.openMenu,
          closeMenu: this.closeMenu,
        }}
      >
        {this.props.children}
      </ShopContext.Provider>
    );
  }
}

const ShopConsumer = ShopContext.Consumer;

export { ShopConsumer, ShopContext };

export default ShopProvider;
