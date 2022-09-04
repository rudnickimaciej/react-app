import React from "react";
import { Layout } from "../layout/layout";

export const Pet: React.FC<{ id: Number }> = (props) => {
  return (
    <Layout>
      <div>
        <p>Pet</p>
      </div>
    </Layout>
  );
};
