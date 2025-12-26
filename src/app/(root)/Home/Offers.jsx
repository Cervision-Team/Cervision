import Image from "next/image"
import Developer from "../../../../public/svg/Developer.svg"
import Check from "../../../../public/svg/check.svg"

const Offers = () => {
  return (
    <>
      <section  className="max-w-[1600px]  mx-auto pb-10">
        <div className='w-full h-auto pr-[80px] flex flex-row justify-between items-center mt-[100px] gap-[90px] max-[1100px]:flex-col max-[1100px]:items-start max-lg:pr-[16px] max-lg:gap-[30px]'>
          <Image
            src={Developer}
            alt="Developer"
            className="w-full max-w-[774px] h-auto mt-8 lg:mt-0"
          />

          <div className="flex flex-col justify-start items-start max-[1100px]:px-[16px]">
            <p className="text-[#0B132A] text-[32px]/[50px] font-semibold mb-[10px]">Cervision olaraq biz nə vəd edirik?</p>

            <div className="flex flex-row items-start gap-[10px] mb-[15px]">
              <Image className="mt-1" src={Check} alt="Check" width={24} height={24} />
              <p className="text-[#4F5665] text-[20px]/[30px]"><span className="font-medium">İdeyanı gerçəyə çevirmək-</span> ideyanın reallaşması üçün peşəkar komanda dəstəyi </p>
            </div>

            <div className="flex flex-row items-start gap-[10px] mb-[15px]">
              <Image className="mt-1" src={Check} alt="Check" width={24} height={24} />
              <p className="text-[#4F5665] text-[20px]/[30px]"><span className="font-medium">Peşəkar mentor dəstəyi-</span> burada siz ideyanızın təkmilləşməsi üçün mentorlarımıla fikir mübadiləsi apararaq layihəni bir adım önə daşıyrsız </p>
            </div>

            <div className="flex flex-row items-start gap-[10px] mb-[15px]">
              <Image className="mt-1" src={Check} alt="Check" width={24} height={24} />
              <p className="text-[#4F5665] text-[20px]/[30px]"><span className="font-medium">Komanda ruhu və əməkdaşlıq-</span> peşəkar komanda ilə real layihələr üzərində çalışıb təcrübə və portfolionuzu böyütmə imkanı. </p>
            </div>

            <div className="flex flex-row items-start gap-[10px] mb-[15px]">
              <Image className="mt-1" src={Check} alt="Check" width={24} height={24} />
              <p className="text-[#4F5665] text-[20px]/[30px]"><span className="font-medium">İnvestor cəlbi-</span> ideyanızın gəlirli bir məhsula çevrilməsi üçün layihəni genişmiqyaslarda tanıdaraq investor cəlbi.</p>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Offers
