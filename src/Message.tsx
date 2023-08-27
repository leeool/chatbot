import React from 'react'
import { Container, Options, Option, MessageBody } from './message.styled'
import { motion } from 'framer-motion'
import { IMessage, IOption } from './types/global'

interface IMessageChat {
  handleOption: (option: IOption) => void
}

const Message = ({ handleOption, ...message }: IMessage & IMessageChat) => {
  const { body, sender } = message
  const optionRefs = React.useRef<HTMLDivElement[]>([])

  const handleChooseOption = async (e: React.MouseEvent, option: IOption) => {
    handleOption(option)

    if (!(e.currentTarget instanceof HTMLDivElement)) return

    const chosenOption = optionRefs.current.find(el => el === e.currentTarget)

    chosenOption?.setAttribute("data-selected", "true")

    setTimeout(() => {
      chosenOption?.setAttribute("data-selected", "false")
    }, 10000)

  }

  return (
    <Container
      data-sender={sender}
      as={motion.div}
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
              as={motion.div}
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
