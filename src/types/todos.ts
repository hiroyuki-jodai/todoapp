import {Dayjs} from "dayjs";

export type Todo = {
  id: number;
  status: boolean;
  editable:boolean;
  label: string;
  description: string | undefined;
  created: Dayjs;
  updated: Dayjs;
  delFlg?:boolean
}

export type Todos = Todo[];