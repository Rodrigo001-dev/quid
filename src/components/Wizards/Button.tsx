interface ButtonProps {
  content?: string;
  isPrimaryButton?: boolean;
  onClick?: () => void;
}

export function Button({ content, isPrimaryButton, onClick }: ButtonProps) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={`w-[630px] h-14 text-center font-normal text-lg py-4 rounded-lg transition-colors duration-300 ${
        isPrimaryButton
          ? "text-white bg-primary-500 hover:bg-primary-400"
          : "text-text-500 bg-primary-200 hover:bg-primary-100"
      }`}
    >
      {content}
    </button>
  );
}
