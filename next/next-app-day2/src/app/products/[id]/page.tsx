interface ProductDetailPageProps{
    params:Promise<{
        id:string;
    }>
}
//Next.js에서 params가 즉시 넘어오는게 아니라 Promise로 넘어오기 때문에 async/await을 써야한다.
//App router에서 Server Component를 비동기 기준으로 동작을 시킨다.
export default async function ProductDetailPage({params} :ProductDetailPageProps){
    const {id} = await params;
    return(
        <main style={{padding:24}}>
            <h1>상품 상세 페이지</h1>
            <p>상품 ID : {id}</p>
        </main>
    )
}