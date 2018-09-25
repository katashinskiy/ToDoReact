import {EDIT_ELEMENT} from "../Constants/constants";

export default function editElement(value, title, checked) {
    return {
        type: EDIT_ELEMENT,
        payload: {
            editElement: {
                value, title, checked
            }
        }
    }
}