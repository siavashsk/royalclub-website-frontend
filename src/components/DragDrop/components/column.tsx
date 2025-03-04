import { Column as Col, Task } from "@/types";
import { TaskCard } from "./TaskCard";
import { useDroppable } from "@dnd-kit/core";

type ColumnProps = {
  column: Col;
  tasks: Task[];
};

export function Column({ column, tasks }: ColumnProps) {
  const { setNodeRef } = useDroppable({
    id: column.id,
  });
  return (
    <div className="flex w-full items-center justify-items-center p-8">
      <div className="flex flex-col gap-2 w-full h-[600px] bg-zinc-800 rounded-xl p-8">
        <h2 className="font-bold text-2xl mb-4">{column.title}</h2>
        <div ref={setNodeRef} className="flex flex-1 flex-col gap-4">
          {tasks.map((task) => {
            return <TaskCard key={task.id} task={task} />;
          })}
        </div>
      </div>
    </div>
  );
}
