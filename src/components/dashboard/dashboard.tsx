import { account } from "@/appwrite/appwrite";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "../ui/button";
import HomePage from "./home";
interface User {
     email: string;
     name: string;
}

const Dashboard: React.FC = () => {
     const [user, setUser] = useState<User | null>(null);
     const navigate = useNavigate();

     useEffect(() => {
          const fetchUserDetails = async () => {
               try {
                    const response = await account.get();
                    setUser({
                         email: response.email,
                         name: response.name,
                    });
               } catch (error) {
                    console.error("Failed to fetch user details", error);
                    navigate("/login");
               }
          };

          fetchUserDetails();
     }, [navigate]);

     const handleLogout = async () => {
          try {
               await account.deleteSession("current");
               navigate("/login");
          } catch (error) {
               console.error("Failed to logout", error);
          }
     };

     if (!user) {
          return <div>Loading...</div>;
     }

     return (
          <div className="min-h-screen  w-full flex-col ">
               <div className="border-[2px] border-black p-10 flex items-center justify-center flex-col gap-3">
                    <h1>
                         Welcome, <span className="uppercase">{user.name}</span>{" "}
                    </h1>
                    <p>Email: {user.email}</p>
                    <Button variant={"destructive"} onClick={handleLogout}>
                         Logout
                    </Button>
               </div>
               <HomePage />
          </div>
     );
};

export default Dashboard;
