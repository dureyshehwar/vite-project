
type ProfileProps = {
  id: number;
  name: string;
  image: string;
  bio: string;
  link: string;
  starred: boolean;
  deleteProfile: (id: number) => void;
  toggleStarred: (id: number) => void;
};

const Profile: React.FC<ProfileProps> = (props) => {
  return (
    <div>
      <img
        src={`/images/${props.image}`}
        alt={props.name}
        className="img-responsive"
      />
      <h2>{props.name}</h2>
      <p>{props.bio}</p>
      <button onClick={() => props.toggleStarred(props.id)}>
        {props.starred ? "Unstar" : "Star"}
      </button>
      <button onClick={() => props.deleteProfile(props.id)}>Delete</button>
    </div>
  );
};

export default Profile;

