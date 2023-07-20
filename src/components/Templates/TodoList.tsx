import {createEffect, createSignal, JSXElement} from "solid-js";
import {Todo, Todos} from "../../types/todos";
import {Box, Flex, Grid, GridItem, VStack} from "@hope-ui/solid";
import {AddBtn} from "../AddBtn";
import dayjs from "dayjs";
import {ListItem} from "../ListItem";
import {OutlinedIconButton} from "../Button/OutlinedIconButton";
import {IoAddCircle, IoAddOutline} from "solid-icons/io";

export const TodoList = (): JSXElement => {
  const [todos, setTodos] = createSignal<Todos>([],{equals:false})
  const [count, setCount] = createSignal(0);
  const addTodo = () => {
    const todo: Todo = {
      status: false,
      editable: true,
      label: '',
      description: '',
      created: dayjs(),
      updated: dayjs()
    }
    setTodos(prev => {prev.push(todo);return prev})
    setCount(prev => prev + 1);
  }
  const saveTodo = (todo:Todo,key:number) => {
    const current = todos();
    current[key] = todo;
    if(todo.delFlg === true){
      delete current[key]
    }
    setTodos(current)
  }
  createEffect(() => {
  });
  return (
    <>
      <VStack margin={"8px 16px"} spacing={10}>
        {todos().map((v, k) => <ListItem todo={v} setTodo={todo => saveTodo(todo,k)}/>)}
      </VStack>
      <Box position={"fixed"} right={20} bottom={20}>
        <OutlinedIconButton onClick={addTodo} icon={<IoAddCircle size={40} color="#E74C3C" />}/>
      </Box>
    </>
  )
}