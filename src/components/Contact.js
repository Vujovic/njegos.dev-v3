import styled from 'styled-components'

const Contact = () => (
  <>
    <Description>
      <h1>Let's get in touch</h1>
      <p>Fill out the form and I will contact you soon</p>
    </Description>
    <Form name='contact' method='post'>
      <input type='hidden' name='form-name' value='contact' />
      <label htmlFor='name'>Full name:</label>
      <input
        type='text'
        name='name'
        id='name'
        placeholder='Enter your full name...'
        required
      />
      <label htmlFor='email'>Email address:</label>
      <input
        type='email'
        name='email'
        id='email'
        placeholder='Enter your email address...'
        required
      />
      <label htmlFor='subject'>Subject:</label>
      <input
        type='text'
        name='subject'
        id='subject'
        placeholder='Enter the subject of your message'
        required
      />
      <label htmlFor='message'>Message:</label>
      <textarea
        name='message'
        rows='6'
        placeholder='Enter your message...'
        required
      />
      <input className='formButton' type='submit' value='Send message' />
    </Form>
  </>
)

const Description = styled.div`
  padding: 70px 0;
  text-align: center;
  h1 {
    color: var(--color-primary);
    font-weight: 600;
  }
  @media screen and (max-width: 768px) {
    padding: 35px 0;
  }
`

const Form = styled.form`
  display: flex;
  flex-direction: column;
  margin-left: auto;
  margin-right: auto;
  padding-bottom: 70px;
  max-width: 650px;
  label {
    color: var(--color-primary);
    font-size: var(--font-size__medium);
    margin-bottom: 25px;
  }
  input,
  textarea {
    background-color: var(--color-bg__light);
    border: 1px solid var(--color-border);
    color: var(--color-light);
    font-family: inherit;
    font-size: var(--font-size__small);
    margin-bottom: 40px;
    padding: 25px 15px;
  }
  .formButton {
    background-color: var(--color-link);
    color: var(--color-bg__light);
    font-size: var(--font-size__medium);
    font-weight: 600;
    cursor: pointer;
    :hover {
      opacity: 0.9;
    }
  }
  @media screen and (max-width: 768px) {
    padding-bottom: 35px;
    width: 90%;
    label,
    .formButton {
      font-size: 16px;
    }
    input,
    textarea {
      font-size: 14px;
    }
  }
`

export default Contact
