import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  updatePhoneNumber,
  selectPhoneNumber,
} from "../features/phone-number/phoneNumberSlice";

export default function InputPhoneNumber() {
  const [phoneNumber, setPhoneNumber] = useState("");
  const dispatch = useDispatch();
  const phoneNum = useSelector(selectPhoneNumber);

  return (
    <div className="flex flex-col gap-4">
      <label>No Telp</label>
      <input
        type="text"
        className="input input-bordered input-primary w-96"
        placeholder="Masukkan No Telp"
        value={phoneNumber}
        onChange={(e) => setPhoneNumber(e.target.value)}
      />
      <button
        className="w-96 btn btn-primary"
        onClick={() => dispatch(updatePhoneNumber(phoneNumber))}
      >
        Go
      </button>
    </div>
  );
}
