import Link from "next/link";

const Categories = () => {
  return (
    <>
      <div className="categories">
        <div className="category">
          <p>Headphones</p>

          <Link href="/headphones">
            <a>
              Shop
              <svg width="8" height="12" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M1.322 1l5 5-5 5"
                  stroke="#D87D4A"
                  strokeWidth="2"
                  fill="none"
                  fillRule="evenodd"
                />
              </svg>
            </a>
          </Link>
        </div>

        <div className="category">
          <p>Speakers</p>

          <Link href="/speakers">
            <a>
              Shop
              <svg width="8" height="12" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M1.322 1l5 5-5 5"
                  stroke="#D87D4A"
                  strokeWidth="2"
                  fill="none"
                  fillRule="evenodd"
                />
              </svg>
            </a>
          </Link>
        </div>

        <div className="category">
          <p>Earphones</p>

          <Link href="/earphones">
            <a>
              Shop
              <svg width="8" height="12" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M1.322 1l5 5-5 5"
                  stroke="#D87D4A"
                  strokeWidth="2"
                  fill="none"
                  fillRule="evenodd"
                />
              </svg>
            </a>
          </Link>
        </div>
      </div>
    </>
  );
};

export default Categories;
