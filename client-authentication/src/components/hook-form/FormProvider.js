import React from 'react';
import { FormProvider as Form } from 'react-hook-form';

const FormProvider = ({ children, methods, onSubmit }) => (
  <Form {...methods}>
    <form onSubmit={onSubmit}>{children}</form>
  </Form>
);

export default FormProvider;
