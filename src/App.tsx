
import { useState } from "react";
import "./App.css";
import Profile from "./Bird-paradise/Profile/Profile";
import Form from "./Bird-paradise/Form/Form"


const App = () => {
  // Task 1: Create State
  const [list, setList] = useState([
    {
      id: 1,
      name: "Sun Conure",
      image: "birds.jpg",
      bio: "The sun conure (Aratinga solstitialis), also known as the sun parakeet, is a medium-sized, vibrantly colored parrot native to northeastern South America.",
      link: "https://en.wikipedia.org/wiki/Sun_conure",
      starred: false, // New boolean property
    },
    {
      id: 2,
      name: "Cockatiel",
      image: "cockatiel.webp",
      bio: "The cockatiel, also known as the weero/weiro or quarrion, is a medium-sized parrot that is a member of its own branch of the cockatoo family endemic to Australia.",
      link: "https://en.wikipedia.org/wiki/Cockatiel",
      starred: false, // New boolean property
    },
    {
      id: 3,
      name: "Parakeet",
      image: "parakeet.jpg",
      bio: "Parakeets comprise about 115 species of birds that are seed-eating parrots of small size, slender build, and long, tapering tails.",
      link: "https://en.wikipedia.org/wiki/Parakeet",
      starred: false, // New boolean property
    },
  ]);
  
  const [currentProfile, setCurrentProfile] = useState(null); // To track the profile being edited
  const [isFormVisible, setIsFormVisible] = useState(false); // To toggle form visibility

  // Task 2: Create New Item
  const addNewProfile = (newProfile) =>{
    setList([...list, { ...newProfile, id: Date.now(), starred: false }]);
    setIsFormVisible(false);
  };

  const updateProfile = (updatedProfile)  => {
    setList(
      list.map((profile) =>
        profile.id === updatedProfile.id ? updatedProfile : profile
      )
    );
    setIsFormVisible(false);
  };

  const deleteProfile = (id) => {
    setList(list.filter((item) => item.id !== id));
  };

  const toggleStarred = (id) => {
    setList(
      list.map((item) =>
        item.id === id ? { ...item, starred: !item.starred } : item
      )
    );
  };

  const openForm = (profile = null) => {
    setCurrentProfile(profile);
    setIsFormVisible(true);
  };

  return (
    <div>
      <button onClick={() => openForm=(null)}>Add New Bird</button>
      {list.map((profile) => (
        <Profile
          key={profile.id}
          {...profile}
          deleteProfile={deleteProfile}
          toggleStarred={toggleStarred}
          onEdit={() => openForm(profile)}
        />
      ))}
      {isFormVisible && (
        <Form
          initialData={currentProfile}
          onSave={currentProfile ? updateProfile : addNewProfile}
          onClose={() => setIsFormVisible(false)}
        />
      )}
    </div>
  );
};

export default App;
