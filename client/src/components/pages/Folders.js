import { useEffect, useState } from "react";
import FoldersList from "../Folders/FoldersList";
import axios from "axios";
import LoadingSpinner from "../Layout/LoadingSpinner";

const Folders = () => {
  const [steps, setSteps] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setPosts();
  }, []);

  const setPosts = () => {
    axios.get("/posts").then((result) => {
      setSteps(result.data.posts);
      setLoading(false);
    });
  };

  console.log(steps);

  const uniqueFolders = [...new Set(steps.map((fol) => fol.expediente))];

  console.log(uniqueFolders);

  return (
    <>
      {loading && <LoadingSpinner />}
      {!loading && (
        <div className="container">
          <div className="container">
            <h2 className="title">Carpetas</h2>
          </div>
          <FoldersList folder={uniqueFolders} steps={steps} />
        </div>
      )}
    </>
  );
};

export default Folders;

//inside folerlist components goes the stepList component
