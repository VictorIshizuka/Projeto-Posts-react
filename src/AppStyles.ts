import styled from 'styled-components';

type ContainerProps = {
  bgColor: boolean;
}
export const Container = styled.div<ContainerProps>`
  display: flex;
  max-width: 600px;
  margin: auto;
  background-color: ${(props) => props.bgColor ? '#00ff00' : '#FF0000'};
  color: white;
  padding: 20px;

  span {
    font-weight: bold;
    color: #FFF;
  }

  .link {
    text-decoration: none;
    color: white;

    &:hover {
      color: red;
      text-decoration: underline;
    }
  }

  @media (max-width: 500px) {
    background-color: #00ff00;
    flex-direction: column;

    span {
      color: #FF0000
    }
  }

`; 

type BotaoProps = {
  bg: string;
  small?: boolean;
}
export const Botao = styled.button<BotaoProps>`
  font-size: ${(props) => props.small ? '15px' : '30px'};
  background-color: ${props => props.bg};
`;