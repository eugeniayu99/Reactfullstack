import Link from "next/link";

export default function AboutPage(){
    return(
        <div style={{padding : '20px', backgroundColor:'#f0f0f0'}}>
            <h1>소개페이지(About)</h1>
            <p>이 페이지는'/about' 경로를 통해 접근된다.</p>

            {/* 메인 페이지로 돌아가는 링크 */}
            <p>
                <Link href="/" style={{color:'green', textDecoration:'underline'}}>
                    메인페이지로 돌아가기
                </Link>
            </p>
        </div>
    )
}