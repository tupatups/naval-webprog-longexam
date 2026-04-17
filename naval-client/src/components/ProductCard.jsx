import Button from "./Button";

const ProductCard = ({ product, index }) => {
  return (
    <article className="rounded-3xl border-2 border-[#d7c889] bg-[#f7f4de] p-4">
      <div className="flex aspect-4/3 items-center justify-center rounded-[1.25rem] bg-[#e8dfb6]">
        <img
          src={product.image}
          alt={product.name}
          className="h-full w-full object-cover rounded-2xl"
        />
      </div>
      <p className="mt-4 text-[11px] font-semibold uppercase tracking-[0.24em] text-[#2f5f48] font-text">
        {product.category} {String(index + 1).padStart(2, "0")}
      </p>
      <h3 className="mt-2 text-lg font-semibold text-[#173a2b] font-head">
        {product.title}
      </h3>
      <p className="mt-2 text-base font-bold text-[#1f6b4a] font-text">{product.price}</p>
      <p className="mt-3 text-sm leading-6 text-[#2f5f48] font-text">
        {product.content[0].substring(0, 120)}...
      </p>
      <Button to={`/products/${product.name}`} className="mt-4 font-text">
        View Product
      </Button>
    </article>
  );
};

export default ProductCard;
