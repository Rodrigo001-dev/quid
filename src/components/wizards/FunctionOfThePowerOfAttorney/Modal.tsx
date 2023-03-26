import React from "react";

interface ModalProps {
  title: string;
  description: string;
  firstButtonContent: string;
  onClickFirstButton: () => void;
  secondButtonContent?: string;
  onClickSecondButton?: () => void;
}

export function Modal({
  title,
  description,
  firstButtonContent,
  onClickFirstButton,
  secondButtonContent,
  onClickSecondButton,
}: ModalProps) {
  return (
    <section className="overflow-y-scroll md:overflow-hidden fixed top-[50%] left-[50%] h-screen md:max-h-[508px] max-w-2xl md:max-w-[786px] translate-x-[-50%] translate-y-[-50%] rounded-[6px] bg-white p-[25px] shadow-[hsl(206_22%_7%_/_35%)_0px_10px_38px_-10px,_hsl(206_22%_7%_/_20%)_0px_10px_20px_-15px] focus:outline-none">
      <div className="rounded-lg p-6">
        <strong className="text-xl md:text-3xl flex items-center justify-center font-bold text-center mb-4 md:mb-12">
          {title}
        </strong>
        <p className="text-base md:text-lg leading-normal">{description}</p>
        {secondButtonContent ? (
          <div className="flex flex-col md:flex-row justify-center md:gap-8 gap-4 my-4 md:my-12">
            <button
              onClick={onClickFirstButton}
              className="w-72 h-10 md:w-44 md:h-14 px-4 bg-primary-200 text-text-500 rounded-lg font-medium transition-colors duration-300 hover:bg-primary-400 hover:text-white focus:outline-none"
            >
              {firstButtonContent}
            </button>
            <button
              onClick={onClickSecondButton}
              className="w-72 h-10 md:w-44 md:h-14 py-3 px-4 bg-primary-500 text-white rounded-lg font-medium transition-colors duration-300 hover:bg-primary-300 hover:text-text-500 focus:outline-none"
            >
              {secondButtonContent}
            </button>
          </div>
        ) : (
          <div className="flex justify-center my-9">
            <button
              onClick={onClickFirstButton}
              className="w-72 h-14 py-3 px-4 bg-primary-500 text-white rounded-lg font-medium transition-colors duration-300 hover:bg-primary-300 hover:text-text-500 focus:outline-none"
            >
              {firstButtonContent}
            </button>
          </div>
        )}
      </div>
    </section>
  );
}
