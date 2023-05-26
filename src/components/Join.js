import { useRef } from "react";


const Join = props => {

  const usernameRef = useRef(null);

  const joinButtonHandler = () => {
    props.join(usernameRef.current.value);
  }

  return (
    <div>
      <input placeholder="username" ref={usernameRef}></input>
      <button onClick={joinButtonHandler}>Join</button>
    </div>
  );
}

export default Join;