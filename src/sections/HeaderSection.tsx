import { pages } from "../constants";
import "~/index.css";

export const HeaderSection = () => {
  return (
    <header className="mb-6 bg-transparent outline- ">
      <div className="static py-4 top-0 z-50 left-0 w-full bg-transperent">
        <div className="flex items-center justify-between px-5 lg:px-7.5 xl:px-10 max-lg:py-2">
          <div className="flex-shrink-0">
          </div>

          <div className="absolute hidden md:block   left-1/2 transform -translate-x-1/2">
            <nav className="flex gap-8">
              {pages.map((page) => (
                <a
                  key={page.id}
                  href={page.url}
                  className="text-brightGreen hover:text-lime-500 transition"
                >
                  {page.title}
                </a>
              ))}
            </nav>
          </div>
        </div>
      </div>
    </header>
  );
};
