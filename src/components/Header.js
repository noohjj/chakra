import { MoonIcon, SunIcon } from "@chakra-ui/icons";
import { Box, Heading, Input, Text, useColorMode } from "@chakra-ui/react";
import { useForm } from "react-hook-form";
import Alert from "./Alert";

const Header = ({ todos, setTodos }) => {
  const { colorMode, toggleColorMode } = useColorMode();
  const { register, handleSubmit, reset } = useForm();
  const isDark = colorMode === "light" ? "#f1f1f1" : "gray.800";
  const now = new Date();
  const year = now.getFullYear();
  const month = now.getMonth() + 1;
  const day = now.getDay();

  const onSubmit = (data) => {
    const { todo: text } = data;
    setTodos([
      ...todos,
      {
        id: Date.now(),
        title: text,
        isFinish: false,
        date: `${year}년${month}월${day}일`,
      },
    ]);

    reset();
  };

  return (
    <Box bgColor={isDark}>
      <Heading as={"header"}>
        <Text as={"h2"}>TODO</Text>
        <Box
          onClick={toggleColorMode}
          w={"50px"}
          h={"50px"}
          borderRadius={"30px 30px 30px 0"}
        >
          {colorMode === "light" ? <SunIcon /> : <MoonIcon />}
        </Box>

        <Box as="form" onSubmit={handleSubmit(onSubmit)}>
          <Input
            {...register("todo", {
              required: "빈 내용은 안되요 ㅜ",
            })}
            placeholder="할 일을 적어주세요!"
            border={"1px solid #dbdbdb"}
          />
        </Box>

        <Alert></Alert>
      </Heading>
    </Box>
  );
};

export default Header;
