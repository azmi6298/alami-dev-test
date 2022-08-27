import Head from "next/head";
import AboutComponent from "../components/About";
import ContactComponent from "../components/Contact";
import InputPhoneNumber from "../components/InputPhoneNumber";

export default function Home() {
  return (
    <>
      <Head>
        <title>Azmi's ALAMI Dev Test</title>
      </Head>
      <div className="py-12">
        <p className="text-4xl font-semibold text-center">This is homepage</p>
        <AboutComponent />
        <div className="flex gap-24">
          <InputPhoneNumber />
          <ContactComponent />
        </div>
      </div>
    </>
  );
}
