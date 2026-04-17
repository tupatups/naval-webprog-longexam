import { useParams } from 'react-router-dom';
import Button from '../../components/Button.jsx';
import products from '../../assets/product-content.js'
import NotFoundPage from '../NotFoundPage.jsx';

function ProductPage() {
  const { name } = useParams();
  const product = products.find(product => product.name === name);

  if (!product) {
    return (
      <NotFoundPage />
    );
  }

  return (
    <div className="flex w-full flex-col gap-6">
      
      <section className="border-y-2 border-[#d7c889] bg-[#f7f4de] px-4 py-6 sm:px-6 sm:py-8 lg:px-8">
        <div className="max-w-3xl">
          <div className="mb-4 font-text">
            <Button to="/products">Back to Products</Button>
          </div>
          <p className="mb-3 text-[11px] font-semibold uppercase tracking-[0.28em] text-[#2f5f48] font-text">
            {product.category}
          </p>
          <h1 className="text-3xl font-bold leading-tight text-[#173a2b] sm:text-4xl font-head">
            {product.title}
          </h1>
          <div className="mt-3 flex flex-wrap items-center gap-3 text-sm text-[#2f5f48] font-text  ">
            <span className="font-bold text-[#1f6b4a]">{product.price}</span>
            <span>{product.stock}</span>
          </div>
        </div>
      </section>

      <section className="border-y-2 border-[#d7c889] bg-[#f7f4de] px-4 py-6 sm:px-6 sm:py-8 lg:px-8">
        <div className="mx-auto max-w-3xl font-text">
          <div className="mb-8 flex aspect-4/3 items-center justify-center rounded-[1.25rem] bg-[#e8dfb6]">
            <img
              src={product.image}
              alt={product.name}
              className='h-full w-full object-cover rounded-2xl'
            />
          </div>

          <div className="prose prose-sm max-w-none space-y-4 text-[#2f5f48]">
            {product.content.map((paragraph, index) => (
              <p key={index} className="text-base leading-7 text-[#2f5f48] whitespace-pre-wrap">
                {paragraph}
              </p>
            ))}
          </div>

          <div className="mt-8 border-t-2 border-[#d7c889] pt-6">
            <Button variant="primary" className="mr-3">Add to Cart</Button>
            <Button to="/products">Back to Products</Button>
          </div>
        </div>
      </section>
    </div>
  );
}

export default ProductPage;
