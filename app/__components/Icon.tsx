interface IconProps {
  name: string;
  className?: string;
}

export default function Icon({ name, className }: IconProps) {
  return (
    <span
      className={`material-symbols-outlined${className ? ` ${className}` : ""}`}
      data-icon={name}
    >
      {name}
    </span>
  );
}
