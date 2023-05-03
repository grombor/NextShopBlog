import Image from 'next/image';
import {Header} from '../atoms/Header';

function PostTemplate({ postData }) {
  return (
    <div className="container my-6">
      <span className="has-text-centered">
        <Header
          size="1"
          redText={postData?.headerRed}
          blackText={postData?.headerBlack}
        />
      </span>
      <div className="content my-6 has-text-justified">
        <figure className="image">
          <Image
            src={postData?.expectedImage}
            width="1080"
            height="360"
            alt="banner"
          />
        </figure>
        <p className="my-6 content is-size-5">{postData?.content}</p>
      </div>
      {postData?.linkLabel ? <div className="has-text-centered my-6">
        <a href={postData?.linkFile} className='subtitle has-text-info is-underlined'>{postData.linkLabel} (brakuje etykiety dla łącza)</a>
      </div> : null}
    </div>
  );
}

export default PostTemplate;
