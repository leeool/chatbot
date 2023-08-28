# minimal-chatbot

Minimalist chatbot with React and Typescript.

Fell free to contribute in this project.

## Dependencies

All necessary dependencies are installed when the package is installed on the project

```yaml
"dependencies":
{
    "react": "^18.2.0",
    "react-dom": "^18.2.0",
    "styled-components": "^6.0.7",
    "framer-motion": "^10.16.1"
}
```

## Installation

**NPM**
```
npm install minimal-chatbot
```

**Yarn**
```
yarn add minimal-chatbot
```

**PNPM**
```
pnpm install minimal-chatbot
```

## Usage

```tsx
// Data.tsx
import { IMessage } from "minimal-chatbot";


const messages: IMessage[] = [
  {
    id: "about",
    body: "I am a chatbot, I am here to help you.",
    sender: "bot",
    options: [
      {
        body: "your services",
        nextMessageId: "services"
      },
      {
        body: "thanks",
        nextMessageId: "thanks"
      },

    ]
  },

  {
    id: "services",
    body: <p>You can access our page in <a href="https://google.com">this link</a> for more informations about our services</p>,
    sender: "bot",
    options: [
      {
        body: "about you",
        nextMessageId: "about"
      },
      {
        body: "thanks",
        nextMessageId: "thanks"
      },
    ]
  },

  {
    id: "thanks",
    body: "Thanks for the interest!",
    sender: "bot"
  }
]

export const firstMessage: IMessage = {
  id: "introduction",
  body: "Hello, how can I help you?",
  sender: "bot",
  options: [
    {
      body: "about you",
      nextMessageId: "about"
    },
    {
      body: "your services",
      nextMessageId: "services"
    },
  ]
}


export default messages;
```

```tsx
// App.tsx
import Chat from "minimal-chatbot"
import messages, { firstMessage } from './Data'


function App() {


  return (
    <>
      <Chat
        data={messages}
        firstMessage={firstMessage}
      />
    </>
  )
}
```

![image](https://github.com/leeool/minimal-chatbot/assets/100002048/2052e628-6f80-44c1-a1e9-813ac895a971)

## Styles

Add additional styles by css classes

### Available classes

- `chatContainer`
- `messageContainer`
- `messageBody`
- `optionsContainer`
- `option`

## License

This project is licensed under the MIT License - see the [`LICENSE`](LICENSE) file for details.

