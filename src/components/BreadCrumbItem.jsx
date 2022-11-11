function BreadCrumbItem({ children }) {
  return (
    <li className="after:content-[' '] after:py-2 after:px-8 after:bg-no-repeat after:bg-center after:bg-breadcrumb after:w-6 last:after:content-none">{children}</li>
  )
}

export default BreadCrumbItem