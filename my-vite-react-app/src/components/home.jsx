import React, { useEffect, useState } from "react";
import Arrow from "../assets/images/icon-arrow.svg";
import MapComponent from "./map";

export default function Home() {

    const [lat, setLat] = useState(0);
    const [lng, setLng] = useState(0);
    const [ipAddress, setIpAddress] = useState("");
    const [location, setLocation] = useState("");
    const [isp, setIsp] = useState("");
    const [timezone, setTimezone] = useState("")
    const [geoData, setGeoData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          `https://geo.ipify.org/api/v2/country,city?apiKey=at_Qy7CaWSmALt1JhIoJhgdrhgrhFtdw`,
          {
            method: "GET",
          }
        );
        const jsonData = await response.json();
        setLat(jsonData.location.lat)
        setLng(jsonData.location.lng)
        setIpAddress(jsonData.ip);
        setLocation(jsonData.location.region + "," + jsonData.location.country + "," + jsonData.as.asn);
        setIsp(jsonData.isp)
        setTimezone(jsonData.location.timezone)
        setGeoData(jsonData);
        console.log(jsonData);
      } catch(error) {
        console.error("Error fetching data: ", error )
      }
    };
    fetchData();
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    fetchData(ipAddress);
  }
  return (
    <div>
    <section>
      <div className="bg-tracker">
        <div className="flex flex-col items-center justify-center">
          <h1 className="text-white text-[30px] text-center pt-10 font-[Rubik-Medium] mb-10">
            IP Address Tracker
          </h1>
          <form className="flex items-center" onSubmit={handleSubmit}>
            <input
              type="text"
              placeholder="Search for any IP Address or Domain"
              value={ipAddress}
              onChange={(e) => setIpAddress(e.target.value)}
              className="rounded-l-xl p-5 w-[600px] text-black mb-10"
            />
            <button type="submit" className="bg-black px-5 py-[26px] rounded-r-xl -mt-[40px]">
              <img src={Arrow} />
            </button>
          </form>
        </div>

        <div className="relative z-10">
          <div className="bg-white flex gap-x-20 justify-between shadow-md p-10 w-[80%] mx-auto  rounded-xl">
            <div>
              <h1 className="text-[18px] font-[Rubik-Medium] text-gray-400">IP ADDRESS</h1>
              <p className="text-[30px] font-[Rubik-Bold]">{ipAddress}</p>
            </div>

            <div>
              <h1 className="text-[18px] font-[Rubik-Medium] text-gray-400">LOCATION</h1>
              <p className="text-[30px] font-[Rubik-Bold]">{location}</p>
            </div>

            <div>
              <h1 className="text-[18px] font-[Rubik-Medium] text-gray-400">TIMEZONE</h1>
              <p className="text-[30px] font-[Rubik-Bold]">{timezone}</p>
            </div>

            <div>
              <h1 className="text-[18px] font-[Rubik-Medium] text-gray-400">ISP</h1>
              <p className="text-[30px] font-[Rubik-Bold]">{isp}</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <div className="relative">
    <MapComponent lat={lat} lng={lng} />
    </div>
    
    </div>
  );
}
