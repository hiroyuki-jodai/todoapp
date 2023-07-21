import {createEffect, createSignal, JSXElement} from "solid-js";
import {Todo, Todos} from "../../types/todos";
import {Box, Flex, Grid, GridItem, Switch, VStack} from "@hope-ui/solid";
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
  const [showEnded, setShowEnded] = createSignal(false);
  const switchEnded = (e:any) => {
    if(e.target.checked){
      // 完了済みを表示
      setShowEnded(true);
      return;
    }
    setShowEnded(false);
    // 完了済みを非表示
  }
  createEffect(() => {
    console.log(showEnded())
  })
  return (
    <>
      <Box backgroundColor={"#FFF"} margin={"8px 0"} padding={"4px"} borderRadius={"10px"} display={"inline-block"}>
        <Switch fontWeight={"bold"} onChange={switchEnded}>完了を表示</Switch>
      </Box>
      <VStack margin={"8px 0"} spacing={10}>
        {todos().map((v, k) => (showEnded()===true || v.status === false)&&<ListItem todo={v} setTodo={todo => saveTodo(todo,k)}/>)}
      </VStack>
      <Box position={"fixed"} right={20} bottom={20}>
        <AddBtn onClick={addTodo}/>
      </Box>
    </>
  )
}