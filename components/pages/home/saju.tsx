import SajuTable from "./saju_table";
import Image from "next/image";

export default function Saju({ name }: { name: string }) {
  return (
    <div className="w-[93.6%] max-w-[420px] aspect-[351/621] relative">
      {/* 고정 비율 컨테이너 */}
      <Image
        src="/saju/saju.svg"
        alt="사주 배경"
        layout="fill" // absolute + 부모에 맞춤
        className="object-contain" // contain으로 비율 유지
        priority // preload (중요 콘텐츠)
      />

      <div className="absolute inset-0 flex flex-col p-[2%] py-[3%] pt-[12%] gap-[1.5%]">
        <header className="flex flex-col justify-center items-center gap-[0.8%] w-full">
          <h2 className="text-[min(4vw,18px)] text-center text-[#424242] font-normal whitespace-nowrap">
            {name}님의 사주
          </h2>
          <p className="text-[min(6vw,20px)] text-center text-[#424242] font-bold whitespace-nowrap">
            1980년 08월 27일 08:10
          </p>
        </header>

        <SajuTable />
      </div>
    </div>
  );
}
