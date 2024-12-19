import Button from "../Button/Button";

 const Profile = (props) => {
    console.log("props",props);
return(

    <div>
      <img src={`/images/${props.image}`} alt="Sun Conure" className="img-responsive" />
        <h2>{props.name}</h2>
        <p>{props.bio}</p>
        <Button link={props.link} />
               
    </div>
);
};
export default Profile;
