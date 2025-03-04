export interface Column {
  id: "TODO" | "IN_PROGRESS" | "DONE";
  title: string;
}
export interface Task {
  id: string;
  title: string;
  description: string;
  status: "TODO" | "IN_PROGRESS" | "DONE";
}
