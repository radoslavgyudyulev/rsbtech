import React, { useEffect, useState } from "react";
import { Button } from "components/_shared";
import validate from "utils/validate";

const Form = ({ inputsWithValidations, children, onSubmit }) => {
  const errors = validate(inputsWithValidations);
  const hasAnyError = Object.keys(errors).filter((key) => errors[key].length > 0).length > 0;

  return (
    <form onSubmit={onSubmit}>
      {children(errors)}
      <Button btnText="Submit" type="submit" disabled={hasAnyError} />
    </form>
  );
};

export default Form;
