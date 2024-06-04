export default function Button({ children, ...props }) {
  let buttonClass =
    "px-4 py-2 text-xs md:text-base rounded-md bg-emerald-700 text-emerald-400 hover:bg-emerald-600 hover:text-emerald-100";

  return <button className={buttonClass} {...props}>{children}</button>;
}
