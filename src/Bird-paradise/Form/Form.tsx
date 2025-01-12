// Define the props for the Form component
// - list: an array of existing profiles (empty by default)
// - initialData: optional data for editing an existing profile
// - onSave: a callback function to handle saving profile data
// - onClose: a callback function to handle closing the form
type FormProps = {
  list: []  // The current list of profiles
    initialData: {
      id: string;        // Unique identifier for a profile
      name: string;      // Profile name
      image: string;     // Profile image URL
      bio: string;      // Profile bio
      link: string;     // Profile external link
    } | null;        // Can be null for creating a new profile
    onSave: (data: {
      name: string;
      image: string;
      bio: string;
      link: string;
    }) => void;     // Callback to save data
    onClose: () => void;   // Callback to close the form
  };
  
import React, { useState, useEffect } from "react";
// Form component to handle creating or editing a profile
const Form: React.FC<FormProps>= ({ list, initialData, onSave, onClose }) => {
  // State to manage form input values
  const [formData, setFormData] = useState({
    name: "",
    image: "",
    bio: "",
    link: "",
  });
// Populate form with initial data if provided (for editing)
  useEffect(() => {
    if (initialData) {
      setFormData(initialData);   // Update state with initial data
    }
  }, [initialData]);
      // Handle changes to form inputs
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };
// Handle form submission
  const handleSubmit = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    e.preventDefault();  // Prevent default form submission behavior
    
    // Determine the last profile's ID and increment it for the new profile
    let lastId: number = list.length > 0 ? list[list.length -1].id : 0;
    
    // Pass updated form data with new ID to onSave callback
    onSave({ ...formData, id: lastId + 1});
};
  

  return (
    <div>
      <form onSubmit={handleSubmit}>
        {/* Form title changes based on whether editing or adding */}
        <h2>{initialData ? "Edit Profile" : "Add New Profile"}</h2>
        
        {/* Input for the profile name */}
        <label>
          Name:
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </label>
        {/* Input for the profile image URL */}
        <label>
          Image URL:
          <input
            type="text"
            name="image"
            value={formData.image}
            onChange={handleChange}
            required
          />
        </label>
      {/* Textarea for the profile bio */} 
        <label>
          Bio:
          <textarea
            name="bio"
            value={formData.bio}
            onChange={handleChange}
            required
          />
        </label>
         {/* Input for the profile link */}
        <label>
          Link:
          <input
            type="url"
            name="link"
            value={formData.link}
            onChange={handleChange}
            required
          />
        </label>
        
        {/* Button to save the profile */}
        <button type="button" onClick={(e) => handleSubmit(e)}>Save</button>
         {/* Button to cancel and close the form */}
        <button type="button" onClick={onClose}>
          Cancel
        </button>
      </form>
    </div>
  );
};

export default Form;
