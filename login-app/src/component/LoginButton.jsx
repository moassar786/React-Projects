import './Login.css';

export default function Login({ handleButton }) {
    const onClickButton = () => {
      handleButton();
    };
    return <button className="btn" onClick={onClickButton}>Login</button>;
  }