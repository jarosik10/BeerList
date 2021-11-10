import styled from 'styled-components';

const Button = styled.button`
    background-color: #fff500;
    border: 4px solid #000000;
    font-weight: bold;
    font-size: ${({ isBig }: { isBig: boolean }) => isBig ? '24px' : '18px'};
    padding: ${({ isBig }: { isBig: boolean }) => isBig ? '15px 30px' : '8px 20px'};
    cursor: pointer;
`;

export default Button;
