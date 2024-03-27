import React from "react";
import classes from "./form-call.module.css";
import { useForm } from "react-hook-form";
import { Button } from "../../ui/button/button";
import { Input } from "../../ui/input/input";
import { Textarea } from "../../ui/textarea/textarea";

export const FormCall = () => {
  const { register, handleSubmit } = useForm();

  return (
    <div className={classes.container}>
      <h2 className={classes.title}>Заказать звонок</h2>
      <form
        className={classes.form}
        onSubmit={handleSubmit((data) => console.log(data))}
      >
        <Input
          props={register("name")}
          label={"Имя"}
          placeholder={"Ваше имя"}
        />
        <Input
          mask={"+7 (999) 999 - 99 - 99"}
          props={register("phone]")}
          label={"Телефон"}
          placeholder={"+7 (ХХХ) ХХХ - ХХ - ХХ"}
        />
        <Input
          props={register("email")}
          label={"Email"}
          placeholder={"mail@site.com"}
        />
        <Textarea
          props={register("message")}
          label={"Сообщение"}
          placeholder={"Ваше сообщение ..."}
        />
        <div>
          <p className={classes.agree}>
            Нажимая кнопку &laquo;Отправить&raquo;, соглашаюсь с
          </p>
          <a className={classes.link} href="##">
            политикой конфиденциальности
          </a>
        </div>
        <Button type="submit" text="Отправить" />
      </form>
    </div>
  );
};
