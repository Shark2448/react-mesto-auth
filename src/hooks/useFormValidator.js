// import { useState } from "react"

// export function useFormValidation({
//   validators = {}
// } = {}) {
//   const [values, setValues] = useState({});
//   const [errors, setErrors] = useState({});
//   const [isValid, setIsValid] = useState(false);

//   const handleChange = (e) => {
//     const { name, value } = e.target;

//     const validator = validators[name]

//     setValues({ ...values, [name]: value });

//     if (validator) {
//       const validationMessage = validator(value)

//       if (validationMessage) {
//         setErrors({ ...errors, [name]: validationMessage})
//         setIsValid(false);
//       } else {
//         // delete property 
//         const newErrors = {...errors}
//         setErrors(newErrors)
//         setIsValid(true);
//       }
//     }
//   }

//   return { handleChange, values, setValues, errors, setErrors, isValid, setIsValid }
// }