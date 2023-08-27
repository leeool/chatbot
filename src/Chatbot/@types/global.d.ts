type IMessage = {
  id: string
  body: string | React.ReactNode
} & ({
  sender: "user"
} | {
  sender: "bot"
  options?: IOption[]
})

interface IOption {
  nextMessageId?: string
  body: React.ReactNode
}


interface ChatbotProps {
  data: IMessage[]
  firstMessage?: IMessage

}
