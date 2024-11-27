import {
  AlertDialog,
  AlertDialogBody,
  AlertDialogContent,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogOverlay,
  Button,
  useDisclosure,
} from "@chakra-ui/react";
import { useRef } from "react";

const Alert = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const cancleRef = useRef();

  return (
    <>
      <Button onClick={onOpen}>버튼</Button>

      <AlertDialog isOpen={isOpen} onClose={onClose}>
        <AlertDialogOverlay
          maxW={450}
          w={"100%"}
          h="100vh"
          boxShadow={"0 0 10px rgba(0,0,0,0.1)"}
          margin={"0 auto"}
        >
          <AlertDialogContent>
            <AlertDialogHeader>삭제 확인</AlertDialogHeader>

            <AlertDialogBody>삭제 하시겠습니까?</AlertDialogBody>

            <AlertDialogFooter>
              <Button ref={cancleRef} onClick={onClose}>
                취소
              </Button>
              <Button onClick={onClose}>삭제</Button>
            </AlertDialogFooter>
          </AlertDialogContent>
        </AlertDialogOverlay>
      </AlertDialog>
    </>
  );
};

export default Alert;
