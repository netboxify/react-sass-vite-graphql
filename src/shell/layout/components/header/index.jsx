import React from "react";

import "./header.scss";

const Header = () => {
  return (
    <nav>
      <div className="left">
        <p>
          $55.555 <span>This month</span>
        </p>
      </div>
    </nav>
  );
};

export default Header;
