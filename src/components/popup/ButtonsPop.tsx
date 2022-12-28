import React, { FC, useEffect } from "react";
import { TabProps } from "./AddTab";
import { closeTab } from "../../hooks/buttonsPopup";

const ButtonsPop: FC<TabProps> = ({ actualTab, editButton, setEditButton }) => {
  return (
    <div className="flex gap-3">
      <button className="btn btn-circle btn-xs btn-success  ">
        <svg
          className="h-5 w-5 text-white"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          strokeWidth="2"
          stroke="currentColor"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path stroke="none" d="M0 0h24v24H0z" />
          <line x1="12" y1="5" x2="12" y2="19" />
          <line x1="5" y1="12" x2="19" y2="12" />
        </svg>
      </button>
      {editButton ? (
        <button
          className="btn btn-circle btn-xs btn-warning"
          onClick={() => {
            setEditButton(false);
            document.getElementById("focusTitle").focus();
          }}
        >
          <svg
            className="w-4 h-4 text-white"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2.5"
              d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z"
            ></path>
          </svg>
        </button>
      ) : (
        <button
          className="btn btn-circle btn-xs btn-warning"
          onClick={() => {
            setEditButton(true);
            document.getElementById("focusTitle").blur();
          }}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            className="w-4 h-4 text-white"
          >
            <path
              strokeWidth="2.5"
              fillRule="evenodd"
              d="M19.916 4.626a.75.75 0 01.208 1.04l-9 13.5a.75.75 0 01-1.154.114l-6-6a.75.75 0 011.06-1.06l5.353 5.353 8.493-12.739a.75.75 0 011.04-.208z"
              clipRule="evenodd"
            />
          </svg>
        </button>
      )}
      <button
        className="btn btn-circle btn-xs btn-error"
        onClick={() => {
          closeTab(actualTab.id);
        }}
      >
        <svg
          className="w-4 h-4 text-white"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="3"
            d="M6 18L18 6M6 6l12 12"
          ></path>
        </svg>
      </button>
    </div>
  );
};

export default ButtonsPop;
