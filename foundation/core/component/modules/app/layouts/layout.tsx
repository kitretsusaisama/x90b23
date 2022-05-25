import React from "react";
import Header from "header/primary";
import Footer from "footer/main";
import Extra from "otherextra/extra"

type Props = {
  children: React.ReactNode;
};

const Layout: React.FC<Props> = ({ children }: Props) => {
return (
<>
<Header />
{children}
<Footer />
<Extra />
</>
);
};

export default Layout;