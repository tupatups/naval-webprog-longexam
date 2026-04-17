import Button from "../../components/Button";
import banner from "../../assets/img/nu_bulldogex_banner.jpg";
import toteBagImg from "../../assets/img/totebag.png";
import stickerImg from "../../assets/img/sticker.png";
import sweatShirtImg from "../../assets/img/sweatshirt.png";

const HomePage = () => {
  return (
    <div className="flex w-full flex-col gap-6">
      <section className="relative min-h-112 overflow-hidden border-y-2 border-[#d7c889] bg-[#f7f4de] px-4 py-10 sm:px-6 lg:px-8">
        <img
          src={banner}
          alt=""
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-[#173a2b]/45" />

        <div className="relative z-10 flex min-h-88 items-start justify-end text-right sm:min-h-96">
          <div className="max-w-xl">
            <p className="mb-3 text-[11px] font-semibold uppercase tracking-[0.28em] text-zinc-200 font-text">
              Campus Marketplace
            </p>
            <h1 className="text-3xl font-bold leading-tight text-zinc-50 sm:text-4xl font-head">
              Welcome to B-Exchange
            </h1>
            <p className="mt-4 text-sm leading-7 text-zinc-100 sm:text-base font-text">
              Find your uniforms, school gear, and student essentials all in one
              easy place.
            </p>
            <div className="mt-6 flex flex-wrap justify-end gap-3 font-text">
              <Button to="/products">Shop Now</Button>
              <Button to="/about" variant="primary">
                About Store
              </Button>
            </div>
          </div>
        </div>
      </section>

      <section className="border-y-2 border-[#d7c889] bg-[#f7f4de] px-4 py-6 sm:px-6 sm:py-8 lg:px-8">
        <div className="mb-6">
          <p className="text-[11px] font-semibold uppercase tracking-[0.28em] text-[#2f5f48] font-text">
            Store Overview
          </p>
          <h2 className="mt-2 text-2xl font-semibold text-[#173a2b] font-head">
            Quick shopping blocks
          </h2>
        </div>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          <div className="rounded-3xl border-2 border-[#d7c889] bg-[#f4f8f1] p-5">
            <p className="text-2xl font-bold text-[#173a2b]">08</p>
            <p className="mt-2 text-[11px] font-semibold uppercase tracking-[0.24em] text-[#2f5f48] font-text">
              Products
            </p>
          </div>
          <div className="rounded-3xl border-2 border-[#d7c889] bg-[#f4f8f1] p-5">
            <p className="text-2xl font-bold text-[#173a2b]">06</p>
            <p className="mt-2 text-[11px] font-semibold uppercase tracking-[0.24em] text-[#2f5f48] font-text">
              Categories
            </p>
          </div>
          <div className="rounded-3xl border-2 border-[#d7c889] bg-[#f4f8f1] p-5">
            <p className="text-2xl font-bold text-[#173a2b]">24</p>
            <p className="mt-2 text-[11px] font-semibold uppercase tracking-[0.24em] text-[#2f5f48] font-text">
              Orders
            </p>
          </div>
          <div className="rounded-3xl border-2 border-[#d7c889] bg-[#f4f8f1] p-5">
            <p className="text-2xl font-bold text-[#173a2b]">03</p>
            <p className="mt-2 text-[11px] font-semibold uppercase tracking-[0.24em] text-[#2f5f48] font-text">
              Pickup Slots
            </p>
          </div>
        </div>
      </section>

      <section className="border-y-2 border-[#d7c889] bg-[#f7f4de] px-4 py-6 sm:px-6 sm:py-8 lg:px-8">
        <div className="mb-6">
          <p className="text-[11px] font-semibold uppercase tracking-[0.28em] text-[#2f5f48] font-text">
            Shop Sections
          </p>
          <h2 className="mt-2 text-2xl font-semibold text-[#173a2b] font-head">
            Simple store cards
          </h2>
        </div>

        <div className="grid gap-4 md:grid-cols-3">
          <article className="rounded-3xl border-2 border-[#d7c889] bg-[#f4f8f1] p-4">
            <div className="flex aspect-4/3 items-center justify-center rounded-[1.25rem] bg-[#e8dfb6]">
              <img
                src={toteBagImg}
                alt="Campus Tote Bag"
                className="h-full w-full object-cover rounded-2xl"
              />
            </div>
            <h3 className="mt-4 text-lg font-semibold text-[#173a2b] font-text">
              Daily Carry
            </h3>
            <p className="mt-3 text-sm leading-6 text-[#2f5f48] font-text">
              Tote bags and practical carry items for classes and commute.
            </p>
            <Button to="/products" className="mt-4 font-text" variant="primary">
              View Products
            </Button>
          </article>

          <article className="rounded-3xl border-2 border-[#d7c889] bg-[#f4f8f1] p-4">
            <div className="flex aspect-4/3 items-center justify-center rounded-[1.25rem] bg-[#e8dfb6]">
              <img
                src={stickerImg}
                alt="Campus Sticker Pack"
                className="h-full w-full object-cover rounded-2xl"
              />
            </div>
            <h3 className="mt-4 text-lg font-semibold text-[#173a2b] font-text">
              Campus Accessories
            </h3>
            <p className="mt-3 text-sm leading-6 text-[#2f5f48] font-text">
              Sticker packs and small accessories to personalize your essentials.
            </p>
            <Button to="/products" className="mt-4 font-text" variant="primary">
              Shop Accessories
            </Button>
          </article>

          <article className="rounded-3xl border-2 border-[#d7c889] bg-[#f4f8f1] p-4">
            <div className="flex aspect-4/3 items-center justify-center rounded-[1.25rem] bg-[#e8dfb6]">
              <img
                src={sweatShirtImg}
                alt="Campus Sweatshirt"
                className="h-full w-full object-cover rounded-2xl"
              />
            </div>
            <h3 className="mt-4 text-lg font-semibold text-[#173a2b] font-text">
              Outerwear Picks
            </h3>
            <p className="mt-3 text-sm leading-6 text-[#2f5f48] font-text">
              Cozy and versatile tops that work for school days and weekends.
            </p>
            <Button to="/products" className="mt-4 font-text" variant="primary">
              View Apparel
            </Button>
          </article>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
