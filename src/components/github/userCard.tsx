import React from "react";

interface User {
     avatar_url: string;
     name: string;
     location: string;
     bio: string;
     followers: number;
     following: number;
     hireable: boolean;
}

interface UserCardProps {
     user: User;
}

const UserCard: React.FC<UserCardProps> = ({ user }) => {
     return (
          <div className="text-center mt-3 mb-4">
               <img src={user.avatar_url} className="img-thumbnail w-50 rounded mx-auto d-block mt-4" alt="User Avatar" />
               <div>
                    <div className="text-primary">{user.name}</div>
                    <div className="text-primary">{user.location}</div>
                    <div className="text-primary">{user.bio}</div>
                    <div className="text-primary">Followers: {user.followers}</div>
                    <div className="text-primary">Following: {user.following}</div>
                    <div className="text-primary">Available for hire: {user.hireable ? "YES" : "NOPE"}</div>
               </div>
          </div>
     );
};

export default UserCard;
