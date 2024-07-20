import { useNavigate } from 'react-router-dom';
import '../Style/CalltoAtion.css'

const CallToAction = () => {
  const navigate = useNavigate();

  const handleSignUp = () => {
    navigate('/sign-up');
  };

  const handleLearnMore = () => {
    // Implement the logic to navigate to the "Learn More" page
  };

  return (
    <section className="call-to-action" style={{
      backgroundImage: `url('https://www.crossbeam.com/wp-content/uploads/2021/07/Blog-Post-111.gif')`,
      backgroundSize: 'cover',
      backgroundPosition: 'center'
    }}>
      <div className="container">
        <div className="cta-content">
          <h2 className="cta-title">Ready to take your sales team to the next level?</h2>
          <div className="cta-buttons">
            <button className="cta-button cta-button--primary" onClick={() => navigate('/sign Up')}>
              Sign Up for Free
            </button>
            <button className="cta-button cta-button--secondary" onClick={() => navigate('/Try it Free')}>
              Learn More
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CallToAction;