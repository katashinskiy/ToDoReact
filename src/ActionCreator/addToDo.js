import {ADD_ELEMENT} from "../Constants/constants";


export default function addElement(value, title, checked) {
    return {
        type: ADD_ELEMENT,
        payload: {
            newElement: {
                value, title, checked
            }
        }
    }
}