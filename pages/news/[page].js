import { useRouter } from "next/router";

const Detail = () => {
  const route = useRouter();
  const routeLink = route.query.page;

  return (
    <h3>This is detail page route :: {routeLink ? routeLink : "No Data"}</h3> // {routeLink ? routeLink : "No Data"}
  );
};

export default Detail;
