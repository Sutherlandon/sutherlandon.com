import clsx from "clsx"

export default function Block({
  children,
  className,
  style
} :{
  children: React.ReactNode,
  className?: string,
  style?: object
}) {
    return (
      <div className={clsx('mb-4', className)} style={style}>
        {children}
      </div>
    );
  }