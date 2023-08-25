import Frame from "../assets/img/icons/Frame.svg";
import Vector1 from "../assets/img/icons/Vector (1).svg";
import Vector3 from "../assets/img/icons/Vector (3).svg";
import { useSelector, useDispatch } from "react-redux";
import { addBooked } from "../Redux/Booking/actionsCreator";

const Input = () => {
  const dispatch = useDispatch();
  const books = useSelector((state) => state);

  const handleSubmit = (e) => {
    e.preventDefault();
    const formElement = e.target;
    const formData = {};
    for (let i = 0; i < formElement.elements.length; i++) {
      const element = formElement.elements[i];
      if (element.name) {
        formData[element.name] = element.value;
      }
    }
    dispatch(addBooked(formData));

    formElement.reset();
  };

  return (
    <div className="mt-[160px] mx-4 md:mt-[160px] relative">
      <div className="bg-white rounded-md max-w-6xl w-full mx-auto">
        <form className="first-hero lws-inputform" onSubmit={handleSubmit}>
          <div className="des-from">
            <p>Destination From</p>
            <div className="flex flex-row">
              <img src={Frame} alt="d" />
              <select
                className="outline-none px-2 py-2 w-full"
                name="from"
                id="lws-from"
                required
              >
                <option value="" hidden>
                  Please Select
                </option>
                <option>Dhaka</option>
                <option>Sylhet</option>
                <option>Saidpur</option>
                <option>Cox's Bazar</option>
              </select>
            </div>
          </div>

          <div className="des-from">
            <p>Destination To</p>
            <div className="flex flex-row">
              <img src={Frame} alt="" />
              <select
                className="outline-none px-2 py-2 w-full"
                name="to"
                id="lws-to"
                required
              >
                <option value="" hidden>
                  Please Select
                </option>
                <option>Dhaka</option>
                <option>Sylhet</option>
                <option>Saidpur</option>
                <option>Cox's Bazar</option>
              </select>
            </div>
          </div>

          <div className="des-from">
            <p>Journey Date</p>
            <input
              type="date"
              className="outline-none px-2 py-2 w-full date"
              name="date"
              id="lws-date"
              required
            />
          </div>

          <div className="des-from">
            <p>Guests</p>
            <div className="flex flex-row">
              <img src={Vector1} alt="" />
              <select
                className="outline-none px-2 py-2 w-full"
                name="members"
                id="lws-guests"
                required
              >
                <option value="" hidden>
                  Please Select
                </option>
                <option value="1">1 Person</option>
                <option value="2">2 Persons</option>
                <option value="3">3 Persons</option>
                <option value="4">4 Persons</option>
              </select>
            </div>
          </div>

          <div className="des-from !border-r-0">
            <p>class</p>
            <div className="flex flex-row">
              <img src={Vector3} alt="" />
              <select
                className="outline-none px-2 py-2 w-full"
                name="ticketClass"
                id="lws-ticketclass"
                required
              >
                <option value="" hidden>
                  Please Select
                </option>
                <option>Business</option>
                <option>Economy</option>
              </select>
            </div>
          </div>

          <button
            className="addCity"
            type="submit"
            disabled={books.length >= 3 ? true : false}
            id="lws-addCity"
          >
            <svg
              width="15px"
              height="15px"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="2"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M12 4.5v15m7.5-7.5h-15"
              />
            </svg>
            <span className="text-sm">Book</span>
          </button>
        </form>
      </div>
    </div>
  );
};

export default Input;
