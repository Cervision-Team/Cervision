import Hackathon from "./Home/Hackathon";
import Information from "./Home/Information";
import Offers from "./Home/Offers";
import Teams from "./Home/Teams";

export default async function Home() {
  return (
    <>
    <Hackathon />
    <Information/>
    <Teams />
    <Offers />
    </>
  );
}