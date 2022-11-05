function TabTagCard({ tagImg, tagTitle }) {
  return (
    <div className="w-48 h-40 flex flex-col items-center justify-center cursor-pointer rounded-md shadow-lg bg-white">
      <img src={tagImg} alt={tagTitle} className="mb-2" />
      <h4 className="text-md font-semibold">{tagTitle}</h4>
    </div>
  );
}
export default TabTagCard;
