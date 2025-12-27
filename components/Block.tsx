import clsx from "clsx"

export default function Block({
  children,
  className,
  ...rest
} :{
  children: React.ReactNode,
  className?: string,
}) {
  return (
    <div className={clsx('mb-10', className)} {...rest}>
      {children}
    </div>
  );
}