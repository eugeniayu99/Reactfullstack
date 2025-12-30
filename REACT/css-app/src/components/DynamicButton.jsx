import styled from "styled-components";

const DynamicButton = styled.button`
    padding: 8px 16px;
    border-radius: 4px;
    cursor: pointer;

    /* 필수 요구 사항: Props를 이용한 조건부 스타일링 */
    background: ${props => props.primary ? 'royalblue' : 'white'};
    color: ${props => props.primary ? 'white' : 'gray'};
    border: ${props => props.primary ? 'none' : '1px solid gray'};

    &:hover {
        opacity: 0.8;
    }
`

export default DynamicButton;