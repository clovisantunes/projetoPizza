import { FormEvent, useState } from "react";
import { ChangeEvent } from "react";
import Head from "next/head";
import style from "./styles.module.scss";
import { canSSRAuth } from "../../utils/canSSRAuth";
import { Header } from "../../components/Header";
import { Button } from "../../components/ui/Button/Index";
import { Input } from "../../components/ui/input";
import { FiUpload } from "react-icons/fi";
import { setupAPIClient } from '../../services/api';
import { toast } from "react-toastify";

type itemProps = {
  id:string,
  name:string;
}

interface CategoryProps{
  categoryList: itemProps[];
}

export default function Product({ categoryList}: CategoryProps) {

  const [name, setName] = useState('');
  const [price, setPrice] = useState('');
  const [description, setDescription] = useState('');

  const [avatarUrl, setAvatarUrl] = useState("");
  const [imageAvatar, setImageAvatar] = useState(null);

  const [categories, setCategories] = useState(categoryList || []);
  const [categorySelected, setCategorySelected] =useState(0)

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

function handleSelected(event){
  setCategorySelected(event.target.value)
}


async function handleRegister(event: FormEvent){
  event.preventDefault();

  try{
    const data = new FormData();

    if(name === '' || price === '' || description === ''|| imageAvatar === null){
      toast.error("Preencha todos os campos");
      return;
    }

    data.append('name', name);
    data.append('price', price);
    data.append('description', description);
    data.append('category_id', categories[categorySelected].id);
    data.append('file', imageAvatar)


    const apiClient = setupAPIClient();
    await apiClient.post('/product', data)
    toast.success('Cadastrado com sucesso')


  }catch(err){
    toast.error("Erro de cadastro")
  }
  setName('');
  setPrice('');
  setDescription('');
  setImageAvatar('');
  setAvatarUrl('');
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
            <form className={style.form} onSubmit={handleRegister}>
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

              <select value={categorySelected} onChange={handleSelected}>
               {categories.map((item, index) => {
                return(
                  <option key={item.id} value={index}>
                    {item.name}
                  </option>
                )
               })}
      
              </select>
              <Input 
              type="text" 
              placeholder="Digite o nome do produto" 
              value={name}
              onChange={(e) =>setName(e.target.value) }
              />
              <Input 
              type="text" 
              placeholder="Preço do produto" 
              value={price}
              onChange={(e) =>setPrice(e.target.value) }
              />
              <textarea placeholder="Descreva o produto" 
              value={description}
              onChange={(e) =>setDescription(e.target.value)}
              
              />
              <Button className={style.buttonAdd}>Cadastrar</Button>
            </form>
          </main>
        </div>
      
    </>
  );
}

export const getServerSideProps = canSSRAuth(async (ctx) => {
    const apiClient = setupAPIClient(ctx);
    const response = await apiClient.get('/category');

    //console.log(response.data)

  return {
    props: {
      categoryList: response.data
    },
  };
});
