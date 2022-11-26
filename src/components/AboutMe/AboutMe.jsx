import './AboutMe.css'
import profilePicture from '../../picture.PNG'

export default function AboutMe() {
  return (
    <div className='AboutMeParent'>
      <div className='AboutMeCol'>
        <img src={profilePicture} alt="profile" className='ProfilePicture' />
      </div>
      <div className='AboutMeCol'>
        <div className='AboutMeContent'>
          <h1 className='AboutMeHeadingText'>About Me</h1>
          <p className='AboutMeText'>
            My name is Clay Grumieaux (GRU-me-oh). I'm a Front-end Developer located in Bloomington, IN. I love writing code and learning
            new things.  I am currently seeking work as a full time developer in Bloomington or on a remote basis.  Click below to download a copy of my resume.
          </p>
          <a target='_blank' href='https://drive.google.com/file/d/1dG7Gg-ClAgUPKp0rkkgPimxmrviB2owl/view?usp=share_link' className='ResumeButton' download='ClayGrumieauxResume.pdf'>Download Resume</a>
        </div>
      </div>
    </div>
  )
}