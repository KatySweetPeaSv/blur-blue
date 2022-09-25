import React from "react";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";

// Post the new figure to the API using axios.
// The form must have the following fields: name, slug, release_date, type, dimensions,
// scale, material, price, image, brand, franchise.

const NewProductForm = () => {
  // use axios to post the new figure to the API

  const [values, setValues] = React.useState({
    name: "",
    slug: "",
    release_date: "",
    type: "",
    dimensions: "",
    scale: "",
    material: "",
    price: "",
    image: "",
    brand: "",
    franchise: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("values", values);
    axios
      .post("https://desolate-bayou-57725.herokuapp.com/api/products", values)
      .then((response) => {
        console.log("AXIOS POST RESPONSE", response);
        toast.success(
          `"${response.data.name}" has been added to the database.`
        );
      })
      .catch((error) => {
        console.log("AXIOS POST ERROR", error);
        toast.error(error.response.data);
      });
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setValues({ ...values, [name]: value });
  };

  return (
    <section
      className="container mx-auto px-4
    flex flex-row justify-center items-center mt-[120px] font-lato"
    >
      <ToastContainer />
      <div className="flex flex-row justify-center items-center w-full">
        <form
          onSubmit={handleSubmit}
          className="w-3/5 cardShadow p-[30px] rounded bg-gray-200"
        >
          <div className="flex flex-row justify-between items-center mb-3">
            <label htmlFor="name" className="mr-[15px]">
              Nombre:
            </label>
            <input
              type="text"
              name="name"
              id="name"
              value={values.name}
              onChange={handleInputChange}
              className="w-3/4 border-slate-700 border-[1px] rounded py-1 "
            />
          </div>
          <div className="flex flex-row justify-between items-center mb-3">
            <label htmlFor="slug" className="mr-[15px]">
              Slug
            </label>
            <input
              type="text"
              name="slug"
              id="slug"
              value={values.slug}
              className="w-3/4 border-slate-700 border-[1px] rounded py-1 "
              onChange={handleInputChange}
            />
          </div>
          <div className="flex flex-row justify-between items-center mb-3">
            <label htmlFor="image">Imagen</label>
            <input
              type="text"
              name="image"
              id="image"
              value={values.image}
              onChange={handleInputChange}
              className="w-3/4 border-slate-700 border-[1px] rounded py-1 "
            />
          </div>
          <div className="flex flex-row justify-between items-center mb-3">
            <label htmlFor="franchise">Franquicia</label>
            <input
              type="text"
              name="franchise"
              id="franchise"
              value={values.franchise}
              onChange={handleInputChange}
              className="w-3/4 border-slate-700 border-[1px] rounded py-1 "
            />
          </div>
          <div className="flex flex-row justify-between items-center mb-3">
            <label htmlFor="brand">Marca</label>
            <input
              type="text"
              name="brand"
              id="brand"
              value={values.brand}
              onChange={handleInputChange}
              className="w-3/4 border-slate-700 border-[1px] rounded py-1 "
            />
          </div>
          <div className="flex flex-row justify-between items-center mb-3">
            <label htmlFor="release_date">Fecha de lanzamiento</label>
            <input
              type="date"
              name="release_date"
              id="release_date"
              onChange={handleInputChange}
              className="border-GrayishBlack border-[1px] py-2 "
            />
          </div>
          <div className="flex flex-row justify-between items-center mb-3">
            <label htmlFor="type">Tipo</label>
            <input
              type="text"
              name="type"
              id="type"
              value={values.type}
              onChange={handleInputChange}
              className="w-3/4 border-slate-700 border-[1px] rounded py-1 "
            />
          </div>
          <div className="flex flex-row justify-between items-center mb-3">
            <label htmlFor="dimensions">Dimensiones</label>
            <input
              type="text"
              name="dimensions"
              id="dimensions"
              value={values.dimensions}
              onChange={handleInputChange}
              className="w-3/4 border-slate-700 border-[1px] rounded py-1 "
            />
          </div>
          <div className="flex flex-row justify-between items-center mb-3">
            <label htmlFor="scale">Escala</label>
            <input
              type="text"
              name="scale"
              id="scale"
              value={values.scale}
              onChange={handleInputChange}
              className="w-3/4 border-slate-700 border-[1px] rounded py-1 "
            />
          </div>
          <div className="flex flex-row justify-between items-center mb-3">
            <label htmlFor="material">Material</label>
            <input
              type="text"
              name="material"
              id="material"
              value={values.material}
              onChange={handleInputChange}
              className="w-3/4 border-slate-700 border-[1px] rounded py-1 "
            />
          </div>
          <div className="flex flex-row justify-between items-center mb-3">
            <label htmlFor="price">Precio</label>
            <input
              type="text"
              name="price"
              id="price"
              value={values.price}
              onChange={handleInputChange}
              className="w-3/4 border-slate-700 border-[1px] rounded py-1 "
            />
          </div>

          <button type="submit">Agregar</button>
        </form>
      </div>
    </section>
  );
};

export default NewProductForm;
