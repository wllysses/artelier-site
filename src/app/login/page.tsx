'use client';

import { useEffect } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useRouter } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { api } from "@/services/api";
import { ErrorMessage } from "@/components/ErrorMessage";
import logo from "@/../public/artelier-logo.jpg";
import styles from "./page.module.scss";

export default function LoginPage() {

    const router = useRouter();

    const loginSchema = z.object({
        email: z.string().nonempty('Campo obrigatório').email('Formato de e-mail inválido.'),
        password: z.string().nonempty('Campo obrigatório.').min(5, 'Mínimo 5 caracteres.')
    });

    type LoginSchema = z.infer<typeof loginSchema>;

    const { register, handleSubmit, formState: { errors } } = useForm<LoginSchema>({
        resolver: zodResolver(loginSchema)
    });

    async function handleLogin(data: LoginSchema) {

        const fetchData = await api.userLogin(data);

        if (fetchData.message !== 'Welcome!') {
            return alert('E-mail ou senha incorretos.')
        }

        alert('Credenciais validadas com sucesso!')
        localStorage.setItem('@USER_TOKEN', fetchData.token);
        router.push('/cadastro-produto');
    }

    useEffect(() => {
        if (localStorage.getItem('@USER_TOKEN') !== null) {
            router.push('/cadastro-produto');
        }
    }, []);

    return (
        <div className={styles.wrapper}>
            <div className={styles.content}>
                <div className={styles.header}>
                    <Image src={logo} alt="Artelier Logo" />
                    <h2>Bem-vindo(a)</h2>
                    <p>Faça login com a sua conta</p>
                </div>
                <form className={styles.form} onSubmit={handleSubmit(handleLogin)}>
                    <div className={styles.field__group}>
                        <label>E-mail</label>
                        <input type="email" id="email" placeholder="Digite seu e-mail" {...register('email')} />
                        {errors.email && <ErrorMessage message={errors.email.message!} />}
                    </div>
                    <div className={styles.field__group}>
                        <label>Senha</label>
                        <input type="password" id="password" placeholder="Digite sua senha" {...register('password')} />
                        {errors.password && <ErrorMessage message={errors.password.message!} />}
                    </div>
                    <button type="submit">Entrar</button>
                </form>
            </div>
            <Link href="/">Voltar para o site</Link>
        </div>
    );
}