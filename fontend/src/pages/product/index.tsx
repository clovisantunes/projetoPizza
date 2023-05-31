import { useState } from "react";
import { ChangeEvent } from "react";
import Head from "next/head";
import style from "./styles.module.scss";
import { canSSRAuth } from "../../utils/canSSRAuth";
import { Header } from "../../components/Header";
import { Button } from "../../components/ui/Button/Index";
import { Input } from "../../components/ui/input";
import { FiUpload } from "react-icons/fi";

export default function Product() {
  const [avatarUrl, setAvatarUrl] = useState("");
  const [imageAvatar, setImageAvatar] = useState(null);

  function handleFile(e: ChangeEvent<HTMLInputElement>) {
    if (!e.target.files) {
      return;
    }

    const image = e.target.files[0];

    if (!image) {
      return;
    }

    if (image.type === "image/jpeg" || image.type === "image/png") {
      setImageAvatar(image);
      setAvatarUrl(URL.createObjectURL(e.target.files[0]));
    }
  }

  return (
    <>
      <Head>
        <title>Novo produto - Pizzaria</title>
        </Head>
        <div>
          <Header />
          <main className={style.container}>
            <h1>Novo produto</h1>
            <form className={style.form}>
              <label className={style.labelAvatar}>
                <span>
                  <FiUpload size={30} color="#FFF" />
                </span>

                <input
                  type="file"
                  accept="image/png, image/jpeg"
                  onChange={handleFile}
                />

                {avatarUrl && (
                  <img
                    className={style.preview}
                    src={avatarUrl}
                    alt="Foto do produto"
                    width={250}
                    height={250}
                  />
                )}
              </label>

              <select>
                <option>Bebida</option>
                <option>Pizzas</option>
              </select>
              <Input type="text" placeholder="Digite o nome do produto" />
              <Input type="text" placeholder="Preço do produto" />
              <textarea placeholder="Descreva o produto" />
              <Button className={style.buttonAdd}>Cadastrar</Button>
            </form>
          </main>
        </div>
      
    </>
  );
}

export const getServerSideProps = canSSRAuth(async (ctx) => {
  return {
    props: {},
  };
});
