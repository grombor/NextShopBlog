import {Header} from '../atoms/Header';
import {Button} from '../atoms/Button';
import styles from './SectionContent.module.css';
import {useRouter} from 'next/router';

function SectionContent({ data }) {
  const router = useRouter();

  const handleButtonCLick = () => {
    router.push(data?.buttonURL);
  };

  const handleReadMore = () => {
    router.push(data?.buttonReadMoreURL);
  };

  return (
    <div>
      <span className={`${data?.headerJustify} ${styles.no_shadow}`}>
        <Header
          size="4"
          redText={data?.headerRed}
          blackText={data?.headerBlack}
          subHeaderSize="5"
          subHeaderText={data?.subHeader}
        />
        <p className="mx-1 is-size-5 is-size-6-mobile has-text-justified">
          {data?.content}
          <span>
            {data?.buttonReadMoreURL ? (
              <span>
                ...&nbsp;
              <a
                className="is-ghost is-uppercase has-text-weight-medium is-underlined"
                onClick={handleReadMore}
              >
                czytaj więcej
              </a>
              </span>
            ) : null}
          </span>
        </p>
      </span>

      {data?.buttonTitle ? (
        <div className="has-text-centered my-6">
          <Button onClick={handleButtonCLick} type="primary">
            {data?.buttonTitle}
          </Button>
        </div>
      ) : null}
    </div>
  );
}

export default SectionContent;
