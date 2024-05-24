import Pizza from "./Pizza";

const Menu = ({pizzaData}) => {
    return (
        <main className="menu">
            <h2>our menu</h2>
            <p>
                Authentic Italian cuisine. 6 creative dishes to choose from.
                All from our stone oven, all organic, all delicious.
            </p>
            <ul className="pizzas">
            {pizzaData.map(pizaaEle=> <Pizza pizaaEle={pizaaEle} key={pizaaEle.name} />)}
                
            </ul>

        </main>
    );
}

export default Menu;