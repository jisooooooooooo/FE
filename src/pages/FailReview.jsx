import React, { useEffect, useState } from "react";

const FailReview = () => {
  const [reviewData, setReviewData] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchReviewData = async () => {
      try {
        const response = await fetch("/members/profile");
        const result = await response.json();

        if (result.isSuccess) {
          setReviewData(result.result.reviewDtos.filter((review) => review.status === "FAIL"));
        } else {
          setError(result.message);
        }
      } catch (error) {
        setError("API 호출 오류");
      }
    };

    fetchReviewData();
  }, []);

  if (error) {
    return <div>{error}</div>;
  }

  if (!reviewData || reviewData.length === 0) {
    return <div>아직 등록된 탈락 리뷰가 없어요.</div>;
  }

  return (
    <div>
      {reviewData.map((review) => (
        <div key={review.reviewId} className="flex justify-between border-b pb-[1rem] border-[#D9D9D9]">
          <div>
            <div className="mb-[1.44rem] font=['Inter'] text=[1.125rem]">
              {review.storeDto.name}
            </div>
            <div className="text=[1rem] font=['Inter']">{review.reason}</div>
          </div>
          <div>
            <div className="text=[1rem] font=['Inter'] mb-[1.19rem]">신청일자: {review.apply_date}</div>
            <button className="w-[9.8125rem] font=['Inter'] h-[2.4375rem] border rounded-[0.44rem] border-[#FF0069] text-[#FF0069]">
              다시 신청하기
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default FailReview;
