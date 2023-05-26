import { useRef } from "react";
import LeftBar from "./LeftBar";
import styled from "styled-components";


const ChatChannel = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  min-width: 500px;
  background-color: #000000;
`

const ChannelTitle = styled.div`
  display: flex;
  align-items: center;
  padding-left: 40px;
  height: 60px;
  background-color: #252329;
  color: #e0e0e0;
  font-weight: bold;
`;

const ChatMessages = styled.div`
  display: flex;
  flex-direction: column;
  padding-left: 40px;
  padding-right: 40px;
  height: 100%;
  background-color: #252329;
  color: #e0e0e0;
`;

const MessageDiv = styled.div`
  display: flex;
  flex-direction: row;
  height: 40px;
  margin: 6px 0px 6px 0px;
  background-color: #000000;
  font-size: 14px;
`;

const Avatar = styled.div`
  display: flex;
  flex-direction: row;
  margin: 10px;
  align-items: center;
`;

const Chat = props => {

  const msgRef = useRef(null)

  const sendHandler = () => {
    props.newMessageHandler(msgRef.current.value);
  }

  return (
    <div style={{display: 'flex', flexDirection: 'row', height: '100%'}}>
      <LeftBar/>
      
      <ChatChannel>
        <ChannelTitle>Front-end developers</ChannelTitle>
        <div></div>
        <ChatMessages>
          {props.username}
          <div style={{display: 'flex', flexDirection: 'row'}}>
            <input placeholder="message" ref={msgRef}></input>
            <button onClick={sendHandler}>Send</button>
          </div>
          <div style={{display: 'flex', flexDirection: 'column'}}>
            {props.messages.map((msg, i) => (
              <MessageDiv key={msg + '_' + ''}>
                <Avatar>AVT</Avatar>
                <div>
                  <div>
                    <label>Username</label>
                    <label>Date/Time</label>
                  </div>
                  <label>{msg}</label>
                </div>
              </MessageDiv>
            ))}
          </div>
        </ChatMessages>
      </ChatChannel>
      
    </div>
  );
}

export default Chat;