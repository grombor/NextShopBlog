import {Button} from '../atoms/Button';
import {Header} from '../atoms/Header';
import HeaderWithButton from '../molecules/HeaderWithButton';
import BestsellerSlider from '../molecules/Slider/BestsellersSlider';
import FeaturesSlider from '../molecules/FeaturesSlider';

function FurnitureFamily({headerData, sliderData}) {
    const handleClick = () => {
        console.log(familyData?.buttonURL)
    };
  return (
    <div>
        <HeaderWithButton>
          <Header
            size="2"
            redText={headerData?.redText}
            blackText={headerData?.blackText}
            subHeaderSize="4"
            subHeaderText={headerData?.subHeaderText}
          />
          <span className={styles.button}>
            <Button type="danger" onClick={handleClick}>{headerData?.buttonTitle}</Button>
          </span>
        </HeaderWithButton>
        <FeaturesSlider />
        <BestsellerSlider sliderData={sliderData} />
    </div>
  )
}

export default FurnitureFamily