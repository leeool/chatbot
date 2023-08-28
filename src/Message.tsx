import React from 'react'
import { Container, Options, Option, MessageBody } from './message.styled'
import { motion } from 'framer-motion'
import { IMessage, IOption } from './types/global'

interface IMessageChat {
  handleOption: (option: IOption) => void
}

const Message = ({ handleOption, ...message }: IMessage & IMessageChat) => {
  const { body, sender } = message
  const optionRefs = React.useRef<HTMLButtonElement[]>([])

  const handleChooseOption = async (e: React.MouseEvent, option: IOption) => {

    if (!(e.currentTarget instanceof HTMLButtonElement)) return
    handleOption(option)

    const chosenOption = optionRefs.current.find(el => el === e.currentTarget)

    chosenOption?.setAttribute("data-selected", "true")

    setTimeout(() => {
      chosenOption?.setAttribute("data-selected", "false")
    }, 10000)

  }

  return (
    <Container
      data-sender={sender}
      className="messageContainer"
    >
      {body && <MessageBody data-sender={sender} className='messageBody'>
        {body}
      </MessageBody>}

      {sender === "bot" && message.options && (
        <Options className='optionsContainer'>
          {message.options.map((option, index) => (
            <Option
              className='option'
              key={String(option.body)}
              ref={el => optionRefs.current[index] = el!}
              onClick={(e) => handleChooseOption(e, option)}
              as={motion.button}
              initial={{ y: body ? "-120%" : "120%" }}
              animate={{ y: "0" }}
              transition={{ delay: index * 0.3, type: "spring", duration: 1 }}

            > {option.body}</Option>
          ))}
        </Options>
      )
      }
    </Container>
  )
}

export default Message
