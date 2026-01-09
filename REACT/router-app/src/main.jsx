import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import {BrowserRouter} from 'react-router-dom'

createRoot(document.getElementById('root')).render(
  // 어플리케이션 전체에 라우팅 기능을 활성화 한다.
  // 히스토리 api 사용 : 페이지를 새로고침하지 않고 URL을 변경할 수 있다.
  // Context 제공 : 모든 하위 컴포넌트가 현재 URL 경로, 탐색 상태 등을 알수 있도록 정보를 제공한다.
  <BrowserRouter>
    <App />
  </BrowserRouter>,
)
