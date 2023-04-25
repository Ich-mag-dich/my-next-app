import Link from "next/link";
import "./css/HeaderPage.css";
function HeaderPage() {
  return (
    <div className="HeaderDiv">
      <Link href="/" className="HeaderBtn">
        Home
      </Link>
    </div>
  );
}

export default HeaderPage;
