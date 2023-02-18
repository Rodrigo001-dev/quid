import * as Dialog from "@radix-ui/react-dialog";

interface ModalProps {
  title: string;
  description: string;
  open: boolean;
  onClose: () => void;
}

export function Modal({ title, description, open, onClose }: ModalProps) {
  return (
    <Dialog.Root open={open} onOpenChange={onClose}>
      <Dialog.Portal>
        <Dialog.Content className="fixed top-[50%] left-[50%] max-h-[480px] max-w-[786px] translate-x-[-50%] translate-y-[-50%] rounded-[6px] bg-white p-[25px] shadow-[hsl(206_22%_7%_/_35%)_0px_10px_38px_-10px,_hsl(206_22%_7%_/_20%)_0px_10px_20px_-15px] focus:outline-none">
          <Dialog.Title className="text-3xl flex items-center justify-center font-bold text-center mb-12">
            {title}
          </Dialog.Title>
          <Dialog.Description className="ml-8 text-lg leading-normal">
            {description}
          </Dialog.Description>
          <div className="flex justify-center my-9">
            <Dialog.Close asChild>
              <button className="w-72 h-14 py-3 px-4 bg-primary-500 text-white rounded-lg font-medium transition-colors duration-300 hover:bg-primary-300 hover:text-text-500 focus:outline-none">
                Compreendi
              </button>
            </Dialog.Close>
          </div>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
}
