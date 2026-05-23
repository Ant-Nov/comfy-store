import { Outlet, useNavigation } from "react-router-dom";
import { Header } from "../components/Header";
import { Loading, Navbar } from "../components";

export const Homelayout = () => {
  const navigation = useNavigation();
  const isPageLoading = navigation.state === 'loading';

  return (
    <>
      <Header />
      <Navbar />

      <div className="centered-content py-12">
        {isPageLoading ? <Loading/> : <Outlet />}
      </div>
    </>
  );
};
