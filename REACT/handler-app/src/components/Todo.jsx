import { useState } from "react";

export default function Todo(){
    const [text, setText] = useState("");
    const [todos, setTodos] = useState([
        {id: 1, title:"React 이벤트 연습하기", done:false},
        {id: 2, title:"조건부 렌더링 연습하기", done:false},
    ]);
    const [filter, setFilter] = useState("all");
    const [status, setStatus] = useState("success");

    const handleAdd = () => {
        const title = text.trim();
        if (!title) return;

        const newTodo = {id: Date.now(), title, done:false};

        setTodos((prev) => [newTodo, ...prev]);
        setText("");
    };

    const handleToggle = (id) => {
        setTodos((prev) => 
            prev.map((t) => (t.id === id ? {...t, done: !t.done} : t))
        );
    }

    return(
        <div>
            <input value={text} onChange={(e) => setText(e.target.value)} />
            <p>{text}</p>
            <ul>
                {todos.map((t)=>(
                    <li key={t.id}>{t.title}</li>
                ))}
            </ul>
        </div>
    )

}