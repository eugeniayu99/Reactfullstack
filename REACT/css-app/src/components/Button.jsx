import styled from 'styled-components';

const ThemeButton = styled.button`
    /* props.theme 객체에 접근하여 전역 테마 값을 사용 */
    background: ${props => props.theme.mainColor};
    color: white;
    padding: 10px;
`

export default ThemeButton;