import { ReactNode } from "react";

import { Button } from "./Button";

interface GenericStepProps {
  title: string;
  hasFirstButton?: boolean;
  firstButtonContent: string;
  isPrimaryButtonFirst?: boolean;
  onClickFirstButton: () => void;
  hasSecondButton?: boolean;
  secondButtonContent?: string;
  isPrimaryButtonSecond?: boolean;
  onClickSecondButton?: () => void;
  hasThirdButton?: boolean;
  thirdButtonContent?: string;
  isPrimaryButtonThird?: boolean;
  onClickThirdButton?: () => void;
  instructions: string;
  hasLegalBase?: boolean;
  legalBase?: string;
  children?: ReactNode;
}

export function GenericStep({
  title,
  hasFirstButton,
  firstButtonContent,
  onClickFirstButton,
  isPrimaryButtonFirst,
  hasSecondButton,
  secondButtonContent,
  onClickSecondButton,
  isPrimaryButtonSecond,
  hasThirdButton,
  thirdButtonContent,
  onClickThirdButton,
  isPrimaryButtonThird,
  instructions,
  hasLegalBase,
  legalBase,
  children,
}: GenericStepProps) {
  return (
    <div className="max-w-4xl flex items-center justify-center flex-col">
      <div className="max-w-2xl mb-32">
        <h2 className="font-bold text-3xl mb-10 text-center">{title}</h2>
        {children}
        {hasFirstButton && (
          <Button
            onClick={onClickFirstButton}
            content={firstButtonContent}
            isPrimaryButton={isPrimaryButtonFirst}
          />
        )}
        <div className="mb-5" />
        {hasSecondButton && (
          <Button
            onClick={onClickSecondButton}
            content={secondButtonContent}
            isPrimaryButton={isPrimaryButtonSecond}
          />
        )}

        {hasThirdButton && (
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
        <div>
          <strong className="font-bold">Instruções</strong>
          <p>{instructions}</p>
        </div>

        {hasLegalBase && (
          <div className="pb-4">
            <strong className="font-bold">Base Legal</strong>
            <p>{legalBase}</p>
          </div>
        )}
      </div>
    </div>
  );
}
