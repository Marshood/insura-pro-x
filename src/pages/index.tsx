import { useEffect, useState } from "react";
import { GetStaticPropsContext } from "next";
import { useLocale, useTranslations } from "next-intl";

export default function Index() {
  const t = useTranslations(); // Replace "common" with your actual namespace
  const [isClient, setIsClient] = useState(false);
  const locale = useLocale();

  useEffect(() => {
    setIsClient(true);
  }, []);
  return isClient ? (
    <div>
      {t("subtotal")}
      <p>{t("workCompleteFrom")}</p>
    </div>
  ) : (
    <h1>Loading</h1>
  );
}

export async function getStaticProps({ locale }: GetStaticPropsContext) {
  return {
    props: {
      fallback: "blocking",
      messages: (await import(`../../locales/${locale}.json`)).default,
    },
  };
}
