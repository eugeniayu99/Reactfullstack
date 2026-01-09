import { Link } from "react-router-dom";

// Link 컴포넌트
// 사용자가 클릭할 때 해당 경로로 이동시키는 링크를 생성한다.
// HTML의 <a>태그와 유사하지만. 페이지 전체를 다시 로드하지 않고도 URL을 변경하고 해당 경로에 맞는 컴포넌트를 렌더링한다.
function Navbar(){
    return(
        <nav>
            <Link to="/home">홈</Link>
            <Link to="/about">소개</Link>
            <Link to="/users">사용자 목록</Link>
        </nav>
    )
}

export default Navbar;