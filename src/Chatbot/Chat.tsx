import React from 'react'
import Message from './Message'
import { Container } from './chat.styled'


const Chat = ({ data, firstMessage }: ChatbotProps) => {
  const [messages, setMessages] = React.useState<IMessage[]>(firstMessage ? [firstMessage] : [data[0]])
  const chatRef = React.useRef<HTMLDivElement>(null)
  const bottomRef = React.useRef<HTMLDivElement>(null)

  const handleSelectOption = (option: IOption) => {
    console.log(option)

    setUserMessage(option.body)

    if (!option.nextMessageId) return

    nextBotMessage(option.nextMessageId)
  }

  const setUserMessage = (optionBody: React.ReactNode) => {

    setMessages((prev) => [
      ...prev,
      {
        id: prev.length.toString() + 1,
        body: optionBody,
        sender: 'user',
      }
    ])
  }


  const nextBotMessage = (nextMessageId: string) => {
    const nextMessage = data.find(message => message.id === nextMessageId)

    if (!nextMessage) return

    if (!nextMessage.body || nextMessage.sender !== "bot")
      return setMessages(prev => [...prev, nextMessage])

    const typingMessage: IMessage = { id: "100", body: "...", sender: "bot" }

    setMessages((prev) => [...prev, typingMessage])

    console.log('message', nextMessage)

    setTimeout(() => {

      setMessages((prev) => {
        const newMessages = [...prev]
        const lastMessage = newMessages.pop()

        if (!lastMessage) return prev
        return [...newMessages, {
          ...lastMessage,
          body: nextMessage.body,
          options: nextMessage.options
        }]
      })
    }, 1500)

  }

  React.useEffect(() => {
    if (!chatRef.current || !bottomRef.current) return

    chatRef.current.scrollTo({
      top: bottomRef.current.offsetTop,
      behavior: 'smooth'
    })

  }, [messages])


  return (
    <Container ref={chatRef} className='chatContainer'>

      {messages.map((message, index) => (
        <Message key={index + message.id}
          {...message}
          handleOption={handleSelectOption}
        />
      ))}

      <div ref={bottomRef} style={{ paddingTop: "0.5rem", paddingBottom: "0.5rem" }}></div>
    </Container>
  )
}

export default Chat
