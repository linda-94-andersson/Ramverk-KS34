import { ActionTypes } from "../constans/action-types";

const initialState = {
    userData: JSON.parse(localStorage.getItem("user")),
}

const userDataReducer = (state = initialState, action) => {
    switch (action.type) {
        case ActionTypes.GET_USERDATA:
            const user = (action.userData)
            return { ...initialState, userData: action.userData, username: user.username, email: user.email, password: user.password, role: user.role, name: user.name, firstname: user.name.firstname, lastname: user.name.lastname, adress: user.adress, city: user.adress.city, street: user.adress.street, number: user.adress.numberm, zipcode: user.adress.zipcode, phone: user.phone, };
        default:
            return state;
    }
}

export default userDataReducer