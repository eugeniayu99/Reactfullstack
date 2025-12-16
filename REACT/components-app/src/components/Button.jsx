// 매개변수 이름은 변수명이라서 아무이름이나 써도 되는데 관례상 props를 많이 쓴다.
// cosnt props = {text : "확인"};
const Button = (props) => {
    return(
        <button>
            {/*props.text ? props.text : "기본 버튼"*/}
            {props.text || "기본 버튼"}
        </button>
    )
}

export default Button;