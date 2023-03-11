// import { useState } from "react"

// export function useFormValidation({
//   initialValues = {},
//   validators = {}
// } = {}) {
//   const [values, setValues] = useState(initialValues);
//   const [errors, setErrors] = useState({});
//   const [touched, setTouched] = useState({})

//   const handleBlur = (e) => {
//     const { name, value } = e.target;
//     setTouched((prev) => ({...prev, [name]: true}))
//     const validator = validators[name]

//     if (validator) {
//       const validationMessage = validator(value)
//       setErrors({ ...errors, [name]: validationMessage ?? null })
//     }
//   }

//   const handleChange = (e) => {
//     const { name, value } = e.target;

//     const validator = validators[name]

//     setValues({ ...values, [name]: value });

//     if (!touched[name]) {
//       return
//     }

//     if (validator) {
//       const validationMessage = validator(value)
//       setErrors({ ...errors, [name]: validationMessage ?? null })
//     }
//   }

//   const handleSubmit = (foo) => (e) => {
//     if (!Object.values(errors).each(Boolean) || Object.value(errors).length === 0) {
//       foo(e)
//       return
//     } 

//     Object.entries(validators).forEach(([name, validator]) => {
//       validator(values[name])
//     })
//   }

//   return { handleChange, values, errors, handleBlur, handleSubmit }
// }