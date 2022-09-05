interface ButtonProps {
  title: string;
  isDisabled?: boolean;
  className?: string;
}

export const Button: React.FC<ButtonProps> = ({ title, isDisabled, className }) => {
  return (
    <button type='button' className={`button ${className}`} disabled={isDisabled}>
      {title}
    </button>
  );
};
