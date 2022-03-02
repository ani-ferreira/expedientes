import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Swal from 'sweetalert2';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { editPostById, getPostById } from '../store/postActions';
import Form from '../components/Form';

export default function EditPost() {
  const post = useSelector((state) => state.postsReducer.post);
  const { id } = useParams();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    dispatch(getPostById(id));
  }, [dispatch, id]);

  let newData = {};

  function onSaveDataHandler(data) {
    newData = { ...data };
  }

  function onSubmit() {
    async function editingPost() {
      dispatch(editPostById({ id: id, data: newData }));
    }

    editingPost()
      .then(() => {
        Swal.fire({
          title: 'Guardado!',
          text: 'Se editó el movimiento correctamente.',
          icon: 'success',
          confirmButtonText: 'Salir',
          timer: 1600,
        });
      })
      .then(() => {
        navigate('/posts');
      });
  }

  return (
    <div className="col-md-10 mt-3 mx-auto">
      <h1 className="h3 mb-3 font-weight-normal">Ingresar datos</h1>
      <Form
        onSubmit={onSubmit}
        onSaveDataHandler={onSaveDataHandler}
        post={post}
      />
    </div>
  );
}
