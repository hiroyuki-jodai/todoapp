import {Box as BaseBox} from "@hope-ui/solid";
import { JSX } from "solid-js/jsx-runtime";

export const Box = (props: { children: number | boolean | Node | JSX.ArrayElement | (string & {}) | null | undefined; }) => {
  console.log(props);
  return (
    <BaseBox>
      <div classList={{test:true}}>{props.children}</div>
    </BaseBox>
  )
}

export const Test = () => {
  return <Box>test</Box>
}