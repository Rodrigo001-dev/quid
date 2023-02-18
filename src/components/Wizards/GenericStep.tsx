import { ReactNode } from "react";

import { Button } from "./Button";

interface GenericStepProps {
  title: string;
  firstButtonContent: string;
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
    <div className="animate-fadeInUp max-w-4xl flex items-center justify-center flex-col">
      <div className="max-w-2xl mb-32">
        <h2 className="font-bold text-3xl mb-10 text-center">{title}</h2>
        {children}
        {firstButtonContent && (
          <Button onClick={onClickFirstButton} content={firstButtonContent} />
        )}
        <div className="mb-5" />
        {secondButtonContent && (
          <Button onClick={onClickSecondButton} content={secondButtonContent} />
        )}

        {thirdButtonContent && (
          <>
            <div className="mt-5" />
            <Button onClick={onClickThirdButton} content={thirdButtonContent} />
          </>
        )}
      </div>

      <div className="w-full text-text-500 text-lg space-y-8 mb-4">
        {instructions && (
          <div>
            <strong className="font-bold">Instruções</strong>
            <p dangerouslySetInnerHTML={{ __html: instructions }}></p>
          </div>
        )}

        {legalBase && (
          <div className="pb-4">
            <strong className="font-bold">Base Legal</strong>
            <p dangerouslySetInnerHTML={{ __html: legalBase }}></p>
          </div>
        )}
      </div>
    </div>
  );
}
