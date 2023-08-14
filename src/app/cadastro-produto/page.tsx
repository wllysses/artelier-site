'use client';

import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import styles from "./page.module.scss";
import { ErrorMessage } from "@/components/ErrorMessage";
import { api } from "@/services/api";

export default function RegisterProduct() {

    const validationSchema = z.object({
        name: z.string().nonempty('Campo obrigatório.'),
        category_id: z.string().nonempty('Campo obrigatório.'),
        price: z.string().nonempty('Campo obrigatório.'),
        photo: z.string().nonempty('Campo obrigatório.'),
        description: z.string().nonempty('Campo obrigatório.')
    });

    type ValidationSchema = z.infer<typeof validationSchema>;

    const { register, handleSubmit, formState: { errors } } = useForm<ValidationSchema>({
        resolver: zodResolver(validationSchema)
    });

    async function handleRegisterProduct(data: ValidationSchema) {
        const fetchData = await api.registerProduct(data);

        console.log(fetchData)
    }

    return (
        <div className={styles.main__wrapper}>
            <div>
                <h1>Cadastrar Novo Produto</h1>
                <p>Preencha todas as informações</p>
            </div>
            <form onSubmit={handleSubmit(handleRegisterProduct)}>
                <div className={styles.field__group}>
                    <label>Nome do produto</label>
                    <input type="text" id="name" { ...register('name') } />
                    { errors.name && <ErrorMessage message={errors.name.message!}/> }
                </div>
                <div className={styles.field__group}>
                    <label>Categoria do produto</label>
                    <select 
                        id="category"
                        { ...register('category_id') }
                    >
                        <option value="" disabled selected>Selecionar</option>
                        <option value={1}>Quadros</option>
                        <option value={2}>Convites</option>
                        <option value={3}>Kits</option>
                        <option value={4}>Chaveiros</option>
                        <option value={5}>Polaroides</option>
                        <option value={6}>Caixas</option>
                        <option value={7}>Sacolas</option>
                    </select>
                    { errors.category_id && <ErrorMessage message={errors.category_id.message!}/> }
                </div>
                <div className={styles.field__group}>
                    <label>Preço do produto</label>
                    <input type="text" id="price" { ...register('price') } />
                    { errors.price && <ErrorMessage message={errors.price.message!}/> }
                </div>
                <div className={styles.field__group}>
                    <label>Foto do produto</label>
                    <input type="text" id="photo" { ...register('photo') } />
                    { errors.photo && <ErrorMessage message={errors.photo.message!}/> }
                </div>
                <div className={styles.field__group}>
                    <label>Descrição do produto</label>
                    <textarea id="photo" rows={10} { ...register('description') } />
                    { errors.description && <ErrorMessage message={errors.description.message!}/> }
                </div>
                <button type="submit">Cadastrar</button>
            </form>
        </div>
    );
}