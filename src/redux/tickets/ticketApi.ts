import { remove } from "./ticketSlice";

export const checkIsExpired = (delay: number) => {
  return async (dispatch: any) => {
    if (delay != null || !isNaN(delay)) {
      const currentTime = Date.now();
      const savedDate = currentTime + delay;
      const delta = savedDate - currentTime;

      // Did it reached the end ?
      if (delta > delay) {
        dispatch(remove());
        console.log("ticket timeout");
      }
    }
  };
};
