import { Link } from 'react-router-dom';

const FoldersList = (props) => {
  //abc order for the folder`s array
  const sortedArray = props.folder.sort();

  return (
    <>
      <div>
        <ul className="text-center">
          {sortedArray.map((item, index) => (
            <li key={index}>
              <Link
                to={`/folders/${item}`}
                className="btn btn-secondary btn-lg mt-4"
              >
                {item}
              </Link>
            </li>
          ))}
        </ul>
      </div>{' '}
    </>
  );
};

export default FoldersList;
