import './Logout.css'

export default function Logout({ handleButton }) {
  const onClickButton = () => {
    handleButton();
  };
  return <button className="btn" onClick={onClickButton}>Logout</button>;
}