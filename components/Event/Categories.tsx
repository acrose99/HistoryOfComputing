import CategoryIcons from "./CategoryIcons";

interface CategoriesProps {
  filters: string[];
}
function Categories({ filters }: CategoriesProps) {
  let categories = [];
  for (let i = 0; i < filters.length; i++) {
    /* TODO: Redo when i add events */
    if (
      filters[i].includes("Computing") === false &&
      filters[i] !== "Ancient" &&
      filters[i] !== "Internet" &&
      filters[i] !== "Medieval" &&
      filters[i] !== "Enlightenment" &&
      filters[i] !== "Industrial" &&
      filters[i] !== "Information Age" &&
      filters[i] !== "Women" &&
      filters[i] !== "LGBTQ" &&
      filters[i] !== "POC"
    ) {
      categories.push(filters[i]);
    }
  }
  if (categories.length === 0) {
    return (
      <div
        // style={{ background: this.props.theme.background }}
        className=""
      >
        <p className="mx-4 jusitfy-center"> No categories specified</p>
      </div>
    );
  }
  return (
    <div
      // style={{ background: this.props.theme.background }}
      className="flex flex-row items-center space-x-2"
    >
      <p>Categories:</p>
      <CategoryIcons icons={categories} />
    </div>
  );
}

export default Categories;
