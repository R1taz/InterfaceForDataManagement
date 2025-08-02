import { ReactNode, useEffect } from 'react';

interface ModalWrapperProps {
  onClose: () => void;
  children: ReactNode;
}

const ModalWrapper = ({ onClose, children }: ModalWrapperProps) => {
  useEffect(() => {
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };
    window.addEventListener('keydown', onKeyDown);
    return () => window.removeEventListener('keydown', onKeyDown);
  }, [onClose]);

  const handleOverlayClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  return (
    <div
      onClick={handleOverlayClick}
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 backdrop-blur-sm"
    >
      <div className="backdrop-blur-xl bg-white/10 border border-white/20 rounded-2xl shadow-2xl max-w-2xl w-full p-6 text-white">
        <button
          onClick={onClose}
          className="cursor-pointer absolute top-2 right-4 text-white hover:text-red-400 text-2xl font-bold"
          aria-label="Закрыть модалку"
        >
          &times;
        </button>
        {children}
      </div>
    </div>
  );
};

export default ModalWrapper;
