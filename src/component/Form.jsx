import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

const schema = yup
  .object({
    name: yup
      .string()
      .matches(/^[A-Za-z]+ [A-Za-z]+$/, "Please enteer valid name")
      .required("name is required"),
    email: yup
      .string()
      .matches(
        /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,4}$/,
        "Please enter a valid email address"
      )
      .required("email is required"),
    message: yup.string().required("message is required"),
  })
  .required();

export default function Form() {
  const {
    register,
    handleSubmit,reset,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });
  const onSubmit = (data) =>{
     console.log(data)
     reset()
    }

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="input-container">
        <input className="input" {...register("name")} placeholder="NAME" />
        <p className="errors">{errors.name?.message}</p>
      </div>

      <div className="input-container">
        <input className="input" {...register("email")} placeholder="EMAIL" />
        <p className="errors">{errors.email?.message}</p>
      </div>
      <div className="input-container">
        <input
          className="input"
          {...register("message")}
          placeholder="MESSAGE"
        />
        <p className="errors">{errors.message?.message}</p>
      </div>

      <input className="btn" type="submit" value="SEND" />
    </form>
  );
}
