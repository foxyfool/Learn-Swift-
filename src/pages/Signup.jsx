import signupImg from "../assets/Images/snup.jpg";
import Template from "../components/core/Auth/Template";

function Signup() {
  return (
    <Template
      title="Join The Community Today !"
      description1="Build skills for today, tomorrow, and beyond."
      description2="Education to future-proof your career."
      image={signupImg}
      formType="signup"
    />
  );
}

export default Signup;
