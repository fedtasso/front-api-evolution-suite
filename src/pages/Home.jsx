import ProjectDescription from "../components/ProjectDescription/ProjectDescription";
import Hero from "../components/Hero/Hero";
import VersionApiHome from "../components/VersionApiHome/VersionApiHome";

function Home() {
  return (
    <div>
      <Hero/>
      <ProjectDescription></ProjectDescription>
      <VersionApiHome></VersionApiHome>
    </div>
  );
}

export default Home
