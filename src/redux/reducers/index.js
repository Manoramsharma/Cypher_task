import { combineReducers } from "redux";
import sideBarReducer from "./sideBarReducer"
import syncIndicatorReducer from "./syncIndicatorReducer"
import importModalReducer from "./importModalReducer";
import walletReducer from "./walletReducer";
import syncJobReducer from "./syncJobReducer";
import transactionReducer from "./transactionReducer";

const reducers = combineReducers({
    sideBar: sideBarReducer,
    inSync: syncIndicatorReducer,
    isModalOpen: importModalReducer,
    allWallets: walletReducer,
    jobs: syncJobReducer,
    transactions: transactionReducer
})

export default reducers;