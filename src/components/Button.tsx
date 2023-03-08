interface ButtonProps {
  color?: "green" | "blue" | "gray";
  className?: string;
  children: any;
  onClick?: () => void;
}

export default function Button(props: ButtonProps) {
  const color = props.color ?? "gray";
  return (
    <button
      onClick={props.onClick}
      className={`
      bg-gradient-to-r from-blue-400 to-blue-700
      text-white px-4 py-2 rounded-md overflow-hidden
      ${props.className}
    `}
    >
      {props.children}
    </button>
  );
}
