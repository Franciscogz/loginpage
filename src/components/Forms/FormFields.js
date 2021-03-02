function FormFields({type, id, fname, onChange, caption, value,error, ...attr}) {
    return(
        <section className="w-full text-center font-mono">
            <label>{caption}</label>
            <input class="border-gray-200 border flex w-full"
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