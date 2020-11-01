import {
  emailValidation,
  phoneValidation,
  requiredValidation,
  passwordValidation,
} from "utils/validations";

const takeValidation = (validation, value) => {
  switch (validation) {
    case "emailValidation":
      return emailValidation(value);
    case "phoneValidation":
      return phoneValidation(value);
    case "requiredValidation":
      return requiredValidation(value);
    case "passwordValidation":
      return passwordValidation(value);
  }
};

const validate = (items) => {
  let errors = {};

  Object.keys(items).map((item) => {
    errors = { ...errors, [item]: [] };
    items[item].validate.map((validation) => {
      const errorKey = item;
      const errorValue = items[errorKey].value;

      errors[errorKey].push(takeValidation(validation, errorValue));

      errors[errorKey] = errors[errorKey].filter((e) => e !== "");
    });
  });

  return errors;
};

export default validate;
