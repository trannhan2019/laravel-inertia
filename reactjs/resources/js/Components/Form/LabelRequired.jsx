export default function LabelRequired({ htmlFor, className, value }) {
    return (
        <label
            htmlFor={htmlFor}
            className={
                `block font-medium text-sm text-gray-700 after:content-['*'] after:ml-0.5 after:text-red-500 ` +
                className
            }
        >
            {value ? value : children}
        </label>
    );
}
