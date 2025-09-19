import UxUiDesign from "../../../../public/svg/ux-ui-design.svg"
import GraphicDesign from "../../../../public/svg/graphic-design.svg"
import MotionDesign from "../../../../public/svg/motion-design.svg"
import DigitalMarketing from "../../../../public/svg/digital-marketing.svg"
import FrontEnd from "../../../../public/svg/front-end.svg"
import DataAnalytics from "../../../../public/svg/data-analytics.svg"
import CyberSecurity from "../../../../public/svg/cyber-security.svg"
import BackEnd from "../../../../public/svg/back-end.svg"
import Law from "../../../../public/svg/law.svg"
import { TeamsCardImageFirst, TeamsCardTextFirst } from '@/src/components/ui/TeamsCard'


const Teams = () => {
  return (
    <>
      <section className="max-w-[1600px] mx-auto">
        <div className='w-full h-auto px-[80px] flex flex-col items-center justify-center mt-[60px] text-center max-lg:px-[16px]'>
          <h2 className='text-secondary text-[32px]/[40px] md:text-[50px]/[70px] font-medium mb-[40px]'>Peşəkarlığınızı və bacarıqlarınızı nümayiş etdirdiyimiz sahələr</h2>
          <p className='max-w-[628px] text-[#222] text-[18px]/[28px] md:text-[20px]/[30px] italic mb-[60px]'>‘’Müştərilərimizin ehtiyaclarını nəzərə alaraq, ən son trendlərə uyğun həllər təqdim edirik.’’</p>

          <div className='w-full flex flex-row flex-wrap items-center justify-center gap-x-[24px] gap-y-[40px]'>
            <TeamsCardTextFirst
              mainDivBg="#FFF8E7"
              teamNameFirst="UX/UI"
              teamNameSecond="Dizayn"
              teamColor="#FFBF19"
              teamBg="#30235B"
              svg={UxUiDesign}
              svgWidth={180} />

            <TeamsCardTextFirst
              mainDivBg="#FFBF19"
              teamNameFirst="Qrafik"
              teamNameSecond="Dizayn"
              teamColor="#30235B"
              teamBg="#FFF8E7"
              svg={GraphicDesign}
              svgWidth={143}
            />

            <TeamsCardImageFirst
              mainDivBg="#1A1A1A"
              teamNameFirst="Motion"
              teamNameSecond="Dizayn"
              teamColor="#1A1A1A"
              teamBg="#FFF8E7"
              svg={MotionDesign}
              svgWidth={172} />

            <TeamsCardImageFirst
              mainDivBg="#30235B"
              teamNameFirst="Rəqəmsal"
              teamNameSecond="Marketing"
              teamColor="#30235B"
              teamBg="#FFF8E7"
              svg={DigitalMarketing}
              svgWidth={144} />

            <TeamsCardImageFirst
              mainDivBg="#FFF8E7"
              teamNameFirst="Front-end"
              teamNameSecond="Developers"
              teamColor="#1A1A1A"
              teamBg="#FFBF19"
              svg={FrontEnd}
              svgWidth={140} />

            <TeamsCardTextFirst
              mainDivBg="#FFBF19"
              teamNameFirst="Data"
              teamNameSecond="Analitika"
              teamColor="#30235B"
              teamBg="#FFF8E7"
              svg={DataAnalytics}
              svgWidth={150} />

            <TeamsCardTextFirst
              mainDivBg="#1A1A1A"
              teamNameFirst="Kiber"
              teamNameSecond="Təhlükəsizlik"
              teamColor="#1A1A1A"
              teamBg="#FFBF19"
              svg={CyberSecurity}
              svgWidth={132} />

            <TeamsCardImageFirst
              mainDivBg="#FFBF19"
              teamNameFirst="Back-end"
              teamNameSecond="Developers"
              teamColor="#30235B"
              teamBg="#FFF8E7"
              svg={BackEnd}
              svgWidth={140} />

            <TeamsCardTextFirst
              mainDivBg="#FFF8E7"
              teamNameFirst="Hüquq"
              teamColor="#1A1A1A"
              teamBg="#FFBF19"
              svg={Law}
              svgWidth={190} />
          </div>
        </div>
      </section>
    </>
  )
}

export default Teams
