import * as S from './styles'

const Main = ({
  title = 'React avançado',
  description = 'TypeScript, ReactJS, NextJS e Styled Components'
}) => {
  return (
    <S.Wrapper>
      <S.Logo
        src="/images/logo.svg"
        alt="Imagem de um átomo e React avançado escrito ao lado."
      />
      <S.Title>{title}</S.Title>
      <S.Description>{description}</S.Description>
      <S.Illustration
        src="/images/hero-illustration.svg"
        alt="Um desenvolvedor de frente para uma tela com código"
      />
    </S.Wrapper>
  )
}

export default Main
