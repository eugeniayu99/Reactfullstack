const ProductCard = ({imageUrl, name, price}) => {
    // 금액을 포맷팅하는 매서드 (15000 -> 15,000)
    const formattedPrice = price.toLocaleString();
    return(
        <div style={{
            border:'1px solid #ddd',
            padding: '15px',
            width: '200px',
            margin: '10px'
        }}>
            {/* 상품 이미지 */}
            <img src={imageUrl} alt={name} style={{
                width:'100%',
                height:'150px',
                objectFit:'cover'
            }}/>
            {/* 상품명 표시 */}
            <h4>{name}</h4>
            {/* 가격표시 */}
            <p style={{
                fontWeight:'bold',
                color:'green'
            }}>{formattedPrice}원</p>

            <button style={{width:'100%', padding:'5px'}}>장바구니 담기</button>
        </div>    
        
    )
};

export default ProductCard;