import styles from './Section.module.css';
import SectionContent from '../molecules/SectionContent';
import SectionImage from '../molecules/SectionImage';

function Section({ data, index }) {
  const leftSide = () => {
    return (
      <div className="container my-3">
        <div className={`${styles.section} columns`}>
          <div className="column is-7 is-hidden-touch">
            { data?.expectedImage ? (<SectionImage sectionImage={data?.expectedImage} />) : null }
          </div>
          <div className="column is-5 is-full-tablet is-full-mobile">
            <SectionContent data={data} />
          </div>
        </div>
      </div>
    );
  };

  const rightSide = () => {
    return (
      <div className={`${styles.section} columns`}>
        <div className="column is-5 is-full-tablet is-full-mobile">
          <SectionContent data={data} />
        </div>
        <div className="column is-7 is-hidden-touch">
        { data?.expectedImage ? (<SectionImage sectionImage={data?.expectedImage} />) : null }
        </div>
      </div>
    );
  };

  return <div>{index % 2 > 0 ? leftSide() : rightSide()}</div>;
}

export default Section;
