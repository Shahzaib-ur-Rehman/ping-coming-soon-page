import React from "react";
import { useForm } from "react-hook-form";
import "./form.css";
const Form = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => console.log(data);
  return (
    <form className="subcription-form" onSubmit={handleSubmit(onSubmit)}>
      <input
        type="email"
        aria-describedby="errorBox"
        placeholder="Your email address..."
        className="input"
        {...register("email", {
          pattern: /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g,
        })}
      />

      <button className="btn" type="submit">
        Notify Me
      </button>
      {errors.email && (
        <span id="errorBox" className="error-message">
          Please provide a valid email address
        </span>
      )}
    </form>
  );
};

export default Form;
