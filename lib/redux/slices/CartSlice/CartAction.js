import { UiSlice, CartSlice } from "@/lib/redux";

export const sendCartData = (cartData) => {
  return async (dispatch) => {
    dispatch(
      UiSlice.actions.showNotification({
        status: "pending",
        title: "Sending...",
        message: "Sending cart data !",
      }),
    );
    try {
      const res = await fetch("https://dummyjson.com/carts/add", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          userId: 1,
          products: cartData.map(({ id, quantity }) => {
            return { id, quantity };
          }),
        }),
      });

      if (!res.ok) {
        throw new Error("Sending cart data failed ! ");
      }
      dispatch(
        UiSlice.actions.showNotification({
          status: "success",
          title: "Success ! ",
          message: "Sent cart data successfully !",
        }),
      );
      setTimeout(() => {
        dispatch(UiSlice.actions.showNotification(null));
        dispatch(CartSlice.actions.reSetCart());
      }, 2000);
    } catch (err) {
      dispatch(
        UiSlice.actions.showNotification({
          status: `Error`,
          title: `Error (${err.status}) ! `,
          message: `${err.message} (failed)`,
        }),
      );
    }
  };
};

export const addToTheCart = (item) => {
  return async (dispatch) => {
    dispatch(CartSlice.actions.addToCart(item));
    console.log(item);
    dispatch(
      UiSlice.actions.showNotification({
        status: "success",
        title: item.title,
        message: "Item was successfully Added !",
      }),
    );
    setTimeout(() => {
      dispatch(UiSlice.actions.showNotification(null));
    }, 3000);
  };
};
