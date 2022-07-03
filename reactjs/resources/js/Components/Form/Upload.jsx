import React from "react";

export default function Upload({ value, handleChange, name }) {
    React.useEffect(() => {
        console.log(handleChange());
    });
    return (
        <div className="flex flex-col items-start">
            <input
                name={name}
                className="block w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 cursor-pointer dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400"
                id="file_input"
                type="file"
                value={value}
            ></input>
        </div>
    );
}
