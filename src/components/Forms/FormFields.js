function FormFields({type, id, fname, onChange, caption, value,error,labelClassName, ...attr}) {
    return(
        <section className="font-mono justify-items-start flex m-4 w-full flex-wrap" >
            <label className={labelClassName} className="w-full text-center">{caption}</label>
            <input class=" border flex w-full h-12"
            type={type}
            id={id}
            name={fname}
            onChange={onChange}
            value={value}
            {...attr}
            />
            {(error && true)? (<section>{error}</section>):null}
        </section>
    );
}
export default FormFields;