import Image from "next/image";
import styles from "./page.module.css";
import Link from "next/link";

export default function Home() {
  return (
    <div className={styles.page}>
      <h1>메인 페이지(home)</h1>
      <p>여기는 웹사이트의 시작점입니다.</p>
      <p>
        <Link href="/about" style={{color:'blue', textDecoration:'underline'}}>
          소개 페이지로 이동
        </Link>
        <br/><hr/>
        <Link href="/profile" style={{color:'pink', fontWeight:'bold'}}>
          프로필 확인
        </Link>
      </p>
    </div>
  );
}
