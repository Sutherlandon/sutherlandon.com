import clsx from "clsx";

export default function Button({
  children,
  className,
  ...rest
}: {
  children: React.ReactNode,
  className?: String,
  onClick?: () => void
}) {
  return (
    <div
      className={clsx(
        'rounded flex p-2 px-4 mb-4 items-center text-gray-800 hover:shadow hover:shadow-black/60 hover:text-slate-100 hover:bg-slate-400',
        className
      )}
      {...rest}
    >
      {children}
    </div>
  );
}
