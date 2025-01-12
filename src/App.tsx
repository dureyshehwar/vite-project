
import { useState } from "react";
import "./App.css";
import Profile from "./Bird-paradise/Profile/Profile";
import Form from "./Bird-paradise/Form/Form"


const App = () => {
  // // Task 1: Initialize state
  // `list` contains the initial bird profiles data
  // `setList` updates the state when profiles are added, edited, or deleted
  const [list, setList] = useState([
    {
      id: 1,
      name: "Sun Conure",
      image: "./images/birds.jpg",
      bio: "The sun conure (Aratinga solstitialis), also known as the sun parakeet, is a medium-sized, vibrantly colored parrot native to northeastern South America.",
      link: "https://en.wikipedia.org/wiki/Sun_conure",
      starred: false, // New boolean property
    },
    {
      id: 2,
      name: "Cockatiel",
      image: "./images/cockatiel.webp",
      bio: "The cockatiel, also known as the weero/weiro or quarrion, is a medium-sized parrot that is a member of its own branch of the cockatoo family endemic to Australia.",
      link: "https://en.wikipedia.org/wiki/Cockatiel",
      starred: false, // New boolean property
    },
    {
      id: 3,
      name: "Parakeet",
      image: "./images/parakeet.jpg",
      bio: "Parakeets comprise about 115 species of birds that are seed-eating parrots of small size, slender build, and long, tapering tails.",
      link: "https://en.wikipedia.org/wiki/Parakeet",
      starred: false, // New boolean property
    },
  ]);
  
  // State to track the profile being edited or created
  const [currentProfile, setCurrentProfile] = useState(null); // To track the profile being edited
  
  // State to control the visibility of the form
  const [isFormVisible, setIsFormVisible] = useState(false); // To toggle form visibility

  //  Task 2: Add a new profile to the list
  const addNewProfile = (newProfile) =>{
    // Add the new profile to the list with a unique ID and default starred state
    setList([...list, { ...newProfile, id: Date.now(), starred: false }]);
    setIsFormVisible(false);  // Hide the form after saving
  };

  // Update an existing profile in the list
  const updateProfile = (updatedProfile)  => {
    // Replace the old profile with the updated one based on matching ID
    setList(
      list.map((profile) =>
        profile.id === updatedProfile.id ? updatedProfile : profile
      )
    );
    setIsFormVisible(false); // Hide the form after saving
  };

  // Delete a profile from the list
  const deleteProfile = (id) => {
    // Remove the profile with the given ID
    setList(list.filter((item) => item.id !== id));
  };


  // Toggle the "starred" status of a profile
  const toggleStarred = (id) => {
    // Flip the starred boolean for the profile with the given ID
    setList(
      list.map((item) =>
        item.id === id ? { ...item, starred: !item.starred } : item
      )
    );
  };

  // Open the form for adding or editing a profile
  const openForm = (profile = null) => {
    console.log("add a bird clicked")
    setCurrentProfile(profile);// Set the profile being edited or null for new profiles
    setIsFormVisible(true); // Show the form
  };

  return (
    <div>

      {/* Button to open the form for adding a new bird */}
      <button type="button" onClick={() => openForm(null)}>Add New Bird</button>
      {/* Conditional rendering of the form */}
      {isFormVisible && (
        <Form
          list={list} // Pass the list of profiles to the form
          initialData={currentProfile} // Pass the current profile for editing, or null for a new profile
          onSave={currentProfile ? updateProfile : addNewProfile} // Use appropriate callback based on context
          onClose={() => setIsFormVisible(false)}// Close the form without saving
        />
        
      )}
      
      {/* Render the list of profiles */}
      {list.map((profile) => (
        <Profile
          key={profile.id} // Unique key for each profile
          {...profile} // Spread the profile properties as props
          deleteProfile={deleteProfile} // Callback to delete the profile
          toggleStarred={toggleStarred} // Callback to toggle the "starred" status
          onEdit={() => openForm(profile)} // Open the form for editing this profile
        />
      ))}
    </div>
  );
};

export default App;
