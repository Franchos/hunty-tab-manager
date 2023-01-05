import React, { FC, useEffect, useState } from "react";
import "../styles/tailwind.css";
import { createRoot } from "react-dom/client";
import AllTabsCard from "../components/hunty/AllTabsCard";
import AddTab from "../components/popup/AddTab";
import CollectionTab from "../components/hunty/CollectionTab";

const Hunty: FC = () => {
  const [manyTabs, setManyTabs] = useState<chrome.tabs.Tab[]>();

  useEffect(() => {
    chrome.tabs.query({}, (allTabs) => {
      const result = allTabs.filter(
        (tab) =>
          !tab.url.includes("chrome://extensions/") &&
          !tab.url.includes("chrome-extension://") &&
          !tab.url.includes("chrome://")
      );
      setManyTabs(result);
    });
  }, []);

  return (
    <div className="h-screen w-screen bg-base-200 p-2">
      <div className="flex h-full w-full border-2 rounded-lg border-neutral bg-base-100">
        {/*  */}
        <div className=" h-full w-[300px] flex flex-col items-center border-r-2 border-r-neutral">
          <div className="flex justify-center items-center border-b-neutral border-b-2 w-full h-[4.3rem] gap-3">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M12 6.042A8.967 8.967 0 006 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 016 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 016-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0018 18a8.967 8.967 0 00-6 2.292m0-14.25v14.25"
              />
            </svg>

            <p className="text-sm font-semibold">OPEN TABS</p>
          </div>
          <div className="w-[300px] h-full flex flex-col gap-3 items-center py-3 overflow-y-auto">
            {manyTabs
              ? manyTabs.map((eachTab, i) => (
                  <AllTabsCard key={i} actualTab={eachTab} />
                ))
              : null}
          </div>
        </div>

        {/*  */}
        <div className=" w-full h-full flex-col">
          <div className="flex justify-between items-center border-b-neutral border-b-2 w-full h-16 px-6">
            <div className="flex justify-center items-center gap-3">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M17.593 3.322c1.1.128 1.907 1.077 1.907 2.185V21L12 17.25 4.5 21V5.507c0-1.108.806-2.057 1.907-2.185a48.507 48.507 0 0111.186 0z"
                />
              </svg>
              <p className="text-sm font-semibold">COLLECTIONS</p>
            </div>
            <button className="btn btn-sm btn-primary gap-1 ">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M12 9v6m3-3H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
              Add Collection
            </button>
          </div>
          <div className="border-b-neutral border-b-2">
            <p className="text-lg font-semibold m-4">Everyday</p>
            <div className="flex justify-center border-[1px] border-neutral border-dashed rounded-md m-4 p-4 ">
              <div className="grid 2xl:grid-cols-4 xl:grid-cols-3 lg:grid-cols-2 md:grid-cols-1 sm:grid-cols-1 gap-4 ">
                {/* <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4"> */}
                {manyTabs
                  ? manyTabs
                      .slice(0, 5)
                      .map((eachTab, i) => (
                        <CollectionTab key={i} actualTab={eachTab} />
                      ))
                  : null}
              </div>
            </div>
          </div>
          <div className="border-b-neutral border-b-2">
            <p className="text-lg font-semibold m-4">Spare Time</p>
            <div className="flex justify-center border-[1px] border-neutral border-dashed rounded-md m-4 p-4 ">
              <p className="text-xs text-neutral">
                This collection is empty. Drag tabs here.
              </p>
            </div>
          </div>
        </div>
        {/*  */}

        {/* <div className="border-l-neutral border-l-2 w-1/3 h-full flex-col">
          <div className="flex justify-center gap-3 items-center border-b-neutral border-b-2 w-full h-16">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>

            <p className="text-sm font-semibold">CLOCK</p>
          </div> */}
        {/* </div> */}
      </div>
    </div>
  );
};

const container = document.createElement("div");
document.body.appendChild(container);
const root = createRoot(container);
root.render(<Hunty />);
