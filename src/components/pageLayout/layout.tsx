// components/Layout.js
import { useEffect } from "react";
import { useRouter } from "next/router";

const Layout = ({ children }: any) => {
  const router = useRouter();
  const dir = router.locale === "he" || router.locale === "ar" ? "rtl" : "ltr";

  return <div dir={dir}>{children}</div>;
};

export default Layout;
