
import { useState } from "react";
import "./App.css";
import Profile from "./Bird-paradise/Profile/Profile";

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

  // Task 2: Create New Item
  const addNewProfile = () => {
    const newProfile = {
      id: Date.now(),
      name: "Grey parrot",
      image: "360_F_973856180_ZEXSE603DC6S7X09tSRAbR8mEpfLNXT3.jpg",
      bio: "The grey parrot was formally described in 1758 by Swedish naturalist Carl Linnaeus in the tenth edition of Systema Naturae..",
      link: "https://en.wikipedia.org/wiki/Grey_parrot",
      starred: false, // Default value for new items
    };
    setList([...list, newProfile]);
  };

  // Task 3: Delete Item
  const deleteProfile = (id: number) => {
    const updatedList = list.filter((item) => item.id !== id);
    setList(updatedList);
  };

  // Task 4: Update Property
  const toggleStarred = (id: number) => {
    const updatedList = list.map((item) =>
      item.id === id ? { ...item, starred: !item.starred } : item
    );
    setList(updatedList);
  };

  return (
    <div>
      <button onClick={addNewProfile}>Add New Bird</button>
      {list.map((profile) => (
        <Profile
          key={profile.id}
          id={profile.id}
          name={profile.name}
          image={profile.image}
          bio={profile.bio}
          link={profile.link}
          starred={profile.starred}
          deleteProfile={deleteProfile}
          toggleStarred={toggleStarred}
        />
      ))}
    </div>
  );
};

export default App;
