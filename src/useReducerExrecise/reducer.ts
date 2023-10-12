import { itemType } from "./itemsList";

type actionType = { type: string; item: itemType };
export type CartType = { amount: number; item: itemType };

const reducer = (currentShope: CartType[], action: actionType) => {
  if (action.type === "Add") {
    const alreadyInCart = currentShope.find(
      (i) => i.item.id === action.item.id
    );
    !alreadyInCart
      ? currentShope.push({ amount: 1, item: action.item })
      : alreadyInCart.amount++;
  }

  if (action.type === "+") {
    currentShope.find((i) => {
      if (i.item.id === action.item.id) i.amount++;
    });
  }
  if (action.type === "-") {
    const itemToMinus = currentShope.findIndex(
      (i) => i.item.id === action.item.id
    );
    currentShope[itemToMinus].amount === 1
      ? currentShope.splice(itemToMinus, 1)
      : currentShope[itemToMinus].amount--;
  }
  if (action.type === "delete") {
    const itemToDelete = currentShope.findIndex(
      (i) => i.item.id === action.item.id
    );
    currentShope.splice(itemToDelete, 1);
  }
  return [...currentShope];
};
export default reducer;
