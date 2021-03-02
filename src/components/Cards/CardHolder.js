import './Cards.css';
function CardHolder({children}){
    return(
        <section className="CardHolder lg:m-auto my-8 ">
            {children}
        </section>
    );
}
export default CardHolder;

