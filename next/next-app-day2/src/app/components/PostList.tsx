import LikeButton from "./LikeButton";

//post 객체의 구조를 정의
interface Post{
    title : string;
}

//이 컴포넌트가 받을 props의 타입을 정의
interface PostListProps{
    post:Post;
}

//Server Component
export default function PostList({post} : PostListProps){
    return(
        <div>
            {/* 서버에서 렌더링 될 JSX */}
            <h3>{post.title}</h3>
            <LikeButton />
        </div>
    )

}