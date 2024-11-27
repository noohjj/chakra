import { Container, useColorMode } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import Header from "./components/Header";
import Todo from "./components/Todo";

const Main = () => {
  const [todos, setTodos] = useState(() => {
    const registTodo = localStorage.getItem("todos");
    return registTodo ? JSON.parse(registTodo) : [];
  });

  const { colorMode } = useColorMode();

  console.log(todos);

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  return (
    <Container
      maxW={450}
      w={"100%"}
      h="100vh"
      bgColor={colorMode === "light" ? "#f1f1f1" : "gray.700"}
      boxShadow={"0 0 10px rgba(0,0,0,0.1)"}
      margin={"0 auto"}
    >
      <Header todos={todos} setTodos={setTodos} />

      <Todo todos={todos} setTodos={setTodos} />
    </Container>
  );
};

export default Main;
