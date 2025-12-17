import { useState } from "react";

export default function TwoInputs() {
    const [email, setEmail] = useState("");
    const [password, setpassword] = useState("");

    return( 
        <div style={{margin:"50px"}}>
            <input 
                type="email"
                placeholder="이메일 입력"
                value={email}
                onChange={(e)=>{
                    setEmail(e.target.value);
                }}
            />
            <input 
                type="password"
                placeholder="비밀번호 입력"
                value={password}
                onChange={(e)=>{
                    setpassword(e.target.value);
                }}
            />

            <p>email : {email} Password  : {password}</p>
        </div>
    );
};

