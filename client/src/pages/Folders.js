import { useEffect } from 'react';
import FoldersList from '../components/Folders/FoldersList';
import LoadingSpinner from '../components/Layout/LoadingSpinner';
import { useSelector, useDispatch } from 'react-redux';
import { getPosts } from '../store/postActions';

const Folders = () => {
  const dispatch = useDispatch();
  const steps = useSelector((state) => state.postsReducer.posts.posts);

  useEffect(() => {
    dispatch(getPosts());
  }, [dispatch]);

  let uniqueFol = [];

  if (steps) {
    uniqueFol = [...new Set(steps.map((fol) => fol.expediente))];
  }

  return (
    <>
      {steps ? (
        <div className="container">
          <div className="container">
            <h3 className="banner">Carpetas</h3>
          </div>
          <FoldersList folder={uniqueFol} steps={steps} />
        </div>
      ) : (
        <LoadingSpinner />
      )}
    </>
  );
};

export default Folders;
