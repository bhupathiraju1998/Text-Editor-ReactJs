import styled from 'styled-components'

export const MainContainer = styled.div`
  background-color: #25262c;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`
export const SubContainer = styled.div`
  background-color: #1b1c22;
  border-radius: 15px;
  width: 80%;
  height: 80%;
  display: flex;
`
export const ImgContainer = styled.div`
  background-color: #334155;
  width: 50%;
`
export const ImgTag = styled.img`
  height: 80%;
  width: 80%;
`
export const Header = styled.h1`
  font-size: 24px;
  font-family: Roboto;
  font-weight: 500px;
  color: #ffffff;
`
export const TextAreaContainer = styled.textarea`
  width: 100%;
  border-radius: 15px;
  background-color: transparent;
  color: #ffffff;
  font-weight: ${props =>
    props.selectedB.includes('bold') ? 'bold' : 'normal'};
  font-style: ${props =>
    props.selectedB.includes('italic') ? 'italic' : 'normal'};
  text-decoration: ${props =>
    props.selectedB.includes('underline') ? 'underline' : 'normal'};
`
export const Button = styled.button`
  background-color: transparent;
  color: ${props => (props.isActive ? '#faff00' : '#f1f5f9')};
`
export const SecondContainer = styled.div`
  display: flex;
  flex-direction: column;
`
export const UlCont = styled.ul`
  list-style-type: none;
  display: flex;
`
