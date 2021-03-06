import axios from "axios";
import { useEffect } from "react";

const postData = (url, sendData, dispatch) => {
  console.log(sendData);
  axios
    .post(url, sendData)
    .then((res) => {
      res.data.status
        ? dispatch({ type: "fetchCompleted", payload: res.data })
        : dispatch({ type: "NOT_REGISTERED", payload: res.data });
    })
    .catch((err) => {
      dispatch({ type: "err" });
    });
};

export const useFetch = (state, dispatch) => {
  useEffect(() => {
    if (state.loading) {
      postData(state.url, state.sendData, dispatch);
    }
    return () => {
      console.log("cleanup post create");
    };
  }, [state.loading]);
};
