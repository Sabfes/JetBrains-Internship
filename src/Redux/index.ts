import {createStore} from "redux";
import {rootReducer} from "./reducers";

export const store = createStore(rootReducer)

store.subscribe(() => {
    localStorage["data"] = JSON.stringify(store.getState().todos)
})


