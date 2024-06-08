import css from "./RentForm.module.css";
import { useState } from "react";

import { CiCalendar } from "react-icons/ci";
import { Field, Formik, Form, ErrorMessage } from "formik";
import * as Yup from "yup";
import { useId } from "react";

import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

export const RentForm = () => {
  const nameField = useId();
  const emailField = useId();
  const dateField = useId();
  const commentField = useId();
  const [startDate, setStartDate] = useState(null);
  const [isOpen, setIsOpen] = useState(false);

  const validationSchema = Yup.object().shape({
    name: Yup.string()
      .required("Name is required")
      .min(3, "Minimum 3 characters")
      .max(50, "Maximum 50 characters"),
    email: Yup.string()
      .required("Email is required")
      .email("Invalid email format")
      .matches(
        /^(([^<>()\\[\]\\.,;:\s@"]+(\.[^<>()\\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
        "Invalid email format"
      ),
    date: Yup.string().required("Date is required"),
    textarea: Yup.string(),
  });

  const handleDateChange = (date, setFieldValue) => {
    setStartDate(date);
    setFieldValue("date", date);
    setIsOpen(false);
  };

  const handleSubmit = (values) => {
    console.log(values);
    window.location.reload();
  };

  return (
    <div className={css.formContainer}>
      <div className={css.formDesc}>
        <h3 className={css.formTitle}>Book your campervan now</h3>
        <p className={css.formDesc}>
          Stay connected! We are always ready to help you.
        </p>
      </div>
      <Formik
        initialValues={{
          name: "",
          email: "",
          date: "",
          comment: "",
        }}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        {({ setFieldValue }) => (
          <Form autoComplete="off" className={css.form} action="/">
            <div className={css.fields}>
              <div className={css.formGroup}>
                <Field
                  placeholder={"Name"}
                  className={`${css.formFiled} ${css.nameFiled}`}
                  type="text"
                  name="name"
                  id={nameField}
                />
                <ErrorMessage
                  className={css.error}
                  name="name"
                  component="span"
                />
              </div>
              <div className={css.formGroup}>
                <Field
                  placeholder={"Email"}
                  className={css.formFiled}
                  type="text"
                  name="email"
                  id={emailField}
                />
                <ErrorMessage
                  className={css.error}
                  name="email"
                  component="span"
                />
              </div>
              <div className={css.formGroup} style={{ position: "relative" }}>
                <Field
                  placeholder={"Booking date"}
                  className={`${css.formFiled} ${css.dateFiled}`}
                  type="text"
                  name="date"
                  id={dateField}
                  value={startDate ? startDate.toLocaleDateString() : ""}
                  readOnly
                />
                <CiCalendar
                  className={css.calendarIcon}
                  onClick={() => setIsOpen(!isOpen)}
                />
                {isOpen && (
                  <div className={css.datePickerWrapper}>
                    <DatePicker
                      selected={startDate}
                      onChange={(date) => handleDateChange(date, setFieldValue)}
                      inline
                      onClickOutside={() => setIsOpen(false)}
                    />
                  </div>
                )}
                <ErrorMessage
                  className={css.error}
                  name="date"
                  component="span"
                />
              </div>
              <div className={css.formGroup}>
                <Field
                  as="textarea"
                  placeholder={"Comment"}
                  className={`${css.formFiled} ${css.textareaField}`}
                  type="text"
                  name="textarea"
                  id={commentField}
                />
                <ErrorMessage
                  className={css.error}
                  name="textarea"
                  component="span"
                />
              </div>
            </div>
            <div className={css.btnGroup}>
              <button className={css.btn} type="submit">
                Send
              </button>
            </div>
          </Form>
        )}
      </Formik>
    </div>
  );
};
