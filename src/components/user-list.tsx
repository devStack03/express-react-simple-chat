import React from "react";
import { Users } from "lucide-react";

interface UserListProps {
  onlineUsers: string[];
}

const UserList: React.FC<UserListProps> = ({ onlineUsers }) => {
  return (
    <div>
      <h2 className="text-xl font-bold mb-4 flex items-center gap-2">
        <Users className="w-5 h-5" />
        Online Users
      </h2>
      <div className="space-y-2">
        {onlineUsers.map((user) => (
          <div key={user} className="flex items-center gap-2 p-2 rounded-md">
            <div className="w-2 h-2 bg-green-500 rounded-full" />
            {user}
          </div>
        ))}
      </div>
    </div>
  );
};

export default UserList;
