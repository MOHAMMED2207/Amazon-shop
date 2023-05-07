  export const initialState = {
  basket: [],
};
export const basketTotal = (basket) =>
  basket?.reduce((amount, item) => item.price + amount, 0);

const reduce = (state, action) => {
  switch (action.type) {
    case "ADD_TO_BASKET":   
      return {
        ...state,
        basket: [...state.basket, action.item],
      };
    case "REMOVE_FROM_CART":
      const index = state.basket.findIndex(
        (basketItem) => basketItem.id === action.id
      );
      let newBasket = [...state.basket];
      if (index >= 0) {
        newBasket.splice(index, 1);
      } else {
        alert("can't remove");
      }
      return {
          basket: newBasket,
      };
    default:
      return state;
  }
};
export default reduce;
