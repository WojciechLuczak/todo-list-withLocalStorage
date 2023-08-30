

const Section = ({title, sectionBody, extraContent}) => (
    <div className="section">
            {extraContent}
            <h2 className="section__title">{title}</h2>
            
            {sectionBody}
        </div>
);

export default Section;