import React, { FC, useState } from "react";
// import Clock from "./Clock";
import ButtonsPop from "../popup/ButtonsPop";
import { useMetaog } from "../../hooks/useMetaog";
import colorPicked from "../../hooks/colorPicked";
import { goToOptions } from "../../hooks/buttonsPopup";

export interface TabProps {
  actualTab: chrome.tabs.Tab;
  setEditButton?: (a: boolean) => void;
  editButton?: boolean;
}

const CollectionTab: FC<TabProps> = ({ actualTab }) => {
  const [title, setTitle] = useState(actualTab.title);
  const [booleani, setBoolean] = useState(true);
  // console.log(booleani);

  // const { metaState } = useMetaog(actualTab?.url);

  const [https, _, domain, rest] = actualTab?.url.split("/");

  const { metaState } = useMetaog(actualTab?.url);

  const { data: backgroundColorCard } = colorPicked(actualTab.favIconUrl);

  return (
    <div className="flex flex-col gap-3 items-center ">
      <div className="flex flex-col gap-0">
        <div className={`px-2 pt-2 pb-1 bg-neutral w-min rounded-t-lg`}>
          <ButtonsPop
            actualTab={actualTab}
            setEditButton={setBoolean}
            editButton={booleani}
          />
        </div>
        <div
          className={`container flex flex-col items-center bg-neutral rounded-lg rounded-tl-none w-[300px] h-auto transition-all duration-75`}
        >
          <div className="w-[270px] h-5 mx-5 my-2 bg-base-100 rounded-xl flex justify-start items-center text-center pl-2 gap-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              className="w-3 h-3 text-info"
            >
              <path
                fillRule="evenodd"
                d="M10 1a4.5 4.5 0 00-4.5 4.5V9H5a2 2 0 00-2 2v6a2 2 0 002 2h10a2 2 0 002-2v-6a2 2 0 00-2-2h-.5V5.5A4.5 4.5 0 0010 1zm3 8V5.5a3 3 0 10-6 0V9h6z"
                clipRule="evenodd"
              />
            </svg>
            <input
              className="pr-3 bg-transparent rounded-xl h-5 w-full text-xs border-transparent outline-none truncate disabled read-only:text-white"
              value={actualTab.url}
            ></input>
          </div>
          <div className="flex gap-2 w-full items-center justify-center text-center">
            <img src={actualTab.favIconUrl} className="h-6 w-6" />
            <input
              id="focusTitle"
              type="text"
              placeholder={actualTab.title}
              value={title}
              onFocus={() => {
                setBoolean(false);
              }}
              // onBlur={() => {
              //   setBoolean(true);
              // }}
              onChange={(e) => {
                setTitle(e.target.value);
              }}
              className="input input-ghost transition ease-in-out rounded-sm bg-transparent input-xs my-1 w-auto truncate"
            />
          </div>

          {/* <div className="h-[60px] w-[95%] bg-base-100 rounded-sm flex items-center overflow-ellipsis overflow-y-auto whitespace-normal">
            <p className="text-xs">{metaState.data.description}</p>
          </div> */}
          <div
            style={{ backgroundColor: backgroundColorCard?.hex }}
            className="container flex h-[95px] w-[95%] m-2 bg-current rounded-sm py-2 px-4 gap-2 items-center"
          >
            <div className="flex w-1/2 h-full flex-col justify-evenly">
              <div className="w-1/2 h-1 rounded-lg bg-base-100"></div>
              <div className="w-full h-1 rounded-lg bg-base-100"></div>
              <div className="w-full h-1 rounded-lg bg-base-100"></div>
              <div className="w-full h-1 rounded-lg bg-base-100"></div>
            </div>
            {metaState?.data?.images[0]!! ? (
              <div
                style={{
                  backgroundImage: `url(${metaState?.data?.images[0]})`,
                }}
                className={`w-[120px] h-[75px] bg-base-100 bg-cover bg-center rounded-md `}
              ></div>
            ) : (
              <button className="btn loading h-[75px] bg-base-100 rounded-md w-[120px]"></button>
            )}
          </div>
        </div>
      </div>
      {/* <Clock /> */}
      {/* <button className="btn btn-sm bottom-0 text-white" onClick={goToOptions}>
        Go play with tabs!
      </button> */}
    </div>
  );
};

export default CollectionTab;
