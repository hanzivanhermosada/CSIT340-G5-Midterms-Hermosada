import { useState } from "react";
import Intro from "./Intro";
import Stats from "./Stats";
import Contribute from "./Contribute";
import Controls from "./Controls";
export default function Hero() {

    const [stars, setStars] = useState(0);
    const [downloads, setDownloads] = useState(0);
    const [issues, setIssues] = useState(5);

    function handleStar() {
    setStars(stars + 1);
    }

    function handleDownload() {
    setDownloads(downloads + 1);
    }

    function handleReport() {
    setIssues(issues + 1);
    }

    function handleReset() {
    setStars(0);
    setDownloads(0);
    setIssues(5);
    }


    return (
    <div>
      <Intro author="Hanz Ivan Hermosada" />
      <Stats stars={stars} downloads={downloads} issues={issues} />
       <Contribute issues={issues} />
      <div className="flex justify-center gap-4 py-6">
        <Controls handleStar={handleStar} handleDownload={handleDownload} handleReport={handleReport} handleReset={handleReset} />
      </div>

      

    </div>
    )


}