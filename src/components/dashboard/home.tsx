import Axios from "axios";
import React, { useState } from "react";
import { toast } from "sonner";
import Repos from "../github/Repo";
import UserCard from "../github/userCard";
import { Button } from "../ui/button";
import { Input } from "../ui/input";

interface User {
     avatar_url: string;
     name: string;
     location: string;
     bio: string;
     followers: number;
     following: number;
     hireable: boolean;
     repos_url: string;
}

const Home: React.FC = () => {
     const [query, setQuery] = useState<string>("");
     const [user, setUser] = useState<User | null>(null);

     const fetchDetails = async () => {
          try {
               const { data } = await Axios.get<User>(`https://api.github.com/users/${query}`);
               setUser(data);
               console.log({ data });
          } catch (error) {
               toast("Not able to locate user");
          }
     };

     return (
          <div>
               <div className="mt-3">
                    <div>
                         <div>
                              <Input type="text" value={query} onChange={(e) => setQuery(e.target.value)} placeholder="Please provide the username" />

                              <Button onClick={fetchDetails} color="primary">
                                   Fetch User
                              </Button>
                         </div>
                         {user ? <UserCard user={user} /> : null}
                    </div>
                    <div>{user ? <Repos repos_url={user.repos_url} /> : null}</div>
               </div>
          </div>
     );
};

export default Home;
