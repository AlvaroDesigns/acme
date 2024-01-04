"use client";
import { Controller, useForm } from "react-hook-form";
import { title } from "@/components/primitives";
import { Button, Input } from "@nextui-org/react";
import { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";

export default function BlogPage() {
  const [isVisible, setIsVisible] = useState(false);

  const toggleVisibility = () => setIsVisible(!isVisible);

  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
  } = useForm();
  const router = useRouter();

  const onSubmit = handleSubmit(async (data) => {
    const res = await fetch("/api/register", {
      method: "POST",
      body: JSON.stringify({
        username: data.username,
        email: data.email,
        password: data.password,
      }),
      headers: {
        "Content-Type": "application/json",
      },
    });

    if (res.ok) {
      router.push("/home");
    }
  });

  console.log(errors);

  return (
    <div>
      <div className="justify-center inline-block max-w-lg mb-8 text-center">
        <h1 className={title()}>Make&nbsp;</h1>
        <h1 className={title({ color: "violet" })}>beautiful&nbsp;</h1>
        <br />
        <h1 className={title()}>
          websites regardless of your design experience.
        </h1>
      </div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Input
          isRequired
          radius="full"
          className="mb-4"
          type="text"
          label="Nombre y Apellido"
          fullWidth={true}
          placeholder="Introducce tu nombre y apellido"
          {...register("username", {
            required: {
              value: true,
              message: "username is required",
            },
          })}
        />

        <Input
          isRequired
          radius="full"
          className="mb-4"
          type="email"
          label="Email"
          fullWidth={true}
          placeholder="Introducce tu correo electronico"
          {...register("email", {
            required: {
              value: true,
              message: "Email is required",
            },
          })}
        />
        <Input
          isRequired
          radius="full"
          className="mb-4"
          label="Contraseña"
          fullWidth={true}
          placeholder="Introducce tu contraseña"
          type={isVisible ? "text" : "password"}
          {...register("password", {
            required: {
              value: true,
              message: "Password is required",
            },
          })}
        />

        <Button
          radius="full"
          color="primary"
          type="submit"
          className="bg-gradient-to-r from-[#FF1CF7] to-[#b249f8] w-full h-14 mb-2"
        >
          Registrarme
        </Button>
        <p>
          ¿Ya tienes una cuenta? <Link href="/">Login</Link>
        </p>
      </form>
    </div>
  );
}

/**
 * 
 *         <Input
          isRequired
          radius="full"
          className="mb-4"
          label="Telefono"
          fullWidth={true}
          placeholder="Introducce tu telefono"
          startContent="+34"
          type="number"
          {...register("phone", {
            required: {
              value: true,
              message: "Phone is required",
            },
          })}
        />

 */
