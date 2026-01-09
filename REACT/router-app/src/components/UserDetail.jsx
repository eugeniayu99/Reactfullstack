import { Link, useParams } from "react-router-dom";

const users = [
    {id : 1, name:'김철수', email:'chulsoo@example.com', job:'프론트엔드 개발자'},
    {id : 2, name:'이영희', email:'younghee@example.com',  job:'백엔드 개발자'},
    {id : 3, name:'박민준', email:'minjun@example.com',  job:'UX 디자이너'}
]

// /users/:id
export default function UserDetail(){
    //1. useParams() 훅을 이용해서 URL 파라미터를 가져온다.
    const {id}  = useParams();

    //파라미터로 받은 id를 숫자로 변환하여 사용자 데이터를 찾는다.
    const user = users.find(u => u.id === parseInt(id));

    return(
        <div>
            <h2>사용자 상세 정보(ID : {user.id})</h2>
            <p>이름 : {user.name}</p>
            <p>이메일 : {user.email}</p>
            <p>직업 : {user.job}</p>
        </div>
    )
}
