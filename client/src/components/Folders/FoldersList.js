import { Link } from "react-router-dom";
import styles from "../styles/FoldersList.module.css";

const FoldersList = (props) => {
  //abc order for the array of folders
  const sortedArray = props.folder.sort();

  return (
    <>
      <div className={styles.container}>
        <ul>
          {sortedArray.map((item, index) => (
            <li key={index}>
              <Link
                to={`/folders/${item}`}
                className="btn btn-secondary btn-lg"
              >
                {item}
              </Link>
            </li>
          ))}
        </ul>
      </div>{" "}
    </>
  );
};

export default FoldersList;
