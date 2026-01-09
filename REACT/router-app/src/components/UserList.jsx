import { Link } from "react-router-dom";

const users = [
    {id : 1, name:'김철수', email:'chulsoo@example.com'},
    {id : 2, name:'이영희', email:'younghee@example.com'},
    {id : 3, name:'박민준', email:'minjun@example.com'}
]
    

function UserList(){
    return(
        <div>
            <h2>사용자 목록</h2>
            <ul>
                {users.map(user => (
                    <li key={user.id}>
                        <Link to={`/users/${user.id}`}>{user.name}</Link>
                    </li>
                ))}
            </ul>
            <p>목록에서 이름을 클릭하여 상세 페이지로 이동해주세요.</p>
        </div>
    )
}

export default UserList;