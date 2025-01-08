
type ProfileProps = {
  id: number;
  name: string;
  image: string;
  bio: string;
  link: string;
  starred: boolean;
  deleteProfile: (id: number) => void;
  toggleStarred: (id: number) => void;
  onEdit: () => void; // Added proper type for onEdit
};

const Profile:React.FC<ProfileProps> = ({
  id,
  name,
  image,
  bio,
  link,
  starred,
  deleteProfile,
  toggleStarred,
  onEdit,
})  => {
  console.log(image)
  return (
  <div>
    <h3>{name}</h3>
    <img src={image} alt={name} style={{ width: "100px", height: "100px",}}/>
    <p>{bio}</p>
    <a href={link} target="_blank" rel="noopener noreferrer">
      Learn more
    </a>
    <button onClick={() => toggleStarred(id)}>
      {starred ? "Unstar" : "Star"}</button>
    <button onClick={() => deleteProfile(id)}>Delete</button>
    <button onClick={onEdit}>Edit</button>
  </div>
);
};

export default Profile;


