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

export default function App({ Component, pageProps }: AppProps) {
  const router = useRouter();
  return (
    <NextIntlClientProvider
      locale={router.locale}
      messages={pageProps.messages}
      timeZone="Europe/Vienna"
    >
      <Layout>
        <div className="flex flex-row top-0 z-100 bg-white	">
          <SideNav />
          <MarginWidthWrapper>
            <Header />
            <HeaderMobile />
            <PageWrapper>
              <Component {...pageProps} />
            </PageWrapper>
          </MarginWidthWrapper>
        </div>
      </Layout>
    </NextIntlClientProvider>
  );
}
