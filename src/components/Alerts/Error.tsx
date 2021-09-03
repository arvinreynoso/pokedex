import React from 'react';

type Props = {
  children: React.ReactNode;
  onClose: React.MouseEventHandler<HTMLButtonElement>;
};

function Error({ children, onClose }: Props) {
  return (
    <div className="error absolute bg-red-500 p-2 rounded-xl border-black border-2 flex items-center z-30 bottom-4">
      <span className="flex-1">{children}</span>
      <button onClick={onClose}>
        <svg
          width="24"
          height="24"
          viewBox="0 0 386.667 386.667"
          xmlns="http://www.w3.org/2000/svg">
          <path d="m386.667 45.564-45.564-45.564-147.77 147.769-147.769-147.769-45.564 45.564 147.769 147.769-147.769 147.77 45.564 45.564 147.769-147.769 147.769 147.769 45.564-45.564-147.768-147.77z" />
        </svg>
      </button>
    </div>
  );
}

export default Error;
