import React, { useState } from "react";
import { LogIn } from "lucide-react";

interface LoginProps {
  onLogin: (username: string) => void;
}

const Login: React.FC<LoginProps> = ({ onLogin }) => {
  const [loginName, setLoginName] = useState("");

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    onLogin(loginName);
  };

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center">
        <div className="bg-white p-8 rounded-lg shadow-md w-96">
          <h1 className="text-2xl font-bold mb-6 flex items-center gap-2">
            <LogIn className="w-6 h-6" />
            Login to Chat
          </h1>
          <form onSubmit={handleLogin} className="space-y-4">
            <input
              type="text"
              value={loginName}
              onChange={(e) => setLoginName(e.target.value)}
              placeholder="Enter your username"
              className="w-full p-2 border rounded-md"
            />
            <button
              type="submit"
              className="w-full bg-blue-500 text-white p-2 rounded-md hover:bg-blue-600"
            >
              Join Chat
            </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
