import './Cards.css'
import PillBotton from './PillBotton';
import Form from '../Forms/Form'
import Login from '../Login/Login'
function Cards(){
    let myestilos =[
        "flex",
        "justify-center",
        "border-4"
        ,"mx-auto"
        ,"lg:mt-24","md:my:auto"
        ,"lg:w-1/4","md:w-1/2",
        "h-auto",
        "items-center",
        "justify-center",
        "text-center",
        "bg-gray-100",
        "rounded-lg",
        "border-double","border-opacity-75","shadow-lg",
        "flex-wrap"
    ];


    return(
        <section className={myestilos.join(" ")}>
            <img className="w-1/2 mt-4" src="http://cdn.onlinewebfonts.com/svg/img_258083.png"  />
            <h2 className="font-mono text-4xl mt-8 w-full ">Login</h2>
            <section>
                <Login></Login>
            </section>

        </section>
    );
}
/*
           <p>Lore,asdsad adsasd gfasdwv dgasd s3w rwq sdadwqe ewq  </p>
            <div>
                <PillBotton text="Accion A" type="submit" click={(e)=> {alert("Click A");}}></PillBotton>
                <PillBotton text="Accion B" type="submit" click={(e)=> {alert("Click B");}}></PillBotton>
            </div>
*/ 
export default Cards;