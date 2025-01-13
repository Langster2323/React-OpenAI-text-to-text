import NavBar from "../organisms/NavBar/NavBar";

export const Layout = ({ children }) => {
  return (
    <>
      <NavBar />
      {children}
    </>
  );
}