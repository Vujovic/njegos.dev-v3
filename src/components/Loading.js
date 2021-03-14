import styled from 'styled-components'

const Loading = () => (
  <LoadingSection>
    <Spinner>
      <div />
      <div />
      <div />
    </Spinner>
    <p>Loading</p>
  </LoadingSection>
)

const LoadingSection = styled.div`
  text-align: center;
  p {
    font-size: var(--font-size__large);
  }
`

const Spinner = styled.div`
  display: inline-block;
  position: relative;
  width: 80px;
  height: 80px;
  div {
    display: inline-block;
    position: absolute;
    left: 8px;
    width: 16px;
    background: var(--color-link);
    animation: spinner-animation 1.2s cubic-bezier(0, 0.5, 0.5, 1) infinite;
    :nth-child(1) {
      left: 8px;
      animation-delay: -0.24s;
    }
    :nth-child(2) {
      left: 32px;
      animation-delay: -0.12s;
    }
    :nth-child(3) {
      left: 56px;
      animation-delay: 0;
    }
  }
  @keyframes spinner-animation {
    0% {
      top: 8px;
      height: 64px;
    }
    50%,
    100% {
      top: 24px;
      height: 32px;
    }
  }
`

export default Loading
