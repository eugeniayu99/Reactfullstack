import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Button from './components/Button'
import Counter from './components/Counter'
import Student from './components/Student'
import Box from './components/Box'
import CardList from './components/CardList'
import Card from './components/Card'
import Title from './components/Title'
import UserCard from './components/UserCard'
import Product from './components/Product'

function App() {
  const totalCount = 3;
  return (
    <>
      {/* Props 전달하기 HTML의 속성을 지정하듯시 원하는 데이터를 key-value 쌍으로 전달을 한다. */}
      <Button text="확인"/>
      <Button />
      {/* JSX에서 중괄호에 숫자를 넣으면 정수로 전달된다. */}
      <Counter count={10} />
      <Counter count={totalCount} />
      <Student name="Kim" age={30} isStudent={true} />
      <Student />
      <Box style={{
        width:"600px", 
        border:"1px solid #ccc", 
        backgroundColor:"#f9f9f9",
        borderRadius:"8px"
      }}/>
      <CardList />
      <Card>
        <h1>공지사항</h1>
        <p>오늘은 휴강입니다.</p>
      </Card>
      <Title title="제목"/>
      <UserCard name="유진" age={29}/>
      <Product name="상품 1" price={150000}/>
      <Product name="상품 2" price={3845000}/>
      <Product name="상품 3" price={685020}/>
    </>
  )
}

export default App
