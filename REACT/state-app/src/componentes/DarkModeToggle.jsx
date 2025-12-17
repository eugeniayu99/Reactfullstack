import { useState } from "react";

export default function DarkModeToggle(){
    const [isDark, setIsDark] = useState(true);

    return(
        <div style={{
            width:"400px",
            height:"300px",
            background: isDark ? "#111" : "#fff",
            color: isDark ? "#fff" : "#111",
            margin:"20px auto",
            padding:"50px"
        }}>
            <p>{isDark ? "다크모드" :"라이트모드"}</p>
            <button 
                style={{
                    marginTop:"80px",
                    background: isDark ? "#fff" : "#111",
                    color: isDark ? "#111" : "#fff",
                }}
                onClick={()=>{
                    setIsDark(prev => !prev);
                }}
            >
                change
            </button>
        </div>
    );
};