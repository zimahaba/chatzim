import { useEffect, useRef } from "react";
import LeftBar from "./LeftBar";
import styled from "styled-components";
import avatar from '../assets/avatar.jpg';

const ChatChannel = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  width: 100%;
  background-color: #000000;
  margin-left: 300px;
`

const ChannelTitle = styled.div`
  display: flex;
  align-items: center;
  padding-left: 40px;
  min-height: 60px;
  background-color: #252329;
  color: #e0e0e0;
  font-weight: bold;
  border-bottom: 1px solid #ffffff;
`;

const ChatMessages = styled.div`
  display: flex;
  flex-direction: column;
  padding-left: 40px;
  padding-right: 40px;
  height: 100%;
  background-color: #252329;
  color: #e0e0e0;
  overflow-y: auto;
`;

const MessageDiv = styled.div`
  display: flex;
  flex-direction: row;
  min-height: 60px;
  margin: 6px 0px 6px 0px;
  font-size: 14px;
  margin-top: ${props => props.index === 0 ? 'auto' : '6px'}
`;

const Avatar = styled.div`
  display: flex;
  flex-direction: row;
  margin: 10px;
  
`;

const InputDiv = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  height: 80px;
  background-color: #252329;
  padding-left: 40px;
  padding-right: 40px;
`;

const MessageInput = styled.input`
  width: 100%;
  height: 30px;
  border: none;
  border-radius: 6px;
  background-color: #3c393f;
  color: #ffffff;
  padding-left: 16px;
`;

const MessageLabel = styled.label`
  color: #828282;
`;

const Name = styled(MessageLabel)`
  font-weight: bold;
`;

const DateTime = styled(MessageLabel)`
  margin-left: 16px;
`;

const MessageText = styled.label`
  color: #e0e0e0;
`;

const Chat = props => {

  const msgRef = useRef(null);
  const messagesEndRef = useRef(null);

  const sendHandler = () => {
    props.newMessageHandler(msgRef.current.value);
    msgRef.current.value = "";
    msgRef.current.focus();
  }

  const handleEnter = (event) => {
    if (event.key === 'Enter') {
      sendHandler();
    }
  }

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" })
  }

  useEffect(() => {
    scrollToBottom()
  }, [props.messages]);

  return (
    <div style={{display: 'flex', flexDirection: 'row', height: '100%'}}>
      <LeftBar/>
      
      <ChatChannel>
        <ChannelTitle>Front-end developers</ChannelTitle>
        
        <ChatMessages>
          
            {props.messages.map((msg, i) => (
              <MessageDiv key={msg + '_' + i} index={i}>
                <Avatar>
                  <img src={avatar} style={{width: '34px', height: '34px', borderRadius: '6px'}}/>
                </Avatar>
                <div>
                  <div style={{marginBottom: '12px'}}>
                    <Name>{msg.userId}</Name>
                    <DateTime>today at 2:29PM</DateTime>
                  </div>
                  <MessageText>{msg.payload}</MessageText>
                </div>
              </MessageDiv>
            ))}
            <div ref={messagesEndRef}/>
          
        </ChatMessages>

        <InputDiv>
          <MessageInput placeholder="Type a message here" ref={msgRef} onKeyDown={handleEnter}></MessageInput>
          <button onClick={sendHandler}>Send</button>
        </InputDiv> 
      </ChatChannel>
      
    </div>
  );
}

export default Chat;