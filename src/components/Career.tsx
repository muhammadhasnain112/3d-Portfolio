import "./styles/Career.css";

const Career = () => {
  return (
    <div className="career-section section-container">
      <div className="career-container">
        <h2>
          My career <span>&</span>
          <br /> experience
        </h2>
        <div className="career-info">
          <div className="career-timeline">
            <div className="career-dot"></div>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>SEO Learner</h4>
                <h5>SEO & Organic Growth</h5>
              </div>
              <h3>NOW</h3>
            </div>
            <p>
              Currently developing practical skills in Technical SEO, On-Page SEO, Keyword Research, Content Optimization, Search Console, and website optimization.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Web Development</h4>
                <h5>1+ Year</h5>
              </div>
              <h3>2025</h3>
            </div>
            <p>
              I’m continuously developing my web development skills by building responsive, user-friendly, and SEO-friendly websites. My focus is on creating clean interfaces, functional web experiences, and optimized website structures.
            </p>
          </div>
          
        </div>
      </div>
    </div>
  );
};

export default Career;
