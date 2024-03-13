import { useDispatch } from "react-redux";
import style from "./DeleteAll.module.css"
import { deleteAllItem } from "../store/TodoItem";

const DeleteAll = () => {
    const dispatch = useDispatch();
    const handleDeleteAll = () => {
        dispatch(deleteAllItem());
    }
    return (
      <button type="button" class="btn btn-warning" onClick={handleDeleteAll}>
        Delete All
      </button>
    );
}

export default DeleteAll;