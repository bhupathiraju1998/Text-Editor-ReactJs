import {useState, useEffect} from 'react'
import {VscBold} from 'react-icons/vsc'
import {GoItalic} from 'react-icons/go'
import {AiOutlineUnderline} from 'react-icons/ai'

import {
  MainContainer,
  SubContainer,
  ImgContainer,
  ImgTag,
  Header,
  TextAreaContainer,
  Button,
  SecondContainer,
  UlCont,
} from './styledComponents'

const buttonList = [
  {value: 'bold', isActive: false},
  {value: 'italic', isActive: false},
  {value: 'underline', isActive: false},
]

const MainPage = () => {
  const [text, setText] = useState('')
  const [list, setList] = useState(buttonList)
  const [selectedButtons, setSelectedButtons] = useState([])

  const value = ''
  useEffect(() => {
    console.log(selectedButtons)
  })

  const handleButton = t => {
    setText(t)
    if (!selectedButtons.includes(t)) {
      setSelectedButtons(prevState => [...selectedButtons, t])
    } else {
      const filteredValue = selectedButtons.filter(each => each !== t)
      setSelectedButtons(filteredValue)
    }
  }

  return (
    <MainContainer>
      <SubContainer>
        <ImgContainer>
          <Header>Text Editor</Header>
          <div>
            <ImgTag
              src="https://assets.ccbp.in/frontend/react-js/text-editor-img.png"
              alt="text editor"
            />
          </div>
        </ImgContainer>
        <SecondContainer>
          <UlCont>
            {buttonList.map(each => (
              <li>
                <Button
                  data-testid={each.value}
                  type="button"
                  onClick={() => handleButton(each.value)}
                  isActive={selectedButtons.includes(each.value)}
                >
                  {each.value === 'bold' && <VscBold size={25} />}
                  {each.value === 'italic' && <GoItalic size={25} />}
                  {each.value === 'underline' && (
                    <AiOutlineUnderline size={25} />
                  )}
                </Button>
              </li>
            ))}
          </UlCont>

          <TextAreaContainer
            rows="70"
            cols="70"
            textSelected={text}
            selectedB={selectedButtons}
            defaultValue=""
          />
        </SecondContainer>
      </SubContainer>
    </MainContainer>
  )
}

export default MainPage
