import styled from "styled-components";

interface TextProps {
  fontSize?: string;
  fontFamily?: string;
  color?: string;
}

export const Text = styled.p<TextProps>`
  width: 100%;
  color: ${(props) => (props.color ? props.color : "darkslategrey")};
  margin: 0;
  font-family: ${(props) =>
    props.fontFamily ? props.fontFamily : "YekanRegular"};
  font-size: ${(props) => (props.fontSize ? props.fontSize : "15px")};
`;

interface ButtonProps {
  backgroundColor?: string;
  fontSize?: string;
  fontFamily?: string;
}
export const Button = styled.button<ButtonProps>`
  border: 0;
  padding: 10px;
  background-color: ${(props) =>
    props.backgroundColor ? props.backgroundColor : "#FFC453"};
  font-size: ${(props) => (props.fontSize ? props.fontSize : "15px")};
  color: ${(props) => (props.color ? props.color : "#000000")};
  font-family: ${(props) =>
    props.fontFamily ? props.fontFamily : "YekanBold"};
`;
