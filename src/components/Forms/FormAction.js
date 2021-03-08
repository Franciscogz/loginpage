function FormAction({caption, onClick}) {
    let myClasses = [
        "w-full",
        "flex",
        "items-center",
        "justify-center",
        "px-8",
        "py-4",
        "border",
        "border-transparent",
        "text-base",
        "font-medium",
        "rounded-lg",
        "text-white",
        "text-yellow-100",
        "bg-yellow-800",
        "hover:bg-yellow-100",
        "hover:text-yellow-800",
        "md:py-4",
        "md:text-lg",
        "md:px-10",
        "my-2"
    ];
    return(
        <button
        onClick={onClick}
        className={myClasses.join(" ")}
        >
            {caption}
        </button>

    );

}

export default FormAction;