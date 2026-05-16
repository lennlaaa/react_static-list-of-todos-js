export const TodoInfo = ({ todo }) => {
  return (
    <div
      className={`TodoInfo${todo.completed ? ' TodoInfo--completed' : ''}`}
    >
      {todo.title}
      <p>{todo.completed ? 'Done' : 'In progress'}</p>
      {todo.user && <UserInfo user={todo.user} />}
    </div>
  );
};
