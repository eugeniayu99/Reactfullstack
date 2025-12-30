import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import LoginButton from './components/LoginButton/LoginButton'
import DeleteButton from './components/DeleteButton/DeleteButton'
import Box from './components/Box/Box'
import Card from './components/Card/Card'
import Example from './components/Example'
import StyledButton from './components/Card/StyledButton'
import ExtendingExample from './components/Card/ExtendingExample'
import { ThemeProvider } from 'styled-components';
import ThemeButton from './components/Button'
import PrimaryTitle from './components/PrimaryTitle'
import DynamicButton from './components/DynamicButton'
import { BaseCard, ElevatedCard } from './components/BaseCard'


function App() {

    
  const theme = {
    mainColor: 'mediumseagreen',
    secondaryColor: 'teal',
  };

  return (
    <>
      <LoginButton />
      <DeleteButton />

      <div style={{padding : 20}}>
        <Box />
        <Box highlight />
        <Box fullWidth />
        <Box highlight fullWidth/>
        <Card 
          title = "기본 카드"
          content = "CSS Module로 기본 스타일을 적용한 카드"
        />
        <Card 
          title = "경고 카드"
          content = "Variant='danger'일 때 스타일이 분기되어야 한다."
          variant='danger'
        />
        <Card 
          title = "강조 + 전체 너비 카드"
          content = "highlight와 fullWidth를 동시에 적용하는 카드"
          highlight = {true}
          fullWidth = {true}
        />
        <Example/>
        <StyledButton>일반버튼</StyledButton>
        <StyledButton primary>주요버튼</StyledButton>
        <ExtendingExample />

        <ThemeProvider theme={theme}>
          <ThemeButton>테마 색상 버튼</ThemeButton>
        </ThemeProvider>

        <PrimaryTitle>
          styled-components 강의 실습 시작
        </PrimaryTitle>

        <DynamicButton> 메인 액션 버튼</DynamicButton>
        <DynamicButton primary> 메인 액션 버튼</DynamicButton>

        <BaseCard>
          Base Card: 기본적인 배경색과 패딩만 가지고 있습니다.
        </BaseCard>
          
        {/* 3. as="section"을 사용하여 실제 태그를 section으로 변경 */}
        <ElevatedCard as="section">
          Elevated Card: BaseCard 스타일을 확장하고 그림자가 추가되었으며,
          실제로는 &lt;section&gt; 태그로 렌더링됩니다.
        </ElevatedCard>
          
      </div>
    </>
  )
}

export default App