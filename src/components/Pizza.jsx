const Pizza = ({pizaaEle}) => {
    return (
        <li className={`pizza ${pizaaEle.soldOut && 'sold-out'}`}>
            <img src={pizaaEle.photoName} alt={pizaaEle.name} />
            <div>
                <h3>{pizaaEle.name}</h3>
                <p>{pizaaEle.ingredients}</p>
                <span>{pizaaEle.price}</span>
            </div>
        </li>
    );
}

export default Pizza;