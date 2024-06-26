import Tasks from "./Tasks";

export default function SelectedProject({
  project,
  onDelete,
  onAddTask,
  onDeleteTask,
  tasks,
}) {
  const formattedDate = new Date(project.dueDate).toLocaleDateString("eng-US", {
    year: "numeric",
    month: "short",
    day: "numeric",
  });

  return (
    <div className="w-[35rem] mt-16">
      <header className="pb-4 mb-4 border-b-2 border-emerald-300">
        <div className="flex items-center justify-between">
          <h1 className="text-3xl font-bold text-emeral-600 mb-2">
            {project.title}
          </h1>
          <button
            className="text-emerald-600 hover:text-emerald-950"
            onClick={onDelete}
          >
            DELETE
          </button>
        </div>
        <p className="mb-4 text-emerald-400">{formattedDate}</p>
        <p className="text-emerald-600 whitespace-pre-wrap">
          {project.description}
        </p>
      </header>
      <Tasks onAdd={onAddTask} onDelete={onDeleteTask} tasks={tasks} />
    </div>
  );
}
