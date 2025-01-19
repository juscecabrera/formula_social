'use client'

import driversSocials from "../utils/driversSocials.json"
import { useEffect, useState } from "react"
import InstagramEmbed from "./InstagramEmbed"

interface SocialMedia {
  twitter: string;
  instagram: string;
  facebook: string;
  youtube: string;
  tiktok: string;
  snapchat: string;
  threads: string;
}

// Representa el objeto principal que contiene a todos los conductores
interface DriversSocials {
  drivers: Record<string, SocialMedia>;
}

const Feed = () => {
  const [selectedTeams, setSelectedTeams] = useState("")
  const [selectedDrivers, setSelectedDrivers] = useState("")
  const [selectedSocials, setSelectedSocials] = useState({
      "twitter" : "", 
      "instagram" : "", 
      "facebook" : "", 
      "youtube" : "", 
      "tiktok": "", 
      "snapchat" : "", 
      "threads": ""}
    )

  const drivers = Object.keys(driversSocials.drivers)

  const teams = ["Alpine", "Aston Martin", "McLaren", "Mercedes", "Red Bull", "RB", "Ferrari", "Kick Sauber", "Haas", "Williams"]

  const driverSelection = (e: any, driversSocials: DriversSocials) => { 
    const selectedValue = e.target.value;

    setSelectedDrivers(selectedValue);
    setSelectedSocials(driversSocials.drivers[e.target.value])
    
  }


  return (
    <div>
      <select className="border-2 border-black" name="teams" onChange={(e) => setSelectedTeams(e.target.value)} value={selectedTeams} >
        {teams?.map((value, key) => (
          <option value={value} key={key}>{value}</option>
        )
        )}
      </select>

      <select className="border-2 border-black ml-4" name="drivers" onChange={(e) => driverSelection(e, driversSocials)} value={selectedDrivers}>
        {drivers?.map((value, key) => (
          <option value={value} key={key}>{value}</option>
        )
        )}
      </select>

      <p>Selected driver: {selectedDrivers}</p>
      <p>Selected team: {selectedTeams}</p>
      

      <p className="mt-10">Twitter/X: {selectedSocials?.twitter}</p>
      <p>Instagram: {selectedSocials?.instagram}</p>
      <p>Facebook: {selectedSocials?.facebook}</p>
      <p>Youtube: {selectedSocials?.youtube}</p>
      <p>TikTok: {selectedSocials?.tiktok}</p>
      <p>Snapchat: {selectedSocials?.snapchat}</p>
      <p>Threads: {selectedSocials?.threads}</p>


      <a className="twitter-timeline" data-width="500" data-height="500" href="https://twitter.com/OscarPiastri?ref_src=twsrc%5Etfw"></a> <script async src="https://platform.twitter.com/widgets.js"></script>

      <InstagramEmbed />

    </div>
  )
}

export default Feed