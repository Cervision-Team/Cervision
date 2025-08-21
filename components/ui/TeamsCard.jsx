import Image from "next/image";

export const TeamsCardTextFirst = ({ mainDivBg, teamNameFirst, teamNameSecond, teamColor, teamBg, svg, svgWidth }) => {
  return (
    <div
      className="w-[90%] max-w-[411px] h-auto aspect-[411/260] p-6 md:p-10 rounded-[30px] border border-solid border-dark shadow-[0_5px_0_0_#191A23]
     flex flex-row items-center justify-between"
      style={{ backgroundColor: mainDivBg }}
    >
      <div className="flex flex-col items-start justify-center">
        <p
          className="text-[20px] md:text-[30px] font-medium px-[6px] rounded-[7px]"
          style={{ color: teamColor, backgroundColor: teamBg }}
        >
          {teamNameFirst}
        </p>
        <p
          className="text-[20px] md:text-[30px] font-medium px-[6px] rounded-[7px]"
          style={{ color: teamColor, backgroundColor: teamBg }}
        >
          {teamNameSecond}
        </p>
      </div>
      <Image
        src={svg}
        alt={teamNameFirst}
        className="w-[40%] h-auto max-w-[150px]"
        style={{ maxWidth: `${svgWidth}%` }}
      />
    </div>
  );
};

export const TeamsCardImageFirst = ({ mainDivBg, teamNameFirst, teamNameSecond, teamColor, teamBg, svg, svgWidth }) => {
  return (
    <div
      className="w-[90%] max-w-[411px] h-auto aspect-[411/260] p-6 md:p-10 rounded-[30px] border border-solid border-dark shadow-[0_5px_0_0_#191A23]
     flex flex-row items-center justify-between"
      style={{ backgroundColor: mainDivBg }}
    >
      <Image
        src={svg}
        alt={teamNameFirst}
        className="w-[40%] h-auto max-w-[150px]"
        style={{ maxWidth: `${svgWidth}%` }}
      />
      <div className="flex flex-col items-start justify-center">
        <p
          className="text-[20px] md:text-[30px] font-medium px-[6px] rounded-[7px]"
          style={{ color: teamColor, backgroundColor: teamBg }}
        >
          {teamNameFirst}
        </p>
        <p
          className="text-[20px] md:text-[30px] font-medium px-[6px] rounded-[7px]"
          style={{ color: teamColor, backgroundColor: teamBg }}
        >
          {teamNameSecond}
        </p>
      </div>
    </div>
  );
};
