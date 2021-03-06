// @flow

import React from "react";

export type Props = {
  active: boolean,
  children?: React$Element<any>,
  onClick: () => void,
};

const Link = ({ active, children, onClick }: Props) => {
  if (active) {
    return <span>{children}</span>;
  }

  return (
    <a // eslint-disable-line jsx-a11y/href-no-hash
      href="#"
      onClick={(event: Event) => {
        event.preventDefault();
        onClick();
      }}
    >
      {children}
    </a>
  );
};

export default Link;
