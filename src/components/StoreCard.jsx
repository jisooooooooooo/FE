import { useState } from "react";
import { ReactComponent as HeartIcon } from "./../assets/images/heartIcon.svg";

/** 지역별 상점 및 메뉴별 상점의 카드 */
const StoreCard = ({ item }) => {
  const [isLiked, setIsLiked] = useState(false); // 현재 상점의 관심 여부를 나타낸다.

  /** 'handleLikeClick' 함수는 하트 아이콘을 클릭했을 때 호출되며
   * 'isLiked' 상태를 반전시켜 관심 상점 상태를 나타낸다.
   */
  const handleLikeClick = () => {
    setIsLiked((prev) => !prev);
  };

  return (
    <div className="flex flex-col h-full p-4 transition-all rounded-2xl shadow-custom-box-shadow hover:shadow-custom-box-shadow-pink">
      {/* 카드 이미지 */}
      <figure
        className="pb-[75%] h-0 bg-cover bg-no-repeat bg-center rounded-lg mb-4 bg-gray-200 relative"
        style={{ backgroundImage: `url()` }}
      >
        {/* 하트아이콘 */}
        <button className="absolute top-2 right-2" onClick={handleLikeClick}>
          <HeartIcon stroke="white" fill={isLiked ? "#FF0069" : "none"} />
        </button>
      </figure>
      <div className="flex flex-col grow">
        {/* 텍스트 */}
        <p className="mb-2 text-base font-semibold min-h-10 text-custom-gray-100 line-clamp-2 grow">
          {item.text}
        </p>
        {/* 메뉴 */}
        <p className="mb-6 text-xs font-semibold text-custom-pink line-clamp-1">
          {item.menu}
        </p>
        {/* 또또가 리뷰 참여 횟수 */}
        <p className="text-xs text-custom-gray-200 ">
          또또가 리뷰 참여 횟수 {item.reviewCount}
        </p>
      </div>
    </div>
  );
};

export default StoreCard;