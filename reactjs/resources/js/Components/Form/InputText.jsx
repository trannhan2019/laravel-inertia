import { useRef, useEffect } from "react";
export default function InputText({
    type = "text",
    name,
    value,
    handleChange,
    className,
    isFocused,
    error,
}) {
    const input = useRef();
    useEffect(() => {
        if (isFocused) {
            input.current.focus();
        }
    }, []);
    return (
        <div className="flex flex-col items-start">
            <input
                className={
                    `border-gray-300 focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 rounded-md shadow-sm ${
                        !!error &&
                        "bg-red-50 border border-red-500 text-red-900"
                    }` + className
                }
                type={type}
                name={name}
                value={value}
                onChange={(e) => handleChange(e)}
                ref={input}
            />
            {Boolean(error) && (
                <p className="mt-2 text-sm text-red-600 dark:text-red-500">
                    <span className="font-medium">Oops!</span> {error}
                </p>
            )}
        </div>
    );
}
