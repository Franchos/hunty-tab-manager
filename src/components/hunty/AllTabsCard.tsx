import React, { FC, useState } from "react";
// import Clock from "./Clock";
// import ButtonsPop from "./ButtonsPop";
import { useMetaog } from "../../hooks/useMetaog";
import colorPicked from "../../hooks/colorPicked";
import { goToOptions } from "../../hooks/buttonsPopup";

export interface TabProps {
  actualTab: chrome.tabs.Tab;
  setEditButton?: (a: boolean) => void;
  editButton?: boolean;
}

const AllTabsCard: FC<TabProps> = ({ actualTab }) => {
  const [title, setTitle] = useState(actualTab.title);
  const [booleani, setBoolean] = useState(true);
  // console.log(booleani);

  // const { metaState } = useMetaog(actualTab?.url);

  const [https, _, domain, rest] = actualTab?.url.split("/");

  const { metaState } = useMetaog(actualTab?.url);

  const { data: backgroundColorCard } = colorPicked(actualTab.favIconUrl);

  return (
    <div className="gap-0 items-center">
      <div
        style={{ borderColor: backgroundColorCard?.hex }}
        className={` bg-neutral border-current border-0 border-l-2 container flex justify-center items-center  rounded-lg rounded-l-none  w-[250px] h-[50px]`}
      >
        <div className="flex gap-2 w-full items-center justify-start text-center px-4">
          <img src={actualTab.favIconUrl} className="h-6 w-6" />
          <span className="truncate select-none">{actualTab.title}</span>
        </div>
      </div>
    </div>
  );
};

export default AllTabsCard;
