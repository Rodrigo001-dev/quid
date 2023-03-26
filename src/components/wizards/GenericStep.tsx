import { ReactNode } from "react";

import { Button } from "./Button";

interface GenericStepProps {
  title: string;
  isCheckAllDataStep?: boolean;
  firstButtonContent?: string;
  onClickFirstButton: () => void;
  secondButtonContent?: string;
  onClickSecondButton?: () => void;
  thirdButtonContent?: string;
  onClickThirdButton?: () => void;
  instructions?: string;
  legalBase?: string;
  children?: ReactNode;
}

export function GenericStep({
  title,
  isCheckAllDataStep,
  firstButtonContent,
  onClickFirstButton,
  secondButtonContent,
  onClickSecondButton,
  thirdButtonContent,
  onClickThirdButton,
  instructions,
  legalBase,
  children,
}: GenericStepProps) {
  return (
    <div className="animate-fadeInUp max-w-xs sm:max-w-md md:max-w-4xl ml-5 sm:ml-0 flex items-center justify-center flex-col">
      <div className="max-w-2xl mb-32">
        <h2
          className={`mb-10 text-center ${
            isCheckAllDataStep
              ? "font-medium text-lg md:text-2xl"
              : "font-bold text-xl md:text-3xl"
          }`}
        >
          {title}
        </h2>
        {children}
        {firstButtonContent && !isCheckAllDataStep && (
          <div className="flex justify-center">
            <Button onClick={onClickFirstButton} content={firstButtonContent} />
          </div>
        )}
        <div className="mb-5" />
        {secondButtonContent && (
          <div className="flex justify-center">
            <Button
              onClick={onClickSecondButton}
              content={secondButtonContent}
            />
          </div>
        )}

        {thirdButtonContent && (
          <>
            <div className="mt-5" />
            <div className="flex justify-center">
              <Button
                onClick={onClickThirdButton}
                content={thirdButtonContent}
              />
            </div>
          </>
        )}
      </div>

      <div
        className={`w-full text-text-500 text-lg space-y-8 ${
          isCheckAllDataStep ? "-mb-8" : "mb-4"
        }`}
      >
        {instructions && !isCheckAllDataStep && (
          <div>
            <strong className="font-bold">Instruções</strong>
            <p dangerouslySetInnerHTML={{ __html: instructions }}></p>
          </div>
        )}

        {legalBase && !isCheckAllDataStep && (
          <div className="pb-4">
            <strong className="font-bold">Base Legal</strong>
            <p dangerouslySetInnerHTML={{ __html: legalBase }}></p>
          </div>
        )}
      </div>
    </div>
  );
}
