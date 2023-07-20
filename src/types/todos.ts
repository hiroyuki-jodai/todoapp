import {Dayjs} from "dayjs";

export type Todo = {
  status: boolean;
  editable:boolean;
  label: string;
  description: string | undefined;
  deadLine?: Dayjs;
  created: Dayjs;
  updated: Dayjs;
  delFlg?:boolean
}

export type Todos = Todo[];