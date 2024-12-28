import React from "react";

const ListItem = ({ NavLink, children }) => {
  return (
    <li className="group">
      <a
        href={NavLink}
        className="flex py-2 text-base font-medium text-dark hover:text-primary dark:text-white lg:ml-10 lg:inline-flex"
      >
        {children}
      </a>
    </li>
  );
};

export default ListItem;
