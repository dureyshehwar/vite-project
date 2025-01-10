type FormProps = {
  list: []
    initialData: {
      id: string;
      name: string;
      image: string;
      bio: string;
      link: string;
    } | null;
    onSave: (data: {
      name: string;
      image: string;
      bio: string;
      link: string;
    }) => void;
    onClose: () => void;
  };
  
import React, { useState, useEffect } from "react";

const Form: React.FC<FormProps>= ({ list, initialData, onSave, onClose }) => {
  const [formData, setFormData] = useState({
    name: "",
    image: "",
    bio: "",
    link: "",
  });

  useEffect(() => {
    if (initialData) {
      setFormData(initialData);
    }
  }, [initialData]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    e.preventDefault();
    
    let lastId: number = list.length > 0 ? list[list.length -1].id : 0;
    onSave({ ...formData, id: lastId + 1});
};
  

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <h2>{initialData ? "Edit Profile" : "Add New Profile"}</h2>
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
        <label>
          Bio:
          <textarea
            name="bio"
            value={formData.bio}
            onChange={handleChange}
            required
          />
        </label>
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
        <button type="button" onClick={(e) => handleSubmit(e)}>Save</button>
        <button type="button" onClick={onClose}>
          Cancel
        </button>
      </form>
    </div>
  );
};

export default Form;
