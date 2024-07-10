import { TodoItem } from "@/components/ServerComponents";
import Form from "./addTodoForm";

const Todos = async () => {
  const tasks = [];

  return (
    <section className="todosContainer">
      <Form />

      {tasks?.map((i) => (
        <TodoItem
          title={i.title}
          description={i.description}
          id={i._id}
          key={i._id}
          completed={i.isCompleted}
        />
      ))}
    </section>
  );
};

export default Todos;
