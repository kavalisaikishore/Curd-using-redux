import {useSelector} from 'react-redux';
import Todo from './Todo';
function TodoList(){
    const todo=useSelector((state)=>state.todos);
    console.log(todo)
    return(
        <div>
            <ul className='list-group'>
                {
                    todo.map((todo)=>{
                        return(
                        <Todo key={todo.id} id={todo.id} titile={todo.titile}/>
                     ) })
                }

            </ul>
            

        </div>
    )
}
export default TodoList;