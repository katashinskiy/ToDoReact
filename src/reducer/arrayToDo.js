import {toDoElements} from "../components/sourse/toDoElement"
import {DELETE_ELEMENT, ADD_ELEMENT, EDIT_ELEMENT, EDIT_CHECKED_ELEMENT} from "../Constants/constants";

export default (arrayToDo = toDoElements, action) => {

    const {type, payload} = action;
    let list;

    switch (type) {

        case EDIT_CHECKED_ELEMENT: {
            list = [...arrayToDo];
            list[payload.index].checked = payload.checked;
            return list;
        }

        case DELETE_ELEMENT: {

            list = arrayToDo.filter(i => !i.checked);
            return list;

        }

        case ADD_ELEMENT: {
            list = [...arrayToDo, payload.newElement];
            return list;
        }

        case EDIT_ELEMENT: {
            list = arrayToDo.map((elem) => {
                if(elem.checked === true){
                    return payload.editElement;
                }
                return elem;
            });

            return list;
        }

        default :
    }

    return arrayToDo;
}