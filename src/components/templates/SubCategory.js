import SubCategoryHeader from '../molecules/SubCategoryHeader';
import ItemSlider from '../molecules/Slider/ItemSlider';

function Category({ subCategoryData }) {
  return (
    <div className='container' id={subCategoryData.header.headerRed+subCategoryData.header.headerBlack}>
      <SubCategoryHeader headerData={subCategoryData.header} />
      <ItemSlider sliderData={subCategoryData.subdistributions} />
    </div>
  );
}

export default Category;
