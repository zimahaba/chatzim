import { useState } from "react";
import Join from "./components/Join";
import Chat from "./components/Chat";

function App() {

  const [userId, setUserId] = useState('');
  const [webSocket, setWebSocket] = useState([]);
  const [messages, setMessages] = useState([]);
  
  const joinHandler = (userId) => {
    let socket = new WebSocket('ws://localhost:8080/chat')
    setWebSocket(socket);
    
    socket.onopen = () => {
      socket.send("{\"method\":\"connect\", \"channel\":\"1\", \"userId\":\"" + userId + "\"}");
    };
    socket.onerror = () => {
      
    };

    socket.addEventListener('message', (event) => {
      const data = JSON.parse(event.data);
      console.log('data: ', data);
      if (data.method === 'connection') {
        console.log('connected to user: ', data.userId)
        setUserId(data.userId);
      } else if (data.method === 'chat') {
        console.log('messages when onmessage: ', messages);
        setMessages((messages) => [...messages, data.payload]);
      }
    });
  }  

  const newMessageHandler = (message) => {
    console.log('messages when adding: ', messages);
    const updatedMessages = [...messages, message];
    console.log('updated messages when adding: ', updatedMessages);
    setMessages((messages) => [...messages, message]);
    webSocket.send("{\"method\":\"chat\", \"channel\":\"1\", \"userId\": \"" + userId + "\", \"payload\":\"" + message + "\"}")
  }
  
  return (
    // <div style={{position: 'absolute', width: '100%', height: '100%'}}>
    <>
      {userId.length > 0 &&
        <Chat userId={userId} messages={messages} newMessageHandler={newMessageHandler}/>
      }
      {userId.length == 0 &&
        <Join join={joinHandler}/>
      }
    </>
    // </div>
  );
}

export default App;
