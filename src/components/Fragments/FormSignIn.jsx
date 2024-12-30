import { useForm } from "react-hook-form";
import Button from "../Elements/Button";
import CheckBox from "../Elements/CheckBox";
import LabeledInput from "../Elements/LabeledInput";

const FormSignIn = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm({ mode: "onChange" });

  const onFormSubmit = (data) => console.log(data);
  const onErrors = (errors) => console.log(errors);

  return (
    <form onSubmit={handleSubmit(onFormSubmit, onErrors)}>
      <div className="mb-6">
        <LabeledInput
          label="Email address"
          type="email"
          placeholder="hello@example.com"
          name="email"
          register={{
            ...register("email", {
              required: "Email address is required",
              pattern: {
                value: /^[\w\-\.]+@([\w-]+\.)+[\w-]{2,}$/,
                message: "Invalid email address format",
              },
            }),
          }}
        />
        {errors?.email && (
          <div className="text-center text-red-500">
            {errors.email.message.toString()}
          </div>
        )}
      </div>
      <div className="mb-6">
        <LabeledInput
          label="Password"
          type="password"
          placeholder="*************"
          name="password"
          register={{
            ...register("password", {
              required: "Password is required",
            }),
          }}
        />
        {errors?.password && (
          <div className="text-center text-red-500">
            {errors.password.message.toString()}
          </div>
        )}
      </div>
      <div className="mb-3">
        <CheckBox label="Keep me signed in" name="status" />
      </div>
      <Button
        variant={
          !isValid
            ? "bg-gray-05 w-full text-white"
            : "bg-primary w-full text-white"
        }
        type="submit"
        disabled={!isValid}
      >
        Login
      </Button>
    </form>
  );
};

export default FormSignIn;
