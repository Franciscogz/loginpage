function Form({children}){
    return(
        <form className="flex justify-center p-4 items-center text-left flex-wrap  ">
            {children}
        </form>
    );
}
export default Form;