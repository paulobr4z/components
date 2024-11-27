import styled from 'styled-components'

export const Container = styled.div`
  min-width: 265px;
  min-height: 100vh;
  background-color: #000000;
  padding: 32px 16px;
  border-right: 1px solid #333333;

  h2 {
    font-size: 14px;
    font-weight: bold;
    color: #ffffff;
  }

  ul {
    margin-top: 8px;
    list-style-type: none;
  }

  li {
    font-size: 14px;
    font-weight: bold;
    padding-left: 16px;
    text-decoration: none;
  }

  a {
    color: rgba(255, 255, 255, 0.63);
    text-decoration: none;
  }

  a:hover {
    text-decoration: underline;
  }
`
