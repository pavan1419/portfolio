import Main from '../components/Main';

const Home = () => {
  const resumeUrl = 'https://drive.google.com/file/d/your-resume-file-id/view?usp=sharing';

  return (
    <Main
      name="Your Name"
      theme="light"
      resumeUrl={resumeUrl}
    />
  );
};

export default Home;
