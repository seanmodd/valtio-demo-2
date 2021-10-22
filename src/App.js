import React from "react";
import connect from "./store";

export const App = ({ store, actions }) => {
  return (
    <div>
      <button onClick={actions.increment}>Clicked {store.count} times</button>
      <button onClick={actions.fetchUser}>fetch user</button>
      <pre>
        <code>{JSON.stringify(store.user, null, 2)}</code>
      </pre>
    </div>
  );
};

export default connect(App);
