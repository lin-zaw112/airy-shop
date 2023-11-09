import { UiSlice } from "@/lib/redux";

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
      const res = await fetch("https://dummyproductsapi.com/carts/add", {
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
      console.log(await res.json());
      dispatch(
        UiSlice.actions.showNotification({
          status: "success",
          title: "Success ! ",
          message: "Sent cart data successfully !",
        }),
      );
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
