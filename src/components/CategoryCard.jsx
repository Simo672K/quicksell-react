function CategoryCard({ catImg, catTitle }) {
  return (
    <div className="w-40 h-32 flex flex-col items-center justify-center border-2 hover:border-purple-900 cursor-pointer border-transparent rounded-md shadow-sm bg-white">
      <img src={catImg} alt={catTitle} className="mb-2" />
      <h4 className="text-purple-900 text-md font-semibold">{catTitle}</h4>
    </div>
  );
}
export default CategoryCard;
