import React from "react";

import "./dashboard.css";
import Button from "common/components/button";

const Dashboard = () => {
  return (
    <>
      <Button type="primary">Apply</Button>
      <Button type="primary" disabled>
        Apply
      </Button>
      <Button type="secondary">Apply</Button>
      <Button type="secondary" disabled>
        Apply
      </Button>

      <Button type="tertiary">Apply</Button>
      <Button type="tertiary" disabled>
        Apply
      </Button>
    </>
  );
};

export default Dashboard;
