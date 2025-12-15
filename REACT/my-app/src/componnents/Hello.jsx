// 일반 형태의 함수로 작성해도 되고, 요즘에는 화살표 함수로 많이 작성한다.
const Hello = () => {
    return (
        <div>
            <h2>Hello Component</h2>
            <p>이것은 함수형 컴포넌트입니다.</p>
        </div>
    )
}

// export + default(기본 내보내기) : 가장 많이 쓰니는 방식
export default Hello;