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

  const { produts } = context;
  const produtoTOedit = produts.find((a) => a.id === Number(idUrl));

  const [formData, setFormData] = useState<ProdutosProps>({
    name: produtoTOedit?.name,
    descri: produtoTOedit?.descri,
    price: produtoTOedit?.price,
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
    console.log(formData);
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
              descri={produtoTOedit?.descri}
              price={produtoTOedit?.price}
              name={produtoTOedit?.name}
            />
          </div>
        </>
      }
    </Container>
  );
}
