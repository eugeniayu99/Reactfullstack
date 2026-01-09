import { notFound } from "next/navigation";

interface PostPageProps {
    params : Promise<{postId:string}>;
}

async function fetchPost(postId:string) {
    //네트워크 통신을 흉내
    await new Promise((r) => setTimeout(r,300));

    //Record<K,T>
    //키타입 K와 값 타입 T로 이루어진 객체
    const DB: Record<string,{title:string; content:string}> = {
        "nextjs-routing":{
            title:"Next.js Routing의 이해",
            content : "동적 라우팅에서 params가 어떻게 들어오는지 실습"  
        },
        "react-state":{
            title:"React-state 기초",
            content:"useState 개념을 간단히 정리한다."
        },
    };

    return DB[postId] ?? null;
}

export default async function PostPage({params}: PostPageProps) {
    //params 추출하기
    const {postId} = await params;

    //서버에서 async 데이터 fetching
    const post = await fetchPost(postId);

    //서버에서 넘어온 내용이 없으면 404
    if(!post) return notFound();

    return(
        <main style={{padding:24}}>
            <h1>Post Detail</h1>
            <p>URL에서 받은 postId : <b>{postId}</b></p>
            <hr />
            <h2>{post.title}</h2>
            <p>{post.content}</p>
            <hr />
            <p>params 객체 확인</p>
            <pre style={{ background: "#f5f5f5", padding: 12 }}>
                {JSON.stringify({postId}, null, 2)}
            </pre>
        </main>
    );
}