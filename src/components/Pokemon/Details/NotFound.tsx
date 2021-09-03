import React from 'react';

type Props = {
  className: string;
};

function NotFound({ className }: Props) {
  return <div className={className}>Pokemon Not Found!</div>;
}

export default NotFound;
