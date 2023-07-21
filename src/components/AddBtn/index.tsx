import {JSXElement} from "solid-js";
import {Button, Grid, GridItem, IconButton} from "@hope-ui/solid";
import {IoAddCircle, IoAddOutline} from 'solid-icons/io'
import {JSX} from "solid-js/jsx-runtime";

export const AddBtn = ({onClick}:{onClick:()=>any}):JSX.Element => {
  return (
    <IconButton aria-label={"add"} onClick={onClick} icon={<IoAddOutline size={30}/>} colorScheme={"neutral"}  borderRadius={50} boxShadow={"rgba(0, 0, 0, 0.15) 2.4px 2.4px 3.2px"}/>
  )
}