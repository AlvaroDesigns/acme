"use client";
import { title, subtitle } from "@/components/primitives";
import { Button, Link, Checkbox, Input } from "@nextui-org/react";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { auth } from "@/libs/firebase";
import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { GoogleLogo } from "@/components/icons";
import { useForm } from "react-hook-form";
import { signIn } from "next-auth/react";

type ButtonProps = {
  children: React.ReactNode;
  onClick: () => void;
};

export default function Home() {
  const [user, setUser] = useState(null);
  const [isVisible, setIsVisible] = useState(false);
  const router = useRouter();

  const toggleVisibility = () => setIsVisible(!isVisible);

  const signInGoogle = async () => {
    try {
      const provider = new GoogleAuthProvider();
      const result = await signInWithPopup(auth, provider);
      setUser(result?.user);

      if (result.user.email) {
        router.push("/home");
      }
    } catch (error) {
      console.error("Error al iniciar sesión con Google:", error);
    }
  };

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const [error, setError] = useState(null);

  const onSubmit = handleSubmit(async (data) => {
    console.log(data);

    const res = await signIn("credentials", {
      email: data.email,
      password: data.password,
      redirect: false,
    });

    console.log(res);
    if (res?.error) {
      setError(res?.error);
    } else {
      router.push("/home");
      router.refresh();
    }
  });

  return (
    <section className="flex flex-col items-center justify-center gap-4 py-8 md:py-10">
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="justify-center inline-block max-w-lg text-center"
      >
        <div className="justify-center inline-block max-w-lg mb-8 text-center">
          <h1 className={title({ color: "violet" })}>Acme</h1>
          <br />
          <h2 className={subtitle()}>
            te ayuda a comunicarte y compartir con las personas que forman parte
            de tu vida.
          </h2>
        </div>
        <Input
          isRequired
          radius="full"
          className="mb-4"
          type="email"
          label="Email"
          fullWidth={true}
          placeholder="Introducce tu correo electronico"
          {...register("email")}
        />
        <Input
          isRequired
          radius="full"
          className="mb-4"
          label="Password"
          fullWidth={true}
          placeholder="Introducce tu contraseña"
          type={isVisible ? "text" : "password"}
          {...register("password")}
        />

        <Button
          radius="full"
          color="primary"
          type="submit"
          className="bg-gradient-to-r from-[#FF1CF7] to-[#b249f8] w-full h-14 mb-2"
        >
          Iniciar
        </Button>
        <Checkbox
          defaultSelected
          radius="full"
          size="sm"
          className="mb-4"
          {...register("legal")}
        >
          <p className="text-xs">
            Al hacer clic en “Iniciar” aceptas las Condiciones de uso del sitio
            web.
          </p>
        </Checkbox>
        <p>
          ¿No tienes una cuenta? <Link href="/register">Registrarse</Link>
        </p>
        <p className={subtitle()}>OR</p>
        <Button
          radius="full"
          color="primary"
          className="w-full h-14 mb-2"
          onClick={signInGoogle}
        >
          <GoogleLogo />
          Continue with Google
        </Button>
      </form>
    </section>
  );
}
