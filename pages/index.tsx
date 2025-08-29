import Image from "next/image";
import Saju from "../components/pages/home/saju";

export default function Home() {
  const name = "김로켓";

  return (
    <section
      className="
      flex flex-col justify-center items-center w-full
    "
    >
      <div
        className="
          relative flex flex-col w-full max-w-md min-w-[260px] aspect-[375/2081] bg-[#F3F2EF]
        "
      >
        {/* 배경 이미지 */}
        <Image
          src="/Group.svg"
          alt="페이지 배경"
          layout="fill"
          className="object-contain"
          priority
        />

        {/* 1번째 말풍선 */}
        <article
          className="
            absolute z-50 top-[28.45%] left-[-2%] w-[75%] h-[9%]
            bg-[url('/bubble_round_03.svg')] bg-no-repeat bg-contain bg-center
            flex justify-center items-center text-center
          "
        >
          <p
            className="
              pt-4  font-normal text-[clamp(0.75rem,4.48vw,1.2rem)] leading-[1.5] tracking-[-0.025em]
            "
          >
            이제 본격적으로 <br />
            {name}님의 사주팔자를 <br />
            분석해볼 차례네요.
          </p>
        </article>

        {/* 2번째 말풍선 */}
        <article
          className="
            absolute z-50 top-[46.5%] left-[0] w-[74%] h-[9%]
            bg-[url('/bubble_round_02.svg')] bg-no-repeat bg-contain bg-center
            flex justify-center items-center text-center
          "
        >
          <p
            className="
              pb-6 font-normal text-[clamp(0.75rem,4.48vw,1.2rem)] leading-[1.5] tracking-[-0.025em]
            "
          >
            제가 {name}님의 사주를 <br />
            보기 쉽게 표로 정리했어요
          </p>
        </article>
        <div className="absolute flex justify-center items-center w-full top-[66.34%]">
          <Saju name={name} />
        </div>
      </div>
    </section>
  );
}
