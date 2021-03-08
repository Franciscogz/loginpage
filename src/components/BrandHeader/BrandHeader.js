import NavBar from "../NavBars/NavBar";
import Brand from "./Brand";
import "./Brand.css"
function BrandHeader({children}) {
    return(
        <header>
            <Brand title="Gols List" ></Brand>
            <NavBar></NavBar>
        </header>
    );
}
export default BrandHeader;