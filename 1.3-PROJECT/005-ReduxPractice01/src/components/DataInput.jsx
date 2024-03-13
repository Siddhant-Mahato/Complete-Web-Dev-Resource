import { useDispatch } from "react-redux";
import style from "./DataInput.module.css";
import { addTodo } from "../store/TodoItem";
import { useRef } from "react";
import DataInputList from "./DataInputList"; // Import DataInputList
import DeleteAll from "./DeleteAll";

const DataInput = () => {
  const todoInputRef = useRef(null);
  const dispatch = useDispatch();

  const handleClick = (e) => {
    e.preventDefault();
    const todoInputValue = todoInputRef.current.value;
    dispatch(addTodo(todoInputValue));
    todoInputRef.current.value = "";
  };

  return (
    <div>
      <form onSubmit={handleClick}>
        <div className={style.fr}>
          <label htmlFor="exampleInputEmail1" className="form-label">
            Todo Input's
          </label>
          <input type="text" className="form-control" ref={todoInputRef} />
        </div>
        <button type="submit" className="btn btn-success mt-2">
          Add
        </button>
      </form>
      <div>
        <DataInputList /> {/* Now DataInputList is defined */}
      </div>
      <DeleteAll></DeleteAll>
    </div>
  );
};

export default DataInput;
