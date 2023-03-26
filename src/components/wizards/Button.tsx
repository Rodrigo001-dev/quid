interface ButtonProps {
  content?: string;
  onClick?: () => void;
}

export function Button({ content, onClick }: ButtonProps) {
  return (
    <button
      type="button"
      onClick={onClick}
      className="w-72 sm:w-80 md:w-[630px] h-14 text-center font-normal text-lg py-4 rounded-lg transition-colors duration-300 text-text-500 bg-primary-200 hover:bg-primary-500 hover:text-white"
    >
      {content}
    </button>
  );
}
