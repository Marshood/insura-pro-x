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
      {t("subtotal")}
      <p>{t("workCompleteFrom")}</p> {t("subtotal")}
      <p>{t("workCompleteFrom")}</p> {t("subtotal")}
      <p>{t("workCompleteFrom")}</p> {t("subtotal")}
      <p>{t("workCompleteFrom")}</p> {t("subtotal")}
      <p>{t("workCompleteFrom")}</p> {t("subtotal")}
      <p>{t("workCompleteFrom")}</p> {t("subtotal")}
      <p>{t("workCompleteFrom")}</p> {t("subtotal")}
      <p>{t("workCompleteFrom")}</p> {t("subtotal")}
      <p>{t("workCompleteFrom")}</p> {t("subtotal")}
      <p>{t("workCompleteFrom")}</p> {t("subtotal")}
      <p>{t("workCompleteFrom")}</p> {t("subtotal")}
      <p>{t("workCompleteFrom")}</p> {t("subtotal")}
      <p>{t("workCompleteFrom")}</p> {t("subtotal")}
      <p>{t("workCompleteFrom")}</p> {t("subtotal")}
      <p>{t("workCompleteFrom")}</p> {t("subtotal")}
      <p>{t("workCompleteFrom")}</p> {t("subtotal")}
      <p>{t("workCompleteFrom")}</p> {t("subtotal")}
      <p>{t("workCompleteFrom")}</p> {t("subtotal")}
      <p>{t("workCompleteFrom")}</p> {t("subtotal")}
      <p>{t("workCompleteFrom")}</p> {t("subtotal")}
      <p>{t("workCompleteFrom")}</p> {t("subtotal")}
      <p>{t("workCompleteFrom")}</p> {t("subtotal")}
      <p>{t("workCompleteFrom")}</p> {t("subtotal")}
      <p>{t("workCompleteFrom")}</p> {t("subtotal")}
      <p>{t("workCompleteFrom")}</p> {t("subtotal")}
      <p>{t("workCompleteFrom")}</p> {t("subtotal")}
      <p>{t("workCompleteFrom")}</p> {t("subtotal")}
      <p>{t("workCompleteFrom")}</p> {t("subtotal")}
      <p>{t("workCompleteFrom")}</p> {t("subtotal")}
      <p>{t("workCompleteFrom")}</p> {t("subtotal")}
      <p>{t("workCompleteFrom")}</p> {t("subtotal")}
      <p>{t("workCompleteFrom")}</p> {t("subtotal")}
      <p>{t("workCompleteFrom")}</p> {t("subtotal")}
      <p>{t("workCompleteFrom")}</p> {t("subtotal")}
      <p>{t("workCompleteFrom")}</p> {t("subtotal")}
      <p>{t("workCompleteFrom")}</p> {t("subtotal")}
      <p>{t("workCompleteFrom")}</p> {t("subtotal")}
      <p>{t("workCompleteFrom")}</p> {t("subtotal")}
      <p>{t("workCompleteFrom")}</p> {t("subtotal")}
      <p>{t("workCompleteFrom")}</p> {t("subtotal")}
      <p>{t("workCompleteFrom")}</p> {t("subtotal")}
      <p>{t("workCompleteFrom")}</p> {t("subtotal")}
      <p>{t("workCompleteFrom")}</p> {t("subtotal")}
      <p>{t("workCompleteFrom")}</p> {t("subtotal")}
      <p>{t("workCompleteFrom")}</p> {t("subtotal")}
      <p>{t("workCompleteFrom")}</p> {t("subtotal")}
      <p>{t("workCompleteFrom")}</p> {t("subtotal")}
      <p>{t("workCompleteFrom")}</p> {t("subtotal")}
      <p>{t("workCompleteFrom")}</p> {t("subtotal")}
      <p>{t("workCompleteFrom")}</p> {t("subtotal")}
      <p>{t("workCompleteFrom")}</p> {t("subtotal")}
      <p>{t("workCompleteFrom")}</p> {t("subtotal")}
      <p>{t("workCompleteFrom")}</p> {t("subtotal")}
      <p>{t("workCompleteFrom")}</p> {t("subtotal")}
      <p>{t("workCompleteFrom")}</p>
    </div>
  ) : (
    <h1>Loading</h1>
  );
}

// export async function getStaticProps({ locale }: GetStaticPropsContext) {
//   return {
//     props: {
//       fallback: "blocking",
//       messages: (await import(`../../locales/${locale}.json`)).default,
//     },
//   };
// }

// aaaaaa
// import { JSX, useEffect, useState } from "react";
// import { useLocale, useTranslations, IntlProvider } from "next-intl";

// function Index({ messages }) {
//   const t = useTranslations(); // Use the loaded translations
//   const [isClient, setIsClient] = useState(false);
//   const locale = useLocale();

//   useEffect(() => {
//     setIsClient(true);
//   }, []);

//   return isClient ? (
//     <div>
//       {t("subtotal")}
//       <p>{t("workCompleteFrom")}</p>
//     </div>
//   ) : (
//     <h1>Loading</h1>
//   );
// }

// // Load translations dynamically
// export async function getServerSideProps({ locale }) {
//   const messages = await import(`../../locales/${locale}.json`);
//   return {
//     props: {
//       messages: messages.default,
//     },
//   };
// }

// // Wrap the component with IntlProvider
// export default function IndexWithIntlProvider(
//   props: JSX.IntrinsicAttributes & { messages: any; locale: any }
// ) {
//   return (
//     <IntlProvider messages={props.messages} locale={props.locale}>
//       <Index {...props} />
//     </IntlProvider>
//   );
// }
