import Link from "next/link";

const NavItem = ({text, href}) => {
  return (
    <Link href = {href}>
      <a>{text}</a>
    </Link>
  )
};

export default NavItem;