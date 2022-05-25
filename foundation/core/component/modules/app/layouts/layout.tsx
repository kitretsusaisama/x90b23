import React from "react";
import Header from "header/primary";
import Footer from "footer/foc";

type Props = {
  children: React.ReactNode;
};

const Layout: React.FC<Props> = ({ children }: Props) => {
return (
<>
<Header />
{children}
<Footer />
</>
);
};

export default Layout;