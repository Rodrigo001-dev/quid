import { ReactNode } from "react";

import { Button } from "./Button";

interface GenericStepProps {
  title: string;
  firstButtonContent: string;
  isPrimaryButtonFirst?: boolean;
  onClickFirstButton: () => void;
  secondButtonContent?: string;
  isPrimaryButtonSecond?: boolean;
  onClickSecondButton?: () => void;
  thirdButtonContent?: string;
  isPrimaryButtonThird?: boolean;
  onClickThirdButton?: () => void;
  instructions?: string;
  legalBase?: string;
  children?: ReactNode;
}

export function GenericStep({
  title,
  firstButtonContent,
  onClickFirstButton,
  isPrimaryButtonFirst,
  secondButtonContent,
  onClickSecondButton,
  isPrimaryButtonSecond,
  thirdButtonContent,
  onClickThirdButton,
  isPrimaryButtonThird,
  instructions,
  legalBase,
  children,
}: GenericStepProps) {
  return (
    <div className="max-w-4xl flex items-center justify-center flex-col">
      <div className="max-w-2xl mb-32">
        <h2 className="font-bold text-3xl mb-10 text-center">{title}</h2>
        {children}
        {firstButtonContent && (
          <Button
            onClick={onClickFirstButton}
            content={firstButtonContent}
            isPrimaryButton={isPrimaryButtonFirst}
          />
        )}
        <div className="mb-5" />
        {secondButtonContent && (
          <Button
            onClick={onClickSecondButton}
            content={secondButtonContent}
            isPrimaryButton={isPrimaryButtonSecond}
          />
        )}

        {thirdButtonContent && (
          <>
            <div className="mt-5" />
            <Button
              onClick={onClickThirdButton}
              content={thirdButtonContent}
              isPrimaryButton={isPrimaryButtonThird}
            />
          </>
        )}
      </div>

      <div className="w-full text-text-500 text-lg space-y-8">
        {instructions && (
          <div>
            <strong className="font-bold">Instruções</strong>
            <p>{instructions}</p>
          </div>
        )}

        {legalBase && (
          <div className="pb-4">
            <strong className="font-bold">Base Legal</strong>
            <p>{legalBase}</p>
          </div>
        )}
      </div>
    </div>
  );
}
