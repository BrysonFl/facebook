import { Footer } from '../../components/Footer/Footer'
import {
  LoginWrapper,
  HigherWrapper,
  LeftWrapper,
  LogoWrapper,
  Message,
  LoginBoxWrapper,
  LoginBox,
  Separator,
  InputLoginWrapper,
  InputLogin,
  LoginButtonWrapper,
  LoginButton,
  ForgotPasswordWrapper,
  ForgotPasswordMessage,
  NewAccountButtonWrapper,
  NewAccountButton
} from './LoginStyles'

export const Login = () => {
  return (
    <LoginWrapper>
      <HigherWrapper>
        <LeftWrapper>
          <div>
            <LogoWrapper>
              <img src="https://static.xx.fbcdn.net/rsrc.php/y8/r/dF5SId3UHWd.svg" alt="" />
            </LogoWrapper>
          </div>
          <div>
            <Message>Facebook te ayuda a comunicarte y compartir con las personas que forman parte de tu vida.</Message>
          </div>
        </LeftWrapper>
        <LoginBoxWrapper>
          <LoginBox>
            <InputLoginWrapper>
              <InputLogin type="text" placeholder='Correo eléctronico o número de teléfono' />
            </InputLoginWrapper>
            <InputLoginWrapper>
              <InputLogin type="text" name="" id="" placeholder='Contraseña' />
            </InputLoginWrapper>
            <LoginButtonWrapper>
              <LoginButton>Iniciar sesión</LoginButton>
            </LoginButtonWrapper>
            <ForgotPasswordWrapper>
              <ForgotPasswordMessage to="/">¿Olvidaste tu contraseña?</ForgotPasswordMessage>
            </ForgotPasswordWrapper>
          </LoginBox>
          <Separator></Separator>
          <NewAccountButtonWrapper>
            <NewAccountButton to="/">Crear nueva cuenta</NewAccountButton>
          </NewAccountButtonWrapper>
        </LoginBoxWrapper>
      </HigherWrapper>
      <Footer />
    </LoginWrapper>
  )
}