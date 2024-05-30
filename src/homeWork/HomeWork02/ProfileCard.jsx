import './styles.css'

function ProfileCard() {
  const name = "Sebastian";
  const lastName = "Hollow";
  const career = "Front-end Developer";
  const hobby = ["Guitar", "Video games", "Hiking"]

  return (
    <div className="Profile-card">
      <img className='avatar' src="https://avatars.cloudflare.steamstatic.com/25b325d0a6b46ac6ce25e5e9bd416b7fd5f3cb65_full.jpg" alt='' ></img>
      <p>
       Name: {name} {lastName}
      </p>
      <p>Career: {career}</p>
      <p>Hobby's: {hobby[3]}</p>
    </div>
  );
}

export default ProfileCard;