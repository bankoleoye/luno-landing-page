import { TrustTopCurveLogo } from "../../assets/icons";
import Title from "../title/Title";
import computer from "../../assets/images/computer.png"

const Trade = () => (
  <div className="text-center">
    <TrustTopCurveLogo className=" text-gray-100" />
    <div className="flex justify-between items-center flex-col-reverse lg:flex-row-reverse p-10 bg-gray-100">
      <div className="lg:w-7/12">
        <img src={computer} alt="trade with pc" />
      </div>
      <div className="lg:w-5/12 p-4">
        <Title title="Trade on the go" />
        <p className="pt-10">
          Deposit, withdraw, and trade 24/7 on our mobile apps for Android and
          iOS, so you can experience professional-level crypto exchange features
          on the move.
        </p>
      </div>
    </div>
  </div>
);

export default Trade;
