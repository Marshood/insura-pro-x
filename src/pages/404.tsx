import Image from "next/image";
import { Inter } from "next/font/google";
import Link from "next/link";
import { GetStaticPropsContext } from "next/types";
import { useTranslations } from "next-intl";

const inter = Inter({ subsets: ["latin"] });

export default function error() {
  const t = useTranslations();
  return (
    <div className="flex justify-center flex-col">
      <h1>Not Found</h1>
      <p>Could not find requested resource</p>
      <Link href="/">Return Home</Link>
      <p>{t("workCompleteFrom")}</p>
    </div>
  );
}
export async function getStaticProps({ locale }: GetStaticPropsContext) {
  return {
    props: {
      messages: (await import(`../../locales/${locale}.json`)).default,
    },
  };
}
