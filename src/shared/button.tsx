import clsx from "clsx";

type ButtonProps = {
  className?: string;
  children: React.ReactNode;
  type: "button" | "submit";
  variant: "primary" | "secondary";
};

const variantMap = {
  primary: "bg-blue-500 text-white",
  secondary: "bg-gray-500 text-white",
};

export default function Button({
  className,
  children,
  type,
  variant,
}: ButtonProps) {
  return (
    <button
      type={type}
      className={clsx(
        variantMap[variant],
        className,
        "hover:bg-blue-700 py-2 px-4 rounded"
      )}
    >
      {children}
    </button>
  );
}
