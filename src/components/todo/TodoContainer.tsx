import { useState } from 'react';
import AddTodoModal from './AddTodoModal';
import TodoCard from './TodoCard';
import TodoFilter from './TodoFilter';
import { useAppSelector } from '@/redux/hook/hook';

const TodoContainer = () => {
  const [priorityCheck, setPriorityCheck] = useState('')
  const {todos} = useAppSelector((state) => state.todos)
  const priorityFilter = todos.filter((todo) => todo.priority === priorityCheck)
  console.log(priorityFilter);
  

  return (
    <div>
      <div className="flex justify-between mb-5 ">
        <AddTodoModal />
        <TodoFilter setPriorityCheck={setPriorityCheck} />
      </div>
      <div className="bg-primary-gradient w-full h-full rounded-xl  p-[5px]">
        <div className="bg-white p-5 w-full h-full rounded-lg space-y-3">
          {priorityCheck ? todos?.filter((todo) => todo.priority === priorityCheck)?.map((item) => (
            <TodoCard id={item.title} title={item.title} description={item.description} isCompleted={item.isCompleted} priority={item.priority} />
          )): todos?.map((item) => (
            <TodoCard id={item.title} title={item.title} description={item.description} isCompleted={item.isCompleted} priority={item.priority} />
          ))}
        </div>
        {/* <div className="bg-white text-2xl font-bold p-5 flex justify-center items-center rounded-md">
          <p>There is no task pending</p>{' '}
        </div> */}
      </div>
    </div>
  );
};

export default TodoContainer;
