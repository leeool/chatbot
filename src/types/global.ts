export type IMessage = {
  id: string
  body: string | React.ReactNode
} & ({
  sender: "user"
} | {
  sender: "bot"
  options?: IOption[]
})

export interface IOption {
  nextMessageId?: string
  body: React.ReactNode
}


export interface ChatbotProps {
  data: IMessage[]
  firstMessage?: IMessage

}
