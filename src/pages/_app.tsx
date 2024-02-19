import Header from "@/components/header/header";
import HeaderMobile from "@/components/header/header-mobile";
import MarginWidthWrapper from "@/components/header/margin-width-wrapper";
import PageWrapper from "@/components/header/page-wrapper";
import SideNav from "@/components/header/side-nav";
import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { NextIntlClientProvider } from "next-intl";
import { useRouter } from "next/router";
import Layout from "@/components/pageLayout/layout";
import he from "../../locales/he.json";
import en from "../../locales/en.json";
import ar from "../../locales/ar.json";
import { useCycle } from "framer-motion";
import { useRef } from "react";

export default function App({ Component, pageProps }: AppProps) {
  const router = useRouter();
  const locale = router?.locale || "he";
  const messages = locale === "he" ? he : locale === "ar" ? ar : en;
  const [isOpen, toggleOpen] = useCycle(false, true);
  const containerRef = useRef(null);

  return (
    <NextIntlClientProvider
      locale={router.locale}
      messages={messages}
      timeZone="Europe/Vienna"
    >
      <Layout>
        <div className="flex flex-row top-0 z-100 bg-white	">
          <SideNav />
          <MarginWidthWrapper>
            <Header
              toggleOpen={toggleOpen}
              isOpen={isOpen}
              containerRef={containerRef}
            />
            <HeaderMobile
              toggleOpen={toggleOpen}
              isOpen={isOpen}
              containerRef={containerRef}
            />
            <PageWrapper>
              <Component {...pageProps} />
            </PageWrapper>
          </MarginWidthWrapper>
        </div>
      </Layout>
    </NextIntlClientProvider>
  );
}
