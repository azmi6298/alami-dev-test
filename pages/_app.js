import store from "../app/store";
import { Provider } from "react-redux";
import "../styles/globals.css";
import Header from "../components/Header";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Provider store={store}>
        <Header />
        <div className="px-8 xl:px-48">
          <Component {...pageProps} />
        </div>
      </Provider>
    </>
  );
}

export default MyApp;
