import React from "react";

export default function Label({ htmlFor, className, value, children }) {
    return (
        <div>
            <label
                htmlFor={htmlFor}
                className={
                    `block font-medium text-sm text-gray-700 ` + className
                }
            >
                {value ? value : children}
            </label>
        </div>
    );
}
