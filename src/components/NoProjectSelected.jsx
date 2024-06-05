import Button from "./Buttons";
// import an image

export default function NoProjectSelected() {
  return (
    <div className="mt-2 text-center w-2/3">
      <img />
      <h2 className="text-xl font-bold text-emerald-500 mt-4 my-4">
        No Project Selected
      </h2>
      <p className="text-emerald-400 mb-4">Select a project or create a new one</p>
      <p className="mt-8">
        <Button>Create new project</Button>
      </p>
    </div>
  );
}
