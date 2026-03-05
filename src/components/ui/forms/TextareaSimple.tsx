'use client';

interface TextareaSimpleProps {
    /** Label displayed above the textarea */
    label: string;
    /** HTML id attribute */
    id?: string;
    /** HTML name attribute */
    name?: string;
    /** Number of visible rows (defaults to 4) */
    rows?: number;
    /** Default text value */
    defaultValue?: string;
    /** Placeholder text */
    placeholder?: string;
    /** Change callback */
    onChange?: (value: string) => void;
}

export default function TextareaSimple({
    label,
    id = 'comment',
    name = 'comment',
    rows = 4,
    defaultValue = '',
    placeholder,
    onChange,
}: TextareaSimpleProps) {
    return (
        <div>
            <label
                htmlFor={id}
                className="block text-sm/6 font-medium text-gray-900 dark:text-white"
            >
                {label}
            </label>
            <div className="mt-2">
                <textarea
                    id={id}
                    name={name}
                    rows={rows}
                    defaultValue={defaultValue}
                    placeholder={placeholder}
                    onChange={(e) => onChange?.(e.target.value)}
                    className="block w-full rounded-md bg-white dark:bg-white/5 px-3 py-1.5 text-base text-gray-900 dark:text-white outline-1 -outline-offset-1 outline-gray-300 dark:outline-white/10 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                />
            </div>
        </div>
    );
}
