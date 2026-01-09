import Link from "next/link"

export default function ProductsPage(){
    const Products = [
        {id : 1, name : "노트북"},
        {id : 2, name : "마우스"},
        {id : 3, name : "키보드"},
    ]

    return(
        <main>
            <h1>상품목록</h1>
            <ul>
                {Products.map(product => (
                    <li key={product.id}>
                        <Link href={`/products/${product.id}`}>
                            {product.name}
                        </Link>
                    </li>
                ))}
            </ul>
        </main>
    )
}