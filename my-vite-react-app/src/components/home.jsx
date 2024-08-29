import React, { useEffect, useState } from "react";
import Arrow from "../assets/images/icon-arrow.svg";
import MapComponent from "./map";

export default function Home() {
  const [lat, setLat] = useState(0);
  const [lng, setLng] = useState(0);
  const [ipAddress, setIpAddress] = useState("");
  const [location, setLocation] = useState("");
  const [isp, setIsp] = useState("");
  const [timezone, setTimezone] = useState("");
  const [ipInput, setIpInput] = useState("");

  const apiToken = "b464b8c800b0a3";

  const fetchData = async (ip = "") => {
    try {
      const response = await fetch(`https://ipinfo.io/${ip}?token=${apiToken}`);
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
      const jsonData = await response.json();
      const [latitude, longitude] = jsonData.loc.split(",");
      setLat(latitude);
      setLng(longitude);
      setIpAddress(jsonData.ip);
      setLocation(`${jsonData.city}, ${jsonData.country}`);
      setIsp(jsonData.org);
      setTimezone(jsonData.timezone);
      console.log(jsonData);
    } catch (error) {
      console.error("Error fetching data: ", error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    fetchData(ipInput);
  };

  return (
    <div>
      <section>
        <div className="bg-tracker p-5 sm:p-10">
          <div className="flex flex-col items-center justify-center">
            <h1 className="text-white text-2xl sm:text-3xl text-center font-[Rubik-Medium] mb-5 sm:mb-10">
              IP Address Tracker
            </h1>
            <form className="flex items-center w-full max-w-lg sm:max-w-3xl" onSubmit={handleSubmit}>
              <input
                type="text"
                name="ipInput"
                value={ipInput}
                onChange={(e) => setIpInput(e.target.value)}
                placeholder="Search for any IP Address or Domain"
                className="rounded-l-xl p-3 sm:p-5 flex-grow text-black"
              />
              <button
                type="submit"
                className="bg-black px-3 sm:px-5 py-[26px] rounded-r-xl"
              >
                <img src={Arrow} alt="Arrow Icon" />
              </button>
            </form>
          </div>

          <div className="relative z-10 mt-10">
            <div className="bg-white flex flex-col sm:flex-row gap-y-5 sm:gap-y-0 sm:gap-x-10 justify-between shadow-md p-5 sm:p-10 md:w-[100%] w-full sm:w-[80%] mx-auto rounded-xl">
              <div>
                <h1 className="text-lg sm:text-xl font-[Rubik-Medium] text-gray-400 mb-1 sm:mb-3">
                  IP ADDRESS
                </h1>
                <p className="text-xl sm:text-2xl font-[Rubik-Bold]">{ipAddress}</p>
              </div>

              <div>
                <h1 className="text-lg sm:text-xl font-[Rubik-Medium] text-gray-400 mb-1 sm:mb-3">
                  LOCATION
                </h1>
                <p className="text-xl sm:text-2xl font-[Rubik-Bold]">{location}</p>
              </div>

              <div>
                <h1 className="text-lg sm:text-xl font-[Rubik-Medium] text-gray-400 mb-1 sm:mb-3">
                  TIMEZONE
                </h1>
                <p className="text-xl sm:text-2xl font-[Rubik-Bold]">UTC {timezone}</p>
              </div>

              <div>
                <h1 className="text-lg sm:text-xl font-[Rubik-Medium] text-gray-400 mb-1 sm:mb-3">
                  ISP
                </h1>
                <p className="text-xl sm:text-2xl font-[Rubik-Bold]">{isp}</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="relative h-[300px] sm:h-[500px] w-full">
        <MapComponent lat={lat} lng={lng} />
      </div>
    </div>
  );
}
