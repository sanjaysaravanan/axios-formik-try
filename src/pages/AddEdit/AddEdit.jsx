import React from 'react';

import { useFormik } from 'formik';
import * as Yup from 'yup';

import styles from './addedit.module.css';
import { moviesIntance } from '../../axios';

const formValidationSchema = Yup.object().shape({
  title: Yup.string()
    .min(2, 'Too Short!')
    .max(50, 'Too Long!')
    .required('Required'),
  imageUrl: Yup.string()
    .min(10, 'Too Short!')
    .url('Please check the url')
    .required('Required'),
  rating: Yup.string().required('Required'),
  language: Yup.string().required('Please Select a Language'),
});

const AddEdit = () => {
  const formik = useFormik({
    initialValues: {
      title: '',
      imageUrl: '',
      rating: '',
      language: '',
    },
    validationSchema: formValidationSchema,
    onSubmit: values => {
      moviesIntance.post('/movie', values)
        .then(function (response) {
          console.log(response);
        })
    },
  });

  return (
    <div
      className={styles.root}
    >
      <h3
        style={{ margin: '4px 0' }}
      >Fill the below detailt to add a movie</h3>
      <form onSubmit={formik.handleSubmit} >
        <label
          htmlFor='title'
          style={{ display: 'block' }}
        >Title</label>
        <input
          name="title"
          placeholder='Enter movie Title'
          id="title"
          className={`${styles.inputEdit} ${formik.touched.title && formik.errors.title ? styles.errorField : ''}`}
          type="text"
          value={formik.values.title}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
        />
        {formik.touched.title && formik.errors.title && <div className={styles.validationError} >{formik.errors.title}</div>}
        <label
          htmlFor='imageUrl'
          style={{ display: 'block' }}
        >Image</label>
        <input
          name="imageUrl"
          placeholder='Image Url'
          id="imageUrl"
          className={`${styles.inputEdit} ${formik.touched.imageUrl && formik.errors.imageUrl ? styles.errorField : ''}`}
          value={formik.values.imageUrl}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
        />
        {formik.touched.imageUrl && formik.errors.imageUrl && <div className={styles.validationError} >{formik.errors.imageUrl}</div>}
        <label
          style={{ display: 'block' }}
        >Rating</label>
        <label
          htmlFor='u'
        >
          U
        </label>
        <input
          type="radio"
          id="u"
          value='U'
          name="rating"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
        />
        <label
          htmlFor='ua'
        >
          U/A
        </label>
        <input
          type="radio"
          id="ua"
          value='U/A'
          name="rating"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
        />
        <label
          htmlFor='a'
        >
          A
        </label>
        <input
          type="radio"
          id="a"
          value='A'
          name="rating"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
        />
        {formik.touched.rating && formik.errors.rating && <div className={styles.validationError} >{formik.errors.rating}</div>}
        <label
          htmlFor='language'
          style={{ display: 'block' }}
        >Language</label>
        <select
          name='language'
          id="language"
          className={`${styles.inputEdit} ${formik.touched.language && formik.errors.language ? styles.errorField : ''}`}
          style={{
            width: '100%',
          }}
          value={formik.values.language}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
        >
          <option value="" >Please choose an option</option>
          <option value="English" >English</option>
          <option value="Hindi" >Hindi</option>
          <option value="Tamil" >Tamil</option>
          <option value="Telugu" >Telugu</option>
          <option value="Kannada" >Kannada</option>
        </select>
        {formik.touched.language && formik.errors.language && <div className={styles.validationError} >{formik.errors.language}</div>}
        <div
          style={{
            textAlign: 'center'
          }}
        >
          <button
            type='submit'
            className={styles.submitBtn}
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddEdit;
