import styled from "styled-components";

import { Link } from 'react-router-dom'

export const LoginWrapper = styled.div`
  height: 100%;
  width: 100%;
`;

export const HigherWrapper = styled.div`
  background: #f0f2f5;
  display: flex;
  height: 50%;
  justify-content: center;
  padding: 72px 0 112px 0;
`;

export const LeftWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  width: 500px;
`;

export const LogoWrapper = styled.figure`
  height: 106px;
`;

export const LowerWrapper = styled.div`

`;

export const Message = styled.p`
  font-size: 28px;
  line-height: 32px;
`;

export const LoginBoxWrapper = styled.div`
  background-color: #FFF;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, .1), 0 8px 16px rgba(0, 0, 0, .1);
`;

export const LoginBox = styled.form`
  align-items: center;
  display: flex;
  flex-direction: column;
  padding: 10px 16px;
  width: 396px;
`;

export const Separator = styled.div`
  background-color: #dadde1;
  height: 1px;
  margin: 20px 16px;
`;

export const InputLoginWrapper = styled.div`
  padding: 6px 0;
  width: 100%;
`;

export const InputLogin = styled.input`
  border: 1px solid #dddfe2;
  border-radius: 6px;
  font-size: 17px;
  height: 52px;
  line-height: 16px;
  outline: none;
  padding: 14px 16px;
  width: 100%;

  &:focus {
    border-color: red;
    box-shadow: 0 2px 4px rgba(0, 0, 0, .1);
  }
`;

export const LoginButtonWrapper = styled.div`
  margin-top: 10px;
  width: 100%;
`;

export const LoginButton = styled.button`
  background-color: #1877f2;
  border: none;
  border-radius: 6px;
  color: #FFF;
  font-size: 20px;
  line-height: 48px;
  padding: 0 16px;
  width: 100%;
`;

export const ForgotPasswordWrapper = styled.div`
  margin-top: 16px;
`;

export const ForgotPasswordMessage = styled(Link)`
  color: #1877f2;
  font-size: 14px;
  font-weight: 500;
  text-decoration: none;

  &:hover {
    text-decoration: underline;
  }
`;

export const NewAccountButtonWrapper = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 20px;
`;

export const NewAccountButton = styled(Link)`
  background-color: #42b72a;
  border-radius: 6px;
  color: white;
  font-size: 17px;
  font-weight: bold;
  line-height: 48px;
  padding: 0 16px;
  text-decoration: none;
`;