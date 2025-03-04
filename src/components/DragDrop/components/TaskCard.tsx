import { Task } from "@/types";
import { useDraggable } from "@dnd-kit/core";

type TastCardProps = {
  task: Task;
};

export function TaskCard({ task }: TastCardProps) {
  const { attributes, listeners, setNodeRef, transform } = useDraggable({
    id: task.id,
  });

  const style = transform
    ? { transform: `translate(${transform.x}px, ${transform.y}px)` }
    : undefined;

  return (
    <div
      ref={setNodeRef}
      {...listeners}
      {...attributes}
      style={style}
      className="cursor-grab rounded-lg bg-neutral-700 p-4 shadow-sm hover:shadow-sm"
    >
      <h3 className="font-medium text-xl text-neutral-100">{task.title}</h3>
      <p className="mt-2 text-lg text-neutral-400">{task.description}</p>
    </div>
  );
}
