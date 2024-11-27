import { Box, Checkbox, HStack, Text } from "@chakra-ui/react";

const Todo = ({ todos, setTodos }) => {
  const onClickFinish = (id) => {
    console.log(id);
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, isFinish: !todo.isFinish } : todo
      )
    );
  };
  return (
    <div>
      {todos.map((data) => (
        <HStack key={data.id} borderRadius={20} h={"70px"} p={"15px"}>
          <Checkbox
            onChange={() => onClickFinish(data.id)}
            colorScheme="green"
            size={"md"}
            isChecked={data.isFinish}
          >
            <Box>
              <Text>{data.title}</Text>
              <Text>{data.date}</Text>
            </Box>
          </Checkbox>
        </HStack>
      ))}
    </div>
  );
};

export default Todo;
