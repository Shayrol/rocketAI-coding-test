import { sajuRows } from "../../../pages/api/saju_data";

export default function SajuTable() {
  return (
    <div className="w-full h-full flex items-center justify-center">
      <table className="w-[90%] h-[90%] table-fixed border-collapse">
        <thead>
          <tr>
            <th className="text-[min(3.5vw,20px)] font-bold p-[min(3vw,12px)] border border-black w-[15%]"></th>
            <th className="text-[min(3.5vw,20px)] font-bold p-[min(3vw,12px)] border border-black">
              時
            </th>
            <th className="text-[min(3.5vw,20px)] font-bold p-[min(3vw,12px)] border border-black">
              日
            </th>
            <th className="text-[min(3.5vw,20px)] font-bold p-[min(3vw,12px)] border border-black">
              月
            </th>
            <th className="text-[min(3.5vw,20px)] font-bold p-[min(3vw,12px)] border border-black">
              年
            </th>
          </tr>
        </thead>
        <tbody>
          {sajuRows.map((row, idx) => (
            <tr key={idx}>
              {/* row label */}
              <th className="text-[min(2.2vw,10px)] font-medium p-[min(1.5vw,6px)] border border-black">
                <div className="flex flex-col justify-center items-center w-full">
                  <p className="text-[min(2.2vw,12px)] leading-tight text-nowrap">
                    {row.label_1}
                  </p>
                  <p className="text-[min(1.6vw,7.8px)] leading-tight">
                    ({row.label_2})
                  </p>
                </div>
              </th>
              {/* 결과 값 */}
              {row.values.map((val, i) => (
                <td
                  key={i}
                  className="text-center px-[min(1.2vw,5px)] border border-black"
                >
                  {/* 천간, 지지 → 특별 스타일 */}
                  {["천간", "지지"].includes(row.label_2) ? (
                    <div
                      className={`
                      w-full flex flex-col items-center justify-center px-[min(1.5vw,6px)] py-[min(0.9vw,4px)] rounded-xl
                      leading-tight border text-white
                      ${
                        val.sub === "정" || val.sub === "사"
                          ? "bg-[#C23030] border-[#C23030]"
                          : val.sub === "인"
                          ? "bg-[#18868C] border-[#18868C]"
                          : val.sub === "유"
                          ? "bg-[#F9F9F9] border-black text-black"
                          : "bg-[#2F2F2F] border-[#2F2F2F]"
                      }
                    `}
                    >
                      <p className="text-[min(1.8vw,8px)]">{val.sub}</p>
                      <p className="text-[min(5.2vw,25px)] font-bold">
                        {val.main}
                      </p>
                      <p className="text-[min(2vw,9px)]">{val.extra}</p>
                    </div>
                  ) : (
                    <div className="flex flex-col items-center justify-center leading-tight">
                      {val.main.split(" ").map((mainEl, idx2) => (
                        <div key={idx2} className="flex flex-col items-center">
                          <p className="text-[min(2.5vw,14px)]">{mainEl}</p>
                          {val.sub?.split(" ")[idx2] && (
                            <p className="text-[min(2vw,9px)] text-gray-500">
                              ({val.sub.split(" ")[idx2]})
                            </p>
                          )}
                        </div>
                      ))}
                    </div>
                  )}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
