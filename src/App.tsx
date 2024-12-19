import "./App.css";
import Profile from "./Bird paradise/Profile/Profile";


  
function App(){
    
  return (
 
    <div>
   <Profile
   name={"Sun Conure"}
   image={"birds.jpg"}
   bio={"The sun conure(Aratinga solstitialis), also known as the sun parakeet, is a medium-sized,vibrantly colored parrot native to northeastern South America"} 
   link={"https://en.wikipedia.org/wiki/Sun_conure"}
/>
   <Profile
   name={"cockatiel"}
   image={"cockatiel.webp"}
   bio={"The cockatiel, also known as the weero/weiro or quarrion,is a medium-sized parrot that is a member of its own branch of the cockatoo family endemic to Australia"}
   link={"https://en.wikipedia.org/wiki/Cockatiel"}
    />
<Profile
   name={"Parakeet"}
   image={"parakeet.jpg"}
   bio={"Parakeets comprise about 115 species of birds that are seed-eating parrots of small size, slender build, and long, tapering tails.[citation needed]" }
   link={"https://en.wikipedia.org/wiki/Parakeet"}
   />

    </div>
  
  );
}

export default App;
