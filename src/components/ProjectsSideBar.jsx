import Button from "./Buttons";

export default function ProjectsSideBar({ onStartAddProject, projects }) {
  return (
    <aside className="w-1/3 px-8 py-16 bg-emerald-900 text-emerald-50 md:w-72 rounded-r-xl">
      <h2 className="mb-8 font-bold uppercase md:text-xl text-emerald-50">
        Your Projects
      </h2>
      <div>
        <Button onClick={onStartAddProject}>+ Add Project</Button>
      </div>
      <ul className="mt-8">
        {projects.map((project) => (
          <li key={project.id}>
            <button className="w-full text-left px-2 py-1 rounded-sm my-1 text-emerald-400 hover:text-emerald-200 hover:bg-emerald-800">
              {project.title}
            </button>
          </li>
        ))}
      </ul>
    </aside>
  );
}
