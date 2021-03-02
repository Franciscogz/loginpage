import NavBar from "../NavBars/NavBar";
import Brand from "./Brand";
import "./Brand.css"
function BrandHeader({children}) {
    return(
        <header>
            <Brand title="Mi App con"></Brand>
            <NavBar></NavBar>
        </header>
    );
}
export default BrandHeader;