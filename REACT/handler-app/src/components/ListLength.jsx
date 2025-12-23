import { useState } from "react";

export default function ListLengthExample() {
  const [items, setItems] = useState([]);
  const [text, setText] = useState("");

  function add() {
    const title = text.trim();
    if (!title) return; // 빈값이면 추가 안함

    setItems((prev) => [...prev, { id: Date.now(), title }]);
    setText("");
  }

  function clear() {
    setItems([]);
    setText("");
  }

  return (
    <div style={styles.page}>
      <h2 style={styles.h2}>배열 길이 기반 분기</h2>

      <div style={styles.row}>
        <input
          style={styles.input}
          value={text}
          onChange={(e) => setText(e.target.value)}
          placeholder="항목을 입력한다."
        />
        <button style={styles.btn} onClick={add}>
          추가
        </button>
        <button style={styles.btn} onClick={clear}>
          전체삭제
        </button>
      </div>

      {items.length === 0 ? (
        <div style={styles.card}>결과 없음</div>
      ) : (
        <List items={items} />
      )}
    </div>
  );
}

function List({ items }) {
  return (
    <div style={styles.card}>
      <ul style={styles.ul}>
        {items.map((it) => (
          <li key={it.id}>{it.title}</li>
        ))}
      </ul>
    </div>
  );
}

const styles = {
  page: { fontFamily: "sans-serif", padding: 20 },
  h2: { margin: "0 0 10px 0" },
  row: { display: "flex", gap: 8, margin: "12px 0", flexWrap: "wrap" },
  card: { padding: 16, border: "1px solid #ddd", borderRadius: 12, maxWidth: 520 },
  btn: { padding: "10px 12px", border: "1px solid #bbb", borderRadius: 10, background: "white" },
  input: { flex: 1, padding: "10px 20px", border: "1px solid #bbb", borderRadius: 10 },
  ul: { margin: 0, paddingLeft: 18, lineHeight: 1.8 },
};
