import FormField from "../../Forms/FormFields";
import { MdAdd } from "react-icons/md";
function NewTodo({onChange,value,onAddNew} ) {
    return(
        <section className="TodoAddNew">
        <form className="flex justify-center  px-4 items-center border  text-center">
            <FormField
            type="text"
            id="txtNTodo"
            name="txtNTodo"
            onChange={onChange}
            value={value}
            caption="Nueva Lista"
            className=" flex-col m-2  p-2 w-full bg-white outline-black font-mono text-3xl"
            labelClassName="flex"
            onKeyUp={(e)=> {if (e.keyCode == 13) {onAddNew(e);}}}
            
            />
            <MdAdd size={"3rem"} onClick={onAddNew}  className="mt-5 hover:text-yellow-50 " ></MdAdd>
        </form>
    </section>

    );
}
export default NewTodo;