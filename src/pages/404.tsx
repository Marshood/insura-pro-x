import { useTranslations } from "next-intl";
import Link from "next/link";

export default function error() {
  const t = useTranslations(); // Replace "common" with your actual namespace

  return (
    <div className="flex justify-center flex-col">
      <h1>Not Found</h1>
      <p>Could not find requested resource</p>
      <Link href="/">Return Home</Link>
      <p>{t("workCompleteFrom")}</p>
    </div>
  );
}
