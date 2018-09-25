import {EDIT_CHECKED_ELEMENT} from "../Constants/constants";

export default function editChecked(checked, index) {

    return {
        type: EDIT_CHECKED_ELEMENT,
        payload: {
            checked,
            index
        }
    }

}