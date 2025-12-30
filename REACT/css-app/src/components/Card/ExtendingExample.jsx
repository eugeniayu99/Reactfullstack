import styled from 'styled-components';

// 1. 기본 스타일을 가진 버튼 (4단계의 StyledButton 재활용)
const BaseButton = styled.button`
  background: white;
  color: palevioletred;
  padding: 0.25em 1em;
  border: 2px solid palevioletred;
  border-radius: 3px;
`;

// 2. BaseButton의 모든 스타일을 상속받아 새로운 스타일(fontSize, color)만 추가
const LargeButton = styled(BaseButton)`
  font-size: 2em; /* 크기만 더 크게 */
  color: slateblue; /* 텍스트 색상만 변경 */
`;

export default function ExtendingExample() {
  return (
    <>
      <BaseButton>기본 크기 버튼</BaseButton>
      <LargeButton>큰 크기 버튼 (스타일 확장)</LargeButton>
    </>
  );
}