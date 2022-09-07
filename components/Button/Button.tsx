interface ButtonProps {
  type: 'button' | 'submit' | 'reset';
  children: string;
  isDisabled?: boolean;
  className?: string;
  onClick?: () => void;
}

export const Button: React.FC<ButtonProps> = ({
  type,
  children,
  isDisabled,
  className,
  onClick,
}) => {
  return (
    <button type={type} className={`button ${className}`} disabled={isDisabled} onClick={onClick}>
      {children}
    </button>
  );
};
