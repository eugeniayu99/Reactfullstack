import styled from 'styled-components';

// 1. 기본 스타일을 가진 BaseCard 컴포넌트 정의
const BaseCard = styled.div`
  background-color: #f0f0f0;
  padding: 15px;
  border-radius: 5px;
  margin: 10px;
  width: 300px;
`;

// 2. BaseCard 스타일을 상속받아 (styled(BaseCard)) 그림자를 추가한 ElevatedCard 정의
const ElevatedCard = styled(BaseCard)`
  /* BaseCard의 모든 스타일을 상속 */
  
  /* 필수 요구 사항: 그림자 추가 */
  box-shadow: 0 4px 6px rgba(0,0,0,0.1);
  background-color: white; /* 배경색을 흰색으로 변경하여 그림자 강조 */
`;

export {BaseCard, ElevatedCard};