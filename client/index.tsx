import React from 'react';
// import * as React from 'react';
import { FC } from 'react';
import * as ReactDom from 'react-dom';

const messages = [
  '1', '2', '3'
];

interface IMessageField {
  message: string
}

const MessageField: React.FC<IMessageField> = ({ message }) => {
  return (
    <div className='message'>
      {message}
    </div>
  );
};

interface IMessageListProps {
  messages: string[]
}

const MessageList: React.FC<{ messages: string[] }> = ({ messages }) => { //: React.ReactElement<string[]>[]
  // return messages.map((message: string, index: number) => {
  //   return <MessageField key={index} message={message} />
  // });
  return (
    <>
      {messages.map((message: string, index: number) =>
        <MessageField message={message} key={index} />
      )}
    </>
  );
};

const Button = (props: { children: React.ReactNode }) => {
  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    console.log(e)
  };
  // const handleClick: React.DOMAttributes<HTMLButtonElement>['onClick'] = (e) => {
  //   console.log(e)
  // };
  // const handleClick = (event: React.MouseEventHandler<HTMLButtonElement>) => {
  //   console.log(event)
  // };
  return <button onClick={handleClick}>{props.children}</button>
};

ReactDom.render(
  <>
    {/* {messages.map((message: string, index: number) => {
      <div className='message' key={index}>
        {message}
      </div>
    })} */}
    <MessageList messages={messages} />
    <Button>My button</Button>
  </>,
  document.getElementById('app')
);
