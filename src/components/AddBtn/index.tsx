import {JSXElement} from "solid-js";
import {Button, Grid, GridItem, IconButton} from "@hope-ui/solid";
import { IoAddCircle } from 'solid-icons/io'
import {JSX} from "solid-js/jsx-runtime";

export const AddBtn = ({onClick}:{onClick:()=>any}):JSX.Element => {
  return (
    <IconButton aria-label={"add"} onClick={onClick} icon={<IoAddCircle size={30}/>} variant={"outline"} borderRadius={50} border={"none"}/>
  )
}