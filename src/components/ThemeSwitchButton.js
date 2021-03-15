import styled from 'styled-components'

const ThemeSwitchButton = ({ onClick, theme }) => (
  <ThemeSwitcher>
    <p>Dark</p>
    <button onClick={onClick} aria-label='Theme switcher'>
      <div className={`circle ${theme}`} />
      <div className={`circle2 ${theme === 'light' ? 'hide' : ''}`} />
    </button>
    <p>Light</p>
  </ThemeSwitcher>
)

const ThemeSwitcher = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 10px auto 0 auto;
  p {
    font-size: 18px;
    margin: 0 5px;
  }
  button {
    background: none;
    border: 3px solid var(--color-border);
    border-radius: 20px;
    cursor: pointer;
    display: block;
    outline: none;
    height: 24px;
    width: 42px;
    position: relative;
    .circle {
      background-color: #ffc759;
      border-radius: 50%;
      position: absolute;
      top: 2px;
      right: 11px;
      height: 14px;
      width: 14px;
      transition: all 0.3s;
    }
    .light {
      right: 2px;
    }
    .dark {
      right: 19px;
    }
    .circle2 {
      background: var(--color-bg);
      border-radius: 50%;
      height: 12px;
      width: 12px;
      position: absolute;
      top: 1px;
      left: 6px;
    }
    .hide {
      display: none;
    }
  }
`

export default ThemeSwitchButton
