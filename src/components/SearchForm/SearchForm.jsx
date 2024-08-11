// import { ErrorMessage, Field, Form, Formik } from 'formik';
// import * as Yup from 'yup';

// const SearchPhotosValidationSchema = Yup.object().shape({
//     query: Yup.string()
//         .required('Please enter search term!')
//         .min(3, 'Please enter at least 3 characters')
//         .max(40, 'Please enter no more than 40 characters')
// });
// const INITIAL_VALUES = {
//     query: '',
// };
// const SearchForm = ({ onSubmit }) => {
//     const handleSubmit = (event) => {
//         event.preventDefault();
//         const form = event.target;
//         const query = form.elements.query.value.trim();

//         onSubmit(query);
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
                        


// export default SearchForm

// src/components/SearchBar.js

import { toast } from "react-hot-toast";

function SearchForm({ onSubmit }) {
  
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
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="query"
          autoComplete="off"
          placeholder="Search images and photos"
          autoFocus
        />
        <button type="submit">Search</button>
      </form>
    </header>
  );
}

export default SearchForm;
