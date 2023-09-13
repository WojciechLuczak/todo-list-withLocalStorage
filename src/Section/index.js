import "./index.css";
const Section = ({ title, sectionBody, extraContent }) => (
  <div className="section">
    <header className="section__row">
      <h2 className="section__title">{title}</h2>
      {extraContent}
    </header>
    {sectionBody}
  </div>
);
export default Section;
