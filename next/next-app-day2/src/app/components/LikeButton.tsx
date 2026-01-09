"use client"
import { useState } from "react";

//클라이언트 컴포넌트의 본질
//사용자와 상호작용하는 UI
//보통 다음과 같은 책임을 가진다.
//클릭이 가능하다. / 이벤트를 처리한다. / 상태를 가진다. / 브라우저에서 즉시 반응해야 한다.

export default function LikeButton(){
    const [count, setCount] = useState<number>(0);
    
    // 버튼 눌렀을 때 count state가 1씩 증가하도록 만들기
    return <button onClick={()=>{ setCount(prev => prev + 1) }}>❤️ 좋아요 {count}</button>

}