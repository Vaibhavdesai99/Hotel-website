import React from "react";
import "./Activities.css";
import img1 from "../Assets/birger-strahl-b3ZpqtiSMus-unsplash.jpg";
import img2 from "../Assets/fall-kHLI--621x414@LiveMint.webp";
import img3 from "../Assets/stephen-leonardi-gyIRjKPXupE-unsplash.jpg";
import trekking from '../Assets/Activity/pexels-kaichieh-chan-917510.jpg'
import Rafting from '../Assets/Activity/pexels-tom-fisk-1732279.jpg'
import cycling from '../Assets/Activity/pexels-pavel-danilyuk-5807630.jpg'
import Camping from '../Assets/Activity/pexels-josh-hild-2422265.jpg'
import Hiking from '../Assets/Activity/pexels-suliman-sallehi-1822458.jpg'
const Activities = () => {
  return (
    <div className="main" style={{margin:'0 2rem'}}>
      Activities
      <div className="photo-grid">
        <div className="grid-item">
          <img src={img1} alt="Image 1" />
          <h3>Bird Watching</h3>
        </div>
        <div className="grid-item">
          <img src={img2} alt="Image 2" />
          <h3>Amboli WaterFall</h3>
        </div>
        <div className="grid-item">
          <img src={img3} alt="Image 3" />
          <h3>Healing</h3>
        </div>
      </div>
      <div style={{color:'white', display:'flex' ,flexDirection:'column' ,gap:'10px'}}>
      <h1 >Welcome to Wild & Peace</h1>
      <h2>Facilities & SERVICES</h2>
      </div>
      <h3 style={{color:'white' , margin:' 10px 0'}}> 
The following services are offered</h3>
<div className="service1">
    <img src={trekking} alt="treking" className="smallimg"/>
    <div className="inner" style={{display:'flex' ,flexDirection:'column' , alignItems:'center' ,gap:'3rem'}}>
    <h2 style={{color:'white'}}>Trekking</h2>
    <div style={{color:'white'}}>Amboli Chaukul is a Trekkers paradise. There are dozens of waterfalls all around and every trek can end to some wonderful hidden or less discovered waterfall. Even if you are not a adventurous trekker, Amboli Chaukul has some charming and comfortable walks, which can be easily completed. The leisurely stroll from the main road to any of the view-points like Shirgaonkar Point, Mahedevgadh Point is beautiful, with green plant life on both sides and streams gurgling away in musical harmony with nature. The best way to trace trekking trails in Amboli Chaukul is to ask the local workers or reception office of Dark Forest Retreat</div>
    </div>
</div>

<div className="service1" style={{display:'flex', flexDirection:'row-reverse'}}>
    <img src={Rafting} alt="treking" className="smallimg"/>
    <div className="inner" style={{display:'flex' ,flexDirection:'column' , alignItems:'center' ,gap:'3rem'}}>
    <h2 style={{color:'white'}}>River-Rafting</h2>
    <div style={{color:'white'}}>Amboli Chaukul is a Trekkers paradise. There are dozens of waterfalls all around and every trek can end to some wonderful hidden or less discovered waterfall. Even if you are not a adventurous trekker, Amboli Chaukul has some charming and comfortable walks, which can be easily completed. The leisurely stroll from the main road to any of the view-points like Shirgaonkar Point, Mahedevgadh Point is beautiful, with green plant life on both sides and streams gurgling away in musical harmony with nature. The best way to trace trekking trails in Amboli Chaukul is to ask the local workers or reception office of Dark Forest Retreat</div>
    </div>
</div>
<div className="service1" style={{marginTop:'3rem'}}>
    <img src={cycling} alt="treking" className="smallimg"/>
    <div className="inner" style={{display:'flex' ,flexDirection:'column' , alignItems:'center' ,gap:'3rem'}}>
    <h2 style={{color:'white'}}>Cycling</h2>
    <div style={{color:'white'}}>Amboli Chaukul is a Trekkers paradise. There are dozens of waterfalls all around and every trek can end to some wonderful hidden or less discovered waterfall. Even if you are not a adventurous trekker, Amboli Chaukul has some charming and comfortable walks, which can be easily completed. The leisurely stroll from the main road to any of the view-points like Shirgaonkar Point, Mahedevgadh Point is beautiful, with green plant life on both sides and streams gurgling away in musical harmony with nature. The best way to trace trekking trails in Amboli Chaukul is to ask the local workers or reception office of Dark Forest Retreat</div>
    </div>
</div>
<div className="service1" style={{display:'flex', flexDirection:'row-reverse' ,marginTop:'5rem'}}>
    <img src={Camping} alt="treking" className="smallimg" style={{display:'flex', flexDirection:'row-reverse'}}/>
    <div className="inner" style={{display:'flex' ,flexDirection:'column' , alignItems:'center' ,gap:'3rem'}}>
    <h2 style={{color:'white'}}>Camping</h2>
    <div style={{color:'white'}}>Amboli Chaukul is a Trekkers paradise. There are dozens of waterfalls all around and every trek can end to some wonderful hidden or less discovered waterfall. Even if you are not a adventurous trekker, Amboli Chaukul has some charming and comfortable walks, which can be easily completed. The leisurely stroll from the main road to any of the view-points like Shirgaonkar Point, Mahedevgadh Point is beautiful, with green plant life on both sides and streams gurgling away in musical harmony with nature. The best way to trace trekking trails in Amboli Chaukul is to ask the local workers or reception office of Dark Forest Retreat</div>
    </div>
</div>
<div className="service1" style={{marginTop:'3rem'}}>
    <img src={Hiking} alt="treking" className="smallimg"/>
    <div className="inner" style={{display:'flex' ,flexDirection:'column' , alignItems:'center' ,gap:'3rem'}}>
    <h2 style={{color:'white'}}>Hiking</h2>
    <div style={{color:'white'}}>Amboli Chaukul is a Trekkers paradise. There are dozens of waterfalls all around and every trek can end to some wonderful hidden or less discovered waterfall. Even if you are not a adventurous trekker, Amboli Chaukul has some charming and comfortable walks, which can be easily completed. The leisurely stroll from the main road to any of the view-points like Shirgaonkar Point, Mahedevgadh Point is beautiful, with green plant life on both sides and streams gurgling away in musical harmony with nature. The best way to trace trekking trails in Amboli Chaukul is to ask the local workers or reception office of Dark Forest Retreat</div>
    </div>
</div>

    </div>
  );
};

export default Activities;
