import React from 'react';
import styled from 'styled-components';

const MyButton = styled.button`
  background: dodgerblue;
  color: white;
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  cursor: pointer;

  /* & -> 컴포넌트 자신을 의미, hover 효과 */
  &:hover {
    background: deepskyblue;
  }
`;

export default function Example() {
  return (
    <MyButton onClick={() => alert('클릭!')}>
      클릭해 보세요
    </MyButton>
  );
}