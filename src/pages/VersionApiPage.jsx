import ApiDescriptionPage from "../components/ApiDescriptionPage/ApiDescriptionPage";
import RegisterForm from "../components/Forms/auth/RegisterForm";
import Hero from "../components/Hero/Hero";

function VersionApiPage() {
  return (
    <div>
      <Hero/>
      <ApiDescriptionPage/>
      <RegisterForm/>
      
    </div>
  );
}

export default VersionApiPage;
