import { useState } from "react";
import Join from "./components/Join";
import Chat from "./components/Chat";

function App() {

  const [username, setUsername] = useState('');
  const [webSocket, setWebSocket] = useState([]);
  const [messages, setMessages] = useState([]);
  
  const joinHandler = (username) => {
    let socket = new WebSocket('ws://localhost:8080/chat')
    setWebSocket(socket);
    
    socket.onopen = () => {
      socket.send("{\"method\":\"connect\", \"channel\":\"1\", \"userId\":\"" + username + "\"}");
    };
    socket.onerror = () => {
      
    };

    socket.addEventListener('message', (event) => {
      const data = JSON.parse(event.data);
      if (data.method === 'connection') {
        console.log('connected to user: ', data.username)
        setUsername(data.username);
      } else if (data.method === 'chat') {
        console.log('messages when onmessage: ', messages);
        //const updatedMessages = [...messages, data.message];
        //messages.push(data.message);
        //console.log('updated messages when onmessage: ', updatedMessages);
        setMessages((messages) => [...messages, data.message]);
      }
    });
  }  

  const newMessageHandler = (message) => {
    console.log('messages when adding: ', messages);
    const updatedMessages = [...messages, message];
    console.log('updated messages when adding: ', updatedMessages);
    setMessages((messages) => [...messages, message]);
    webSocket.send("{\"method\":\"chat\", \"channel\":\"1\", \"userId\":\"zimahaba\", \"payload\":\"" + message + "\"}")
  }
  
  return (
    <div style={{position: 'absolute', width: '100%', height: '100%'}}>
      {username.length > 0 &&
        <Chat username={username} messages={messages} newMessageHandler={newMessageHandler}/>
      }
      {username.length == 0 &&
        <Join join={joinHandler}/>
      }
      
    </div>
  );
}

export default App;
