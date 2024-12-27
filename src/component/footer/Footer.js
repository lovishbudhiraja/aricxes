import FooterHead from "./FooterHead";
import FooterBody from "./FooterBody";

function Footer() {
  return (
    <footer className="bg-black py-10">
      <div className="wrapper">
        <div className="w-full flex flex-col gap-10">
          <FooterHead />
          <FooterBody />
          <div className="flex items-center justify-center text-white">
            © {new Date().getFullYear()} Aricxes, All rights reserved
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
