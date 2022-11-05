import QuoteImg from "../assets/images/quote.png";
import AvatarImg from "../assets/images/avatar.png";

function SwiperSlideCard() {
  return (
    <div className="w-80 p-4 pt-6 h-96 shadow-lg border-2 bg-white border-gray-50 flex flex-col rounded-lg">
      <div className="flex justify-end mb-6">
        <img src={QuoteImg} alt="double quote icon" />
      </div>
      <p className="font-semibold flex-grow">
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sit ducimus
        quod facilis odio, quis odit laboriosam voluptas vel debitis ipsa,
        tenetur fugiat atque sequi! Officia delectus fugit odio qui magni
        voluptas suscipit nulla incidunt blanditiis.
      </p>
      <div className="border-t flex pt-2">
        <div className="w-fit h-fit rounded-full overflow-hidden mr-2">
          <img src={AvatarImg} alt="avatar" />
        </div>
        <div>
          <h4 className="text-lg font-semibold">Jhon Doe</h4>
          <p className="text-md text-gray-500">CEO - Company x</p>
        </div>
      </div>
    </div>
  );
}
export default SwiperSlideCard;
