import React, { useState } from "react"
import {v4} from 'uuid';

export const Filter = ({options, btnText}) => {
    const [visible, toggleVisible] = useState("hidden");
    return (
        <div className="relative">
            <button onClick={() => {
                toggleVisible(visible == "hidden" ? "block" : "hidden");
            }} className="align-top mx-2 text-slate-500 font-semibold border-2 border-slate-300 rounded-3xl px-3 py-1" type="button">{btnText}<svg className="w-4 h-4 ml-2 inline-block" aria-hidden="true" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path></svg></button>
            {/* <!-- Dropdown menu --> */}
            <div className={`overflow-y-auto z-10 ${visible} max-h-96 absolute bg-white divide-y divide-gray-100 rounded-lg shadow w-max dark:bg-gray-700 p-4`}>
                <ul className="py-1 text-sm text-gray-700 dark:text-gray-200">
                    {
                        options.map((option)=>(
                        <li key={v4()} className="p-2 hover:bg-gray-200 rounded">
                            <input id="link-checkbox" type="checkbox" value={option.value ? option.value : "all"} className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"></input>
                            <span className="text-lg mx-2 font-thin">{option.text}</span>
                        </li>))
                    }
                </ul>
            </div>
        </div>)
}