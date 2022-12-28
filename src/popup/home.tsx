import React, { FC, useEffect, useState } from "react";
import AddTab from "../components/popup/AddTab";
import CantAddTab from "../components/popup/CantAddTab";

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
        actualTab.url ===
          "chrome-extension://nidhbdhncaappiljdecmmmmpokffcbdf/hunty.html" ||
        actualTab.url ===
          "chrome-extension://nidhbdhncaappiljdecmmmmpokffcbdf/popup.html" ||
        actualTab.url === "" ? (
          <CantAddTab />
        ) : (
          <AddTab actualTab={actualTab} />
        )
      ) : null}
    </div>
  );
};

export default Home;
