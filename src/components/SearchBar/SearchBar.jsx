import toast,{ Toaster } from "react-hot-toast";
import css from './SearchBar.module.css';
function SearchBar({ onSubmit }) {
  
  const handleSubmit = (event) => {
    event.preventDefault();
    const form = event.target;
    const query = form.elements.query.value.trim();
    
    if (query.trim() === "") {
      toast.error("Please enter a search term.");
      return;
    }
    
    onSubmit(query);
    form.reset();
  };
  
  
  return (
    <header>
      <form className={css.form} onSubmit={handleSubmit}>
        <input className={css.input}
          type="text"
          name="query"
          autoComplete="off"
          placeholder="Search images and photos"
          autoFocus
          />
        <button className={css.button} type="submit">Search</button>
      </form>
      <Toaster/>
    </header>
  );
}

export default SearchBar;

// import { ErrorMessage, Field, Form, Formik } from 'formik';
// import * as Yup from 'yup';
// import { useState } from 'react';

// const SearchPhotosValidationSchema = Yup.object().shape({
//     query: Yup.string()
//         .required('Please enter search term!')
//         .min(3, 'Please enter at least 3 characters')
//         .max(40, 'Please enter no more than 40 characters')
// });
// const INITIAL_VALUES = {
//     query: '',
// };
// const SearchBar = ({ onSubmit }) => {

//   const [query, setQuery] = useState('');
//     const handleSubmit = (event) => {
//       event.preventDefault();
//       setQuery(event.target.elements.query.value);
//         const form = event.target;
//       const query = form.elements.query.value.trim();

//       if (!query.trim()) {
//           return ErrorMessage('Please enter search term!');
//       }

//       onSubmit(query);
//       setQuery('');
//         form.reset();
//     };
//     {
//         return (
//             <Formik
//                 initialValues={INITIAL_VALUES}
//                 onSubmit={handleSubmit}
//                 validationSchema={SearchPhotosValidationSchema}
//             >
//                 <Form>
//                     <label>
//                         <span>Search images and photos</span>

//                         <Field
//                             type="text"
//                             name="query"
//                             autoComplete="off"
//                             autoFocus
//                             placeholder=""
//                         />
//                         <ErrorMessage name="query" component="span" />
//                     </label>

//                     <button type="submit"> Search</button>
//                 </Form>
//             </Formik>)
        
//     }
// }
                        


// export default SearchBar;