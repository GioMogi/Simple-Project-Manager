export default function Input({ label, textArea, ...props }) {
  const classes =
    "w-full p-1 border-b-2 rounded-sm border-emerald-300 bg-emerald-200 text-emerald-600 focus:outline-none focus:border-emerald-600";

  return (
    <p className="flex flex-col gap-1 my-4">
      <label className="text-sm font-bold uppercase text-emerald-500">
        {label}
      </label>
      {textArea ? (
        <textarea className={classes} {...props} />
      ) : (
        <input className={classes} {...props} />
      )}
    </p>
  );
}
