import { useNavigate } from "react-router-dom";
import FacebookLogin from "react-facebook-login/dist/facebook-login-render-props";

function App() {
  const navigate = useNavigate();

  const responseFacebook = async (response) => {
    const user = await response;
    // console.log(user);
    if (!user.error) {
      navigate(`/input?name=${user.name}&pic=${user.picture.data.url}`);
    } else {
      navigate("/error");
    }
  };

  return (
    <>
      <div className='container'>
        <img src='/text-logo.png' className='text-logo' />
        <FacebookLogin
          appId='3382363622084694'
          fields='name,picture'
          // onClick={componentClicked}
          callback={responseFacebook}
          cssClass='start-btn'
          render={(renderProps) => (
            <button className='start-btn' onClick={renderProps.onClick}>
              Get Started
            </button>
          )}
        />
      </div>
    </>
  );
}

export default App;
