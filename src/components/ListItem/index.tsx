import {
  Box,
  Center,
  Checkbox,
  Flex,
  HStack,
  Input,
  Text,
  Textarea,
} from "@hope-ui/solid";
import {Todo} from "../../types/todos";
import {CgCheck} from "solid-icons/cg";
import {OutlinedIconButton} from "../Button/OutlinedIconButton";
import {AiOutlineDelete} from "solid-icons/ai";

export const ListItem = ({todo, setTodo}: { todo: Todo; setTodo: (todo: Todo) => void }) => {
  return (
    <Box margin={"8px 0"} padding={"8px 12px"} boxShadow={"rgba(0, 0, 0, 0.1) 0px 4px 6px -1px, rgba(0, 0, 0, 0.06) 0px 2px 4px -1px;"}
         width={"100%"} backgroundColor={todo.status ? "#BDC3C7" : "#ECF0F1"}>
      {todo.editable ? <Editable todo={todo} setTodo={setTodo}/> : <Fixed todo={todo} setTodo={setTodo}/>}
    </Box>
  )
}
type itemProps = { todo: Todo; setTodo: (todo: Todo) => void }
// 変更可能
const Editable = ({todo, setTodo}: itemProps) => {
  const setLabel = (e: Event & { currentTarget: HTMLInputElement; target: HTMLInputElement; }) => {
    todo.label = e.target.value
  };
  const setDescription = (e: any) => {
    todo.description = e.target.value
  };
  const save = () => {
    todo.editable = false;
    setTodo(todo);
  }
  // エンターで保存
  const handleKeyDown = (e: KeyboardEvent) => {
    if (e.key === 'Enter') save();
  }
  return (
    <Box>
      <Flex>
        <Center><Checkbox size={"lg"} disabled/></Center>
        <Box flex={1} paddingRight={"10px"}>
          <Input placeholder={'todo'} value={todo.label} onInput={setLabel} onKeyDown={handleKeyDown}/>
        </Box>
        <Center>
          <HStack>
            <OutlinedIconButton onClick={save} icon={<CgCheck size={50} color={"#000"}/>}/>
          </HStack>
        </Center>
      </Flex>
      <Box mt={8} pl={28}>
        <Textarea placeholder={"備考"} onInput={setDescription}>{todo.description}</Textarea>
      </Box>
    </Box>
  )
}
//確定
const Fixed = ({todo, setTodo}: itemProps) => {
  const edit = () => {
    if (todo.status === true) return;
    todo.editable = true;
    setTodo(todo);
  }
  const check = (checked: boolean) => {
    todo.status = checked;
    setTodo(todo);
  }
  const deleteItem = () => {
    todo.delFlg = true;
    setTodo(todo);
  }
  return (
    <>
      <Flex onClick={(e: Event) => {
        edit()
      }}>
        <Center>
          <Checkbox size={"lg"} checked={todo.status}
                    onClick={(e: Event) => e.stopPropagation()}
                    onChange={(e: any) => check(e.target.checked)}/>
        </Center>
        <Box flex={1}><Text fontSize={"16px"} margin={"6px 4px"} fontWeight={"bold"}>{todo.label}</Text></Box>
        <Center>
          <HStack>
            <OutlinedIconButton icon={<AiOutlineDelete size={25}/>} onClick={(e:any) => {e.stopPropagation();deleteItem()}}/>
          </HStack>
        </Center>
      </Flex>
      {todo.description !== '' &&
          <Text pl={30} fontSize={"10px"} margin={"6px 4px"} fontWeight={"bold"}>{todo.description}</Text>
      }
    </>
      )
}