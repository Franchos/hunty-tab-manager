import React, { FC } from "react";

const CantAddTab: FC = () => {
  return (
    <div className="flex justify-center items-center gap-2">
      <img src="icon-cat.png" className="h-6 w-6" />
      <h1 className="text-sm text-white text-center">
        You cannot add this tab to Hunty, dummie
      </h1>
    </div>
  );
};

export default CantAddTab;
