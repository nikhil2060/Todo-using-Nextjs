import Form from "./addTodoForm";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import { TodoItem } from "@/components/ServerComponents";

const fetchTodo = async (token) => {
  try {
    const res = await fetch(`${process.env.NEXT_PUBLIC_URL}/api/myTask`, {
      cache: "no-cache",
      method: "GET",
      headers: {
        cookie: `token=${token.value}`,
      },
    });
    const data = await res.json();

    if (!data.success) return [];

    return data.tasks;
  } catch (error) {
    console.log(error);
    return [];
  }
};

const Todos = async () => {
  const token = cookies().get("todo-token");

  if (!token) redirect("/login");

  const tasks = await fetchTodo(token);

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
