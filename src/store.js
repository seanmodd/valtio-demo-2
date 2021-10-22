import React from "react";
import { proxy, useProxy } from "valtio";
import { devtools } from "valtio/utils";
import axios from "redaxios";

const state = proxy({ count: 0, user: {} });
devtools(state, "Store");

const actions = {
  increment: () => state.count++,
  fetchUser: async () => {
    try {
      const { data } = await axios.get("https://randomuser.me/api");
      state.user = data;
    } catch (e) {
      console.log("oops");
    }
  }
};

const connect = (Component) => (props) => {
  const store = useProxy(state, { sync: true });
  return <Component {...props} store={store} actions={actions} />;
};

export default connect;
