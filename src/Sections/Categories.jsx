import ProductsCategories from "../Components/ProductsCategories";

const Categories = () => {
  return (
    <section className="px-8 md:px-14 lg:px-16 py-6 md:py-10">
      <h1 className="text-center text-xl md:text-2xl lg:text-3xl font-bold pb-4 md:pb-8">Product Categories</h1>
      <ProductsCategories />
    </section>
  );
};

export default Categories;
