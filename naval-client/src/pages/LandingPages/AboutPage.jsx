import Button from "../../components/Button";
import bannerImage from "../../assets/img/nu_bulldogex_banner.jpg";
import toteBagImg from "../../assets/img/totebag.png";
import keychainImg from "../../assets/img/keychain.png";
import classicTeeImg from "../../assets/img/nuclassic.png";
import capImg from "../../assets/img/cap.png";

const AboutPage = () => {
  return (
    <div className="flex w-full flex-col gap-6">
      <section className="border-y-2 border-[#d7c889] bg-[#f7f4de] px-4 py-6 sm:px-6 sm:py-8 lg:px-8">
        <div className="grid gap-8 lg:grid-cols-2 lg:items-center">
          <img
            src={bannerImage}
            alt="B-Exchange Store"
            className="h-80 w-175 border-2 border-[#d7c889] bg-[#f4f8f1] object-contain rounded-2xl"
          />

          <div>
            <p className="mb-3 text-[11px] font-semibold uppercase tracking-[0.28em] text-[#2f5f48] font-text">
              About Store
            </p>
            <h1 className="max-w-xl text-3xl font-bold leading-tight text-[#173a2b] sm:text-4xl font-head">
              Your campus essentials, delivered through a cleaner experience.
            </h1>
            <p className="mt-4 max-w-lg text-sm leading-7 text-[#2f5f48] sm:text-base font-text">
              B-Exchange embraces a high-utility, low-fidelity design to
              strip away the noise. We focus on intuitive product categories and
              rapid browsing, ensuring you spend less time navigating and more
              time geared up for university life.
            </p>
            <div className="mt-6 flex flex-wrap gap-3 font-text">
              <Button to="/" variant="primary">
                Back Home
              </Button>
              <Button to="/products">Open Products</Button>
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
            Stocks
          </h2>
        </div>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          <div className="rounded-3xl border-2 border-[#d7c889] bg-[#f4f8f1] p-5">
            <p className="text-2xl font-bold text-[#173a2b]">08</p>
            <p className="mt-2 text-[11px] font-semibold uppercase tracking-[0.24em] text-[#2f5f48] font-text">
              Items
            </p>
          </div>
          <div className="rounded-3xl border-2 border-[#d7c889] bg-[#f4f8f1] p-5">
            <p className="text-2xl font-bold text-[#173a2b]">06</p>
            <p className="mt-2 text-[11px] font-semibold uppercase tracking-[0.24em] text-[#2f5f48] font-text">
              Categories
            </p>
          </div>
          <div className="rounded-3xl border-2 border-[#d7c889] bg-[#f4f8f1] p-5">
            <p className="text-2xl font-bold text-[#173a2b]">03</p>
            <p className="mt-2 text-[11px] font-semibold uppercase tracking-[0.24em] text-[#2f5f48] font-text">
              Pickup Slots
            </p>
          </div>
          <div className="rounded-3xl border-2 border-[#d7c889] bg-[#f4f8f1] p-5">
            <p className="text-2xl font-bold text-[#173a2b]">24</p>
            <p className="mt-2 text-[11px] font-semibold uppercase tracking-[0.24em] text-[#2f5f48] font-text">
              Orders
            </p>
          </div>
        </div>
      </section>

      <section className="border-y-2 border-[#d7c889] bg-[#f7f4de] px-4 py-6 sm:px-6 sm:py-8 lg:px-8">
        <div className="grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
          <div>
            <p className="text-[11px] font-semibold uppercase tracking-[0.28em] text-[#2f5f48] font-text">
              How it Works
            </p>
            <h2 className="mt-2 text-2xl font-semibold text-[#173a2b] font-head">
              Shopping made easy for students.
            </h2>

            <div className="mt-6 space-y-4">
              <article className="rounded-3xl border-2 border-[#d7c889] bg-[#f4f8f1] p-5">
                <h3 className="text-lg font-semibold text-[#173a2b] font-text">
                  Easy to Find
                </h3>
                <p className="mt-3 text-sm leading-6 text-[#2f5f48] font-text">
                  Items are put into groups so you can find exactly what you
                  need for your classes quickly.
                </p>
              </article>

              <article className="rounded-3xl border-2 border-[#d7c889] bg-[#f4f8f1] p-5">
                <h3 className="text-lg font-semibold text-[#173a2b] font-text">
                  Fast Checkout
                </h3>
                <p className="mt-3 text-sm leading-6 text-[#2f5f48] font-text">
                  We show the price and stock clearly so you can finish your
                  order without any confusion.
                </p>
              </article>

              <article className="rounded-3xl border-2 border-[#d7c889] bg-[#f4f8f1] p-5">
                <h3 className="text-lg font-semibold text-[#173a2b] font-text">
                  Quick Pickups
                </h3>
                <p className="mt-3 text-sm leading-6 text-[#2f5f48] font-text">
                  Get the latest updates on your order so you can stop by the
                  shop and get back to your day.
                </p>
              </article>
            </div>
          </div>

          <div className="rounded-3xl border-2 border-[#d7c889] bg-[#f4f8f1] p-5">
            <p className="text-[11px] font-semibold uppercase tracking-[0.28em] text-[#2f5f48] font-text">
              Category Grid
            </p>
            <div className="mt-5 grid gap-4 sm:grid-cols-2">
              <div className="flex aspect-square items-center justify-center rounded-[1.25rem] bg-[#e8dfb6]">
                <img
                  src={toteBagImg}
                  alt="Campus Tote Bag"
                  className="h-full w-full object-cover rounded-2xl"
                />
              </div>
              <div className="flex aspect-square items-center justify-center rounded-[1.25rem] bg-[#e8dfb6]">
                <img
                  src={keychainImg}
                  alt="Campus Keychain"
                  className="h-full w-full object-cover rounded-2xl"
                />
              </div>
              <div className="flex aspect-square items-center justify-center rounded-[1.25rem] bg-[#e8dfb6]">
                <img
                  src={classicTeeImg}
                  alt="Classic Campus Tee"
                  className="h-full w-full object-cover rounded-2xl"
                />
              </div>
              <div className="flex aspect-square items-center justify-center rounded-[1.25rem] bg-[#e8dfb6]">
                <img
                  src={capImg}
                  alt="NU Cap"
                  className="h-full w-full object-cover rounded-2xl"
                />
              </div>
            </div>
            <Button to="/products" className="mt-5 font-text">
              View Products
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;
