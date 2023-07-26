import {IconButton} from "@hope-ui/solid";
import {JSXElement} from "solid-js";

type Props = {
  onClick: (e:any) => void
  icon: JSXElement;
}
export const OutlinedIconButton = ({onClick,icon}:Props) => {
  return (
    <IconButton aria-label={""} onClick={onClick} icon={icon} variant={"ghost"} borderRadius={50} border={"none"}/>
  )
}