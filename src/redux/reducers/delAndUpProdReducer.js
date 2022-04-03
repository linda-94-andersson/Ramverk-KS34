// import { ActionTypes } from "../constans/action-types";

// const initialState = {
//     upProdData: {},
//     delProd: []
// }

// const delAndUpProdReducer = (state = initialState, action) => {
//     switch (action.type) {
//         case ActionTypes.UPDATE_PRODUCT:
//             return { ...initialState, ...action.upProdData };
//         case ActionTypes.DELETE_PRODUCT:
//             return { ...state, delProd: state.delProd.filter((c) => c.id != action.payload.id,) };
//         default:
//             return state;
//     }
// }

// export default delAndUpProdReducer