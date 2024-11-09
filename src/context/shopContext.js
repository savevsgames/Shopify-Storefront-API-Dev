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
    isLoading: true,
  };

  // ComponentDidMount is a lifecycle method that runs after the first render
  // It means the component has been mounted and is ready to go
  componentDidMount() {
    const checkoutId = localStorage.getItem("checkout_id");
    if (checkoutId) {
      this.fetchCheckout(checkoutId).then(() => {
        this.setState({ isLoading: false });
      });
    } else {
      this.createCheckout().then(() => {
        this.setState({ isLoading: false });
      });
    }
  }

  //  We create a checkout and allow the user to store the cart in their local storage
  createCheckout = async () => {
    const checkout = await client.checkout.create();
    // checkout object has id property => save it to local storage as key-value pair
    localStorage.setItem("checkout_id", checkout.id);
    this.setState({ checkout: checkout });
    console.log(checkout);
  };

  fetchCheckout = async (checkoutId) => {
    // We fetch the checkout using the checkout id
    try {
      const checkout = await client.checkout.fetch(checkoutId);
      this.setState({ checkout: checkout });
      console.log(checkout);
    } catch (error) {
      console.error({ message: "Error fetching checkout" }, error);
    }
  };

  addItemToCheckout = async (variantId, quantity) => {
    const lineItemsToAdd = [
      {
        variantId: variantId,
        quantity: parseInt(quantity, 10),
        // customAttributes: [{ key: "MyKey", value: "MyValue" }], - option to add custom attributes
      },
    ];
    // Now we can create a checkout to update the state with the new line items
    // checkout.addLineItems is a prebuilt Shopify checkout method that takes the checkout id and line items to add
    // Since we want the THIS checkout we grab its id from state
    const checkout = await client.checkout.addLineItems(
      this.state.checkout.id,
      lineItemsToAdd
    );
    // We update the state with the new checkout
    this.setState({ checkout: checkout });
    // Open the cart when a new Line Item is added
    this.openCart();
  };

  removeLineItem = async (lineItemIdsToRemove) => {
    const checkout = await client.checkout.removeLineItems(
      this.state.checkout.id,
      lineItemIdsToRemove
    );
    this.setState({ checkout: checkout });
    if (checkout.lineItems.length === 0) {
      // Close the cart when all Line Items are removed
      this.closeCart();
    }
  };

  fetchAllProducts = async () => {
    const products = await client.product.fetchAll();
    this.setState({ products: products }); // Array of all product objects
    console.log(products);
  };

  fetchProductWithHandle = async (handle) => {
    const product = await client.product.fetchByHandle(handle);
    this.setState({ product: product }); // Single product object
    console.log(product);
  };

  closeCart = () => {
    this.setState({ isCartOpen: false });
  };

  openCart = () => {
    this.setState({ isCartOpen: true });
  };

  closeMenu = () => {
    this.setState({ isMenuOpen: false });
  };

  openMenu = () => {
    this.setState({ isMenuOpen: true });
  };

  render() {
    return (
      <ShopContext.Provider
        value={{
          ...this.state,
          addItemToCheckout: this.addItemToCheckout,
          removeLineItem: this.removeLineItem,
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
