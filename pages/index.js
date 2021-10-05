import Link from "next/link";

const homePage = () => {
  return (
    <div>
      <h3>This is home Page</h3>
      <ul>
        <li>
          <Link href="/news">Go to new page</Link>
        </li>
      </ul>
    </div>
  );
};

export default homePage;
