import Link from "next/link";

const newPage = () => {
  return (
    <div>
      <h2>New page</h2>
      <ul>
        <li>
          <Link href="/news/newProduct/detail-product-apple">Apple</Link>
        </li>
        <li>
          <Link href="/news/detail-product-orange">Orange</Link>
        </li>
        <li>
          <Link href="/news/detail-product-banana">Banana</Link>
        </li>
      </ul>
    </div>
  );
};

export default newPage;
