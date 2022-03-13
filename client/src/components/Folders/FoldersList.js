import { Link } from 'react-router-dom';

const FoldersList = (props) => {
  //abc order for the folder`s array
  const sortedArray = props.folder.sort();

  let viewIsSmall = 'btn-md';

  if (window.matchMedia('(max-width: 700px)').matches) {
    // Viewport is less or equal to 700 pixels wide
    viewIsSmall = 'btn-md';
  } else {
    // Viewport is greater than 700 pixels wide
    viewIsSmall = 'btn-lg';
  }
  return (
    <>
      <div>
        <ul className="text-center">
          {sortedArray.map((item, index) => (
            <li key={index}>
              <Link
                to={`/folders/${item}`}
                className={`btn btn-secondary ${viewIsSmall} mt-4`}
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
