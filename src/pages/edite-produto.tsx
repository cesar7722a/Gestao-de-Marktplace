import { Container } from "../components/container";
import { HeaderEdit } from "../components/HeaderEdit";
import { FormEdit } from "../components/FarmEdit";
import { FormEvent, useContext, useState } from "react";
import { Mycontext } from "../context/context";
import { useSearchParams } from "react-router-dom";
import { ProdutosProps } from "../type/types";

export function EditeProdutos() {
  const [searchParams] = useSearchParams();
  const idUrl = searchParams.get("id");
  const context = useContext(Mycontext);

  if (!context) {
    throw new Error(
      "Lista de PRODUTOS deve ser usada dentro de um MyContextProvider"
    );
  }

  const { editProduto, produts } = context;
  const produtoTOedit = produts.find((a) => a.id === Number(idUrl));
  const categoriaOld = produtoTOedit?.categoria;
  const [categoriaNew, setCategoriaNew] = useState(categoriaOld);

  const [formData, setFormData] = useState<ProdutosProps>({
    name: produtoTOedit?.name,
    descri: produtoTOedit?.descri,
    price: produtoTOedit?.price,
    status: produtoTOedit?.status,
  });

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleEdit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const produto = {
      name: formData.name,
      descri: formData.descri,
      price: formData.price,
      categoria: categoriaNew,
    };
    editProduto(Number(idUrl), produto);
  };

  return (
    <Container>
      {
        <>
          <HeaderEdit />
          <div className="flex gap-6">
            <figure className="w-[415px] h-[340px] rounded-[20px]">
              <img
                src={produtoTOedit?.image}
                alt={produtoTOedit?.name}
                className="rounded-[20px]"
              />
            </figure>
            <FormEdit
              handleEdit={handleEdit}
              handleChange={handleChange}
              formData={formData}
              categoria={categoriaNew}
              setCategoria={setCategoriaNew}
            />
          </div>
        </>
      }
    </Container>
  );
}
