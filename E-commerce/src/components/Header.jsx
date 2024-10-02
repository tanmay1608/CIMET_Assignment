
const Header = () => {
  return (
 <header className="flex justify-between p-4 bg-dark-gray items-center text-white inter-medium "> 
  <h1 className="squada-one-regular">ShopAtEase</h1>
  <ul className="flex bg-normal-gray  rounded-full ">
    <li className="py-1 px-2 text-dark-gray bg-white rounded-full  ">Products</li>
    <li className="py-1 px-2 text-light-gray mx-2">Blogs</li>
    <li className="py-1 px-2 text-light-gray mx-2">Something</li>
  </ul>

  <h2>🛒</h2>
 </header>
  )
}

export default Header
