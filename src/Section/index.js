import './index.css'

const Section = ({title, sectionBody, extraContent}) => (
    <div className="section">
           
            <h2 className="section__title">{title}</h2>
            {extraContent}
            {sectionBody}
        </div>
);

export default Section;