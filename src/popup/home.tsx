import React, { FC, useEffect, useState } from "react";
import AddTab from "../components/popup/AddTab";
import CantAddTab from "../components/popup/CantAddTab";
import { goToOptions } from "../hooks/buttonsPopup";

const Home: FC = () => {
  const [actualTab, setActualTab] = useState<chrome.tabs.Tab>();

  useEffect(() => {
    chrome.tabs.query({ active: true, lastFocusedWindow: true }, (tab) => {
      setActualTab(tab[0]);
    });
  }, []);

  return (
    <div className="bg-base-100 w-screen h-screen flex flex-col justify-center items-center gap-2">
      {actualTab ? (
        actualTab.url.includes("chrome://extensions/") ||
        actualTab.url.includes("chrome-extension://") ||
        actualTab.url.includes("chrome://") ? (
          <CantAddTab />
        ) : (
          <>
            <AddTab actualTab={actualTab} />
            <button
              className="btn btn-sm bottom-0 text-white"
              onClick={goToOptions}
            >
              Go play with tabs!
            </button>
          </>
        )
      ) : null}
    </div>
  );
};

export default Home;
