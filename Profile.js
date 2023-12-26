import img from './img.jpg'
const Profile=()=>{
    const person={
        name:'Ahmed',
        email:'ahmed@gmail.com',
        age:34
      }

    return(
    <>
<img src={img} alt='imageee' style={{width:'200px'}} />
<p style={{fontSize:'20px'}}>{person.name}</p>
<p>{person.email}</p>
<p>{person.age}</p>
    </>
    )
}
export default Profile
 
