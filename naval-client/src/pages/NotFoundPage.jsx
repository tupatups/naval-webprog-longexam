import Button from "../components/Button";

const NotFoundPage = () => {
  return (
    <div className="min-h-screen w-full px-4 pt-24 flex items-start justify-center bg-[#f4f8f1]">
      <div className="w-full max-w-3xl overflow-hidden rounded-3xl border-2 border-[#c8a327] bg-[#f7f4de] shadow-lg">
        <div className="h-2 w-full bg-gradient-to-r from-[#1f6b4a] via-[#c8a327] to-[#1f6b4a]" />
        <div className="grid gap-8 p-8 md:grid-cols-[0.7fr_1fr] md:items-center">
          <div className="mx-auto flex h-44 w-44 items-center justify-center rounded-2xl bg-[#e8dfb6]">
            <span className="text-6xl font-bold text-[#1f6b4a] font-head">404</span>
          </div>

          <div className="text-center md:text-left">
            <p className="mb-3 text-[11px] font-semibold uppercase tracking-[0.28em] text-[#2f5f48] font-text">
              Route Missing
            </p>
            <h1 className="text-3xl font-bold leading-tight text-[#173a2b] sm:text-4xl font-head">
              This page is not available
            </h1>
            <p className="mt-4 text-base leading-7 text-[#2f5f48] font-text">
              The link might be outdated or the page has been moved. Use the buttons below to continue browsing B-Exchange.
            </p>
            <div className="mt-6 flex flex-wrap justify-center gap-3 font-text md:justify-start">
              <Button to="/">Back Home</Button>
              <Button to="/products" variant="primary">View Products</Button>
              <Button to="/about">About Store</Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NotFoundPage;
