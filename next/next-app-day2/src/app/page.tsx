import Image from "next/image";
import styles from "./page.module.css";
import PostList from "./components/PostList";
import Link from "next/link";

//Next에서 만드는 컴포넌트는 기본적으로 server component이다.
export default function Home() {
  const post = {
      title : "첫 번째 게시글",
  }

  const userIds = [1,2,3,4,5];


  return (
    <main 
      style={{
        height : "100vh",
        display : "flex",
        flexDirection : "column",
        justifyContent : "center",
        alignItems : "center",
        gap:16
      }}>
      <h1>메인 페이지</h1>
      {/* props를 전달하지만 props의 타입은 하위 컴포넌트에서 정의 */}
      <PostList post={post}/>

      <h1>상품목록 페이지</h1>
      <p>상품 목록을 확인해보세요</p>
      <Link href="/products">
        상품 목록 보러가기
      </Link>
      <h2>Home</h2>
      <ul>
        <li>
          <Link href="posts/nextjs-routing">/posts/nextjs-routing</Link>
        </li>
        <li>
          <Link href="posts/react-state">/posts/react-state</Link>
        </li>
        <li>
          <Link href="posts/unknown-post">/posts/unknown-post</Link>
        </li>
      </ul>

      <p>유저 상세페이지로 이동해보세요</p>
      <ul>
        {userIds.map((id)=>(
          <li key={id}>
            <Link href={`users/${id}`}>User {id} 보기</Link>
          </li>
        ))}
      </ul>

    </main>
  );
}
