import { useSelector } from "react-redux";
import { selectPhoneNumber } from "../features/phone-number/phoneNumberSlice";

export default function Contact() {
  const phoneNumber = useSelector(selectPhoneNumber);
  return (
    <div className="flex flex-col">
      <span className="text-2xl font-bold">PT.ABC</span>
      <span>Jl. Setiabudi no 33</span>
      <span>{phoneNumber}</span>
    </div>
  );
}
