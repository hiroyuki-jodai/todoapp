import {Box, Center, Checkbox, Flex, Grid, GridItem, HStack, IconButton, Input, Text} from "@hope-ui/solid";
import {createSignal, JSXElement} from "solid-js";
import {Todo} from "../../types/todos";
import {CgCheck} from "solid-icons/cg";
import {FiEdit} from "solid-icons/fi";
import {OutlinedIconButton} from "../Button/OutlinedIconButton";
import {AiOutlineDelete} from "solid-icons/ai";
import {BiSolidArrowFromBottom, BiSolidDownArrow} from "solid-icons/bi";

export const ListItem = ({todo, setTodo}: { todo: Todo; setTodo: (todo: Todo) => void }) => {
  return (
    <Box padding={"8px 12px"} boxShadow={"rgba(0, 0, 0, 0.1) 0px 4px 6px -1px, rgba(0, 0, 0, 0.06) 0px 2px 4px -1px;"} width={"100%"} backgroundColor={"#ECF0F1"}>
      {todo.editable ? <Editable todo={todo} setTodo={setTodo}/> : <Fixed todo={todo} setTodo={setTodo}/>}
    </Box>
  )
}
type itemProps = { todo: Todo; setTodo: (todo: Todo) => void }
// 変更可能
export const Editable = ({todo, setTodo}: itemProps) => {
  const [show, setShow] = createSignal(false)
  const setLabel = (e: Event & { currentTarget: HTMLInputElement; target: HTMLInputElement; }) => {
    todo.label = e.target.value
  };
  const save = () => {
    todo.editable = false;
    console.log(todo);
    setTodo(todo);
  }
  return (
    <Flex>
      <Center><Checkbox size={"lg"} disabled/></Center>
      <Box flex={1} paddingRight={"10px"}><Input placeholder={'todo'} value={todo.label} onInput={setLabel}/></Box>
      <Center>
        <HStack>
          <OutlinedIconButton onClick={save} icon={<CgCheck size={50}/>}/>
          <OutlinedIconButton icon={<BiSolidDownArrow size={20}/>} onClick={() => {}}/>
        </HStack>

      </Center>
    </Flex>
  )
}
//確定
export const Fixed = ({todo, setTodo}: itemProps) => {
  const edit = () => {
    todo.editable = true;
    setTodo(todo);
  }
  const check = (checked:boolean) => {
    console.log(checked);
    todo.status = checked
    setTodo(todo);
  }
  const deleteItem = () => {
    todo.delFlg = true;
    setTodo(todo);
  }
  return (
    <Flex>
      <Center><Checkbox size={"lg"} checked={todo.status} onChange={(e:any) => check(e.target.checked)}/></Center>
      <Box flex={1}><Text fontSize={"16px"} margin={"6px 4px"} fontWeight={"bold"}>{todo.label}</Text></Box>
      <Center>
        <HStack>
          <OutlinedIconButton icon={<FiEdit size={25}/>} onClick={() => edit()}/>
          <OutlinedIconButton icon={<AiOutlineDelete size={25}/>} onClick={() => deleteItem()}/>
        </HStack>
      </Center>
    </Flex>
  )
}