import Axios from "axios";
import React, { useEffect, useState } from "react";

interface Repo {
     id: number;
     name: string;
     language: string;
     description: string;
}

interface ReposProps {
     repos_url: string;
}

const Repos: React.FC<ReposProps> = ({ repos_url }) => {
     const [repos, setRepos] = useState<Repo[]>([]);

     const fetchRepos = async () => {
          const { data } = await Axios.get<Repo[]>(repos_url);
          setRepos(data);
     };

     useEffect(() => {
          fetchRepos();
     }, [repos_url]);

     return (
          <div>
               {repos.map((repo) => (
                    <div key={repo.id}>
                         <div className="text-primary">{repo.name}</div>
                         <div className="text-secondary">{repo.language}</div>
                         <div className="text-info">{repo.description}</div>
                    </div>
               ))}
          </div>
     );
};

export default Repos;
