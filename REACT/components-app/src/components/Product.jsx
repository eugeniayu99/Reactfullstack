const Product = (props) => {
    const formattedPrice = props.price.toLocaleString();
    return(
        <div>
            <h3>{props.name}</h3>
            <p>{formattedPrice}</p>
        </div>
    )
}

export default Product;