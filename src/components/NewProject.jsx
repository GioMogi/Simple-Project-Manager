import Input from "./Input";

export default function NewProject() {
  return (
    <div className="w-[35rem] mt-16">
      <menu className="flex items-center justify-end gap-4 my-4">
        <li>
          <button className="text-emerald-800 hover:text-emerald-950">Cancel</button>
        </li>
        <li>
          <button className="bg-emerald-800 text-emerald-50 hover:bg-emerald-950 px-6 py-2 rounded-md">Save</button>
        </li>
      </menu>
      <div>
        <Input label="Title" />
        <Input label="Description" textArea />
        <Input label="Due Date" />
      </div>
    </div>
  );
}
