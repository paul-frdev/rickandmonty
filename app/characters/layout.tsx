import Head from "./head";

interface CharactersLayoutProps {
  children: React.ReactNode;
}
const CharactersLayout = ({ children }: CharactersLayoutProps) => {
  return <section>{children}</section>;
};

export default CharactersLayout;
