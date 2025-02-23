import { useState } from "react";
import Login from "./LoginButton";
import Logout from "./LogoutButton";
import Message from "./Message";  
import './Home.css';

export default function Home() {
  const [isLogin, setIsLogin] = useState(false);

  const handleButton = () => {
    setIsLogin(!isLogin);
  };

  return (
    <div className="home">
      <div className="content">
        <Message condition={isLogin} />
        {isLogin ? (
          <Login handleButton={handleButton} />
        ) : (
          <Logout handleButton={handleButton} />
        )}
      </div>
    </div>
  );
}