import { useEffect, useState } from "react";

let globalState = {};
let listeners = []; // components subscribes to useStore
let actions = {};

export const useStore = (shouldListen = true) => {
  const setState = useState(globalState)[1]; //generate new one for each `useStore`

  const dispatch = (actionIdentifier, payload) => {
    if (!actions.hasOwnProperty(actionIdentifier)) return;

    const newState = actions[actionIdentifier](globalState, payload);
    globalState = { ...globalState, ...newState };

    for (const listener of listeners) {
      listener(globalState);
    }
  };

  useEffect(() => {
    if (shouldListen) listeners.push(setState);

    return () => {
      if (shouldListen) listeners = listeners.filter((li) => li !== setState);
    };
  }, [globalState, dispatch]);

  return [globalState, dispatch];
};

export const initStore = (initialActions, initialState) => {
  if (initialState) globalState = { ...globalState, ...initialState };

  actions = { ...actions, ...initialActions };
};
