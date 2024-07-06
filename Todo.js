import { useState } from "react";
import { deleteTodo, editTodo } from "./Action";
import { useDispatch } from "react-redux";

function Todo({ id, titile }) {
  const [editing, setEditing] = useState(false);
  const [newTitle, setNewTitle] = useState(titile);
  const dispatch = useDispatch();
const handleChange=()=>{
    if(newTitle.trim()){
        dispatch(editTodo({id:id,titile:newTitle}))
        setEditing(false)
    }
}
const handleDelete = () => {
    dispatch(deleteTodo(id));
  };

  return (
    <div className="from-group">
      {editing ? (
        <div className="list-group-item">
          <input
            className="form-control"
            type="text"
            value={newTitle}
            onChange={(e) => setNewTitle(e.target.value)}
          ></input>
          <button className="btn btn-primary" onClick={handleChange}>
            Save
          </button>
        </div>
      ) : (
        <li className="form-group">
          <p>{titile}</p>
          <div className="actions">
            <button className="btn btn-danger" onClick={() => setEditing(true)}>
              Edit
            </button>
            <button className="btn btn-secondary" onClick={handleDelete}>Del</button>
          </div>
        </li>
      )}
    </div>
  );
}
export default Todo;
