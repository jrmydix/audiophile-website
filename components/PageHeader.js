import { useRouter } from "next/router";

const PageHeader = () => {
  const router = useRouter();

  return (
    <div className="page-header">
      <h1>{router.pathname.replace("/", "")}</h1>
    </div>
  );
};

export default PageHeader;
