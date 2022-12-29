import Link from "next/link";

interface Props {
  category: Category;
  isActive: boolean;
}

const NavItems = ({category, isActive}:Props) => {
  return (
    <Link href={`/search?q=${category.toLowerCase()}`}
      className={`navLink ${isActive && 'text-lg font-bold'}`}
    >
      {category}
    </Link>
  )
}

export default NavItems