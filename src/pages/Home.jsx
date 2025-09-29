import ProjectDescription from "../components/ProjectDescription/ProjectDescription";
import Hero from "../components/Hero/Hero";
import VersionApiCard from "../components/VersionApiCard/VersionApiCard";

function Home() {
  return (
    <div>
      <Hero/>
      <ProjectDescription></ProjectDescription>
      <VersionApiCard></VersionApiCard>
    </div>
  );
}

export default Home
