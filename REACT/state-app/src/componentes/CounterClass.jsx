import { Component } from "react"

class CounterClass extends Component {
  constructor(props) {
    super(props);
    // 1. 상태(state) 정의: this.state 객체 사용
    this.state = {
      count: 0
    };
    // 2. 이벤트 핸들러 바인딩 (this를 연결)
    this.handleClick = this.handleClick.bind(this); 
  }

  // 3. 상태 업데이트 메서드
  handleClick() {
    this.setState({
      count: this.state.count + 1
    });
  }

  render() {
    return (
      <div>
        <h2>클래스 컴포넌트 카운터</h2>
        <p>현재 숫자: {this.state.count}</p>
        <button onClick={this.handleClick}>
          + 1 증가
        </button>
      </div>
    );
  }
}