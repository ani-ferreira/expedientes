import { useNavigate } from 'react-router-dom';
import Form from '../components/Form';
import Swal from 'sweetalert2';
import { useDispatch } from 'react-redux';
import { createPost } from '../store/postActions';

const CreatePost = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  let newDataObj = {};

  function onSaveDataHandler(data) {
    newDataObj = { ...data };
  }

  function onSubmit() {
    async function creatingPost() {
      return dispatch(createPost(newDataObj));
    }

    creatingPost()
      .then(() => {
        Swal.fire({
          title: 'Guardado!',
          text: 'Se agregó el movimiento correctamente.',
          icon: 'success',
          confirmButtonText: 'Salir',
          timer: 1600,
        });
      })
      .then(() => {
        navigate('/');
      });
  }

  return (
    <div className="col-md-10 mt-3 mx-auto">
      <h1 className="h3 mb-3 font-weight-normal">Ingresar datos</h1>
      <Form onSubmit={onSubmit} onSaveDataHandler={onSaveDataHandler} />
    </div>
  );
};

export default CreatePost;
