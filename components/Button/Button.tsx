interface ButtonProps {
  type: 'button' | 'submit' | 'reset';
  children: string;
  isDisabled?: boolean;
  className?: string;
  onClick?: () => void;
  isHidden?: boolean;
}

export const Button: React.FC<ButtonProps> = ({
  type,
  children,
  isDisabled,
  className,
  onClick,
  isHidden,
}) => {
  return (
    <button
      type={type}
      className={`button ${className}`}
      disabled={isDisabled}
      onClick={onClick}
      hidden={isHidden}
    >
      {children}
    </button>
  );
};
