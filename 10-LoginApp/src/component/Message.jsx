import './Message.css';

export default function Message({ condition }) {
    return <>{condition ? <h2 className='msg'>Please Login</h2> : <h2 className='msg'>Welcome User</h2>}</>;
  }