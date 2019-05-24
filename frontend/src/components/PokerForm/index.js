import React from "react";

import { Formik } from "formik";
import * as Yup from "yup";

import Input from "../Input";
import Label from "../Label";
import Button from "../Button";
import ErrorMessage from "../ErrorMessage";
import Form from "../Form";

const PokerSchema = Yup.object().shape({
  hand1: Yup.string().required("Please, insert the cards of player one."),
  hand2: Yup.string().required("Please, insert the cards of player two.")
});

const PokerForm = ({ handleSubmit }) => {
  return (
    <Formik
      initialValues={{
        hand1: "",
        hand2: ""
      }}
      validationSchema={PokerSchema}
      onSubmit={(values, { setSubmitting, resetForm }) => {
        handleSubmit(values);
        resetForm();
        setSubmitting(false);
      }}
    >
      {({
        values,
        errors,
        touched,
        handleChange,
        handleBlur,
        handleSubmit,
        isSubmitting
      }) => (
        <Form method="post" onSubmit={handleSubmit}>
          <Label>
            Hand One
            <Input
              type="text"
              name="hand1"
              placeholder="Insert poker hand one"
              value={values.hand1}
              onChange={handleChange}
              onBlur={handleBlur}
            />
            {errors.hand1 && touched.hand1 ? (
              <ErrorMessage>{errors.hand1}</ErrorMessage>
            ) : null}
          </Label>

          <Label>
            Hand Two
            <Input
              type="text"
              name="hand2"
              placeholder="Insert poker hand two"
              value={values.hand2}
              onChange={handleChange}
              onBlur={handleBlur}
            />
            {errors.hand2 && touched.hand2 ? (
              <ErrorMessage>{errors.hand2}</ErrorMessage>
            ) : null}
          </Label>

          <Button type="submit" disabled={isSubmitting}>
            Checks Hand's
          </Button>
        </Form>
      )}
    </Formik>
  );
};

export default PokerForm;
