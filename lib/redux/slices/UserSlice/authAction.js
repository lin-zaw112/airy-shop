import { UiSlice } from "@/lib/redux";

export const apvroved = () => {
  return async (dispatch) => {
    dispatch(
      UiSlice.actions.showNotification({
        status: "pending",
        title: "Sending...",
        message: "Logging in to your account",
      }),
    );
  };
};
