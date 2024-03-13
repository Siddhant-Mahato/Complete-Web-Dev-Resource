import { useDispatch, useSelector } from "react-redux";
import style from "./DataInputList.module.css";
import { deleteItem } from "../store/TodoItem"; // Import deleteItem action
import { MdDelete } from "react-icons/md";

const DataInputList = () => {
  const dispatch = useDispatch();
  const todoList = useSelector((state) => state.todo);

  const handleDelete = (id) => {
    dispatch(deleteItem(id)); // Dispatch the deleteItem action with the ID
  };

  return (
    <ul>
      {todoList.map((todo, index) => (
        <li key={index} className={style.sl}>
          {todo}
          <button
            type="button"
            className="btn"
            onClick={() => handleDelete(index)}
          >
                <MdDelete className={ style.lbt} />
          </button>
        </li>
      ))}
    </ul>
  );
};

export default DataInputList;
