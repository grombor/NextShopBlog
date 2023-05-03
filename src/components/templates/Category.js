import CategoryHeader from '../molecules/CategoryHeader';
import BestsellersSlider from '../molecules/Slider/BestsellersSlider';

function Category() {
  const socjalne = {
    header: {
      redText: 'meble',
      blackText: 'socjalne',
      subHeaderText: 'POZNAJ NAJMODNIEJSZE WYBORY NASZYCH KLIENTÓW',
      buttonTitle: 'POZNAJ KATEGORIĘ',
      buttonLink: '#',
      imageURL: 'https://via.placeholder.com/1920x440.png?text=1920x440px',
    },
    carousel: [
      {
        imageURL: 'https://via.placeholder.com/280x280.png?text=100x300px',
        content: 'Szafa',
        price: '',
        buttonTitle: 'POZNAJ KATEGORIĘ',
        buttonLink: '#',
      },
      {
        imageURL: 'https://via.placeholder.com/280x280.png?text=200x300px',
        content: 'Szafa aktowa',
        price: '',
        buttonTitle: 'POZNAJ KATEGORIĘ',
        buttonLink: '#',
      },
      {
        imageURL: 'https://via.placeholder.com/280x280.png?text=300x300px',
        content: 'Szafa aktowa SBM',
        price: '',
        buttonTitle: 'POZNAJ KATEGORIĘ',
        buttonLink: '#',
      },
      {
        imageURL: 'https://via.placeholder.com/280x280.png?text=400x300px',
        content: 'Szafa aktowa SBM 203',
        price: '',
        buttonTitle: 'POZNAJ KATEGORIĘ',
        buttonLink: '#',
      },
      {
        imageURL: 'https://via.placeholder.com/280x280.png?text=500x300px',
        content: 'Szafa aktowa SBM 203 M lx',
        price: '',
        buttonTitle: 'POZNAJ KATEGORIĘ',
        buttonLink: '#',
      },
    ],
  };
  const biurowe = {
    header: {
      redText: 'meble',
      blackText: 'biurowe',
      subHeaderText: 'POZNAJ NAJMODNIEJSZE WYBORY NASZYCH KLIENTÓW',
      buttonTitle: 'POZNAJ KATEGORIĘ',
      buttonLink: '#',
      imageURL: 'https://via.placeholder.com/1920x440.png?text=1920x440px',
    },
    carousel: [
      {
        imageURL: 'https://via.placeholder.com/280x280.png?text=100x300px',
        content: 'Szafa',
        price: '',
        buttonTitle: 'POZNAJ KATEGORIĘ',
        buttonLink: '#',
      },
      {
        imageURL: 'https://via.placeholder.com/280x280.png?text=200x300px',
        content: 'Szafa aktowa',
        price: '',
        buttonTitle: 'POZNAJ KATEGORIĘ',
        buttonLink: '#',
      },
      {
        imageURL: 'https://via.placeholder.com/280x280.png?text=300x300px',
        content: 'Szafa aktowa SBM',
        price: '',
        buttonTitle: 'POZNAJ KATEGORIĘ',
        buttonLink: '#',
      },
      {
        imageURL: 'https://via.placeholder.com/280x280.png?text=400x300px',
        content: 'Szafa aktowa SBM 203',
        price: '',
        buttonTitle: 'POZNAJ KATEGORIĘ',
        buttonLink: '#',
      },
      {
        imageURL: 'https://via.placeholder.com/280x280.png?text=500x300px',
        content: 'Szafa aktowa SBM 203 M lx',
        price: '',
        buttonTitle: 'POZNAJ KATEGORIĘ',
        buttonLink: '#',
      },
    ],
  };
  const medyczne = {
    header: {
      redText: 'meble',
      blackText: 'medyczne',
      subHeaderText: 'POZNAJ NAJMODNIEJSZE WYBORY NASZYCH KLIENTÓW',
      buttonTitle: 'POZNAJ KATEGORIĘ',
      buttonLink: '#',
      imageURL: 'https://via.placeholder.com/1920x440.png?text=1920x440px',
    },
    carousel: [
      {
        imageURL: 'https://via.placeholder.com/280x280.png?text=100x300px',
        content: 'Szafa',
        price: '',
        buttonTitle: 'POZNAJ KATEGORIĘ',
        buttonLink: '#',
      },
      {
        imageURL: 'https://via.placeholder.com/280x280.png?text=200x300px',
        content: 'Szafa aktowa',
        price: '',
        buttonTitle: 'POZNAJ KATEGORIĘ',
        buttonLink: '#',
      },
      {
        imageURL: 'https://via.placeholder.com/280x280.png?text=300x300px',
        content: 'Szafa aktowa SBM',
        price: '',
        buttonTitle: 'POZNAJ KATEGORIĘ',
        buttonLink: '#',
      },
      {
        imageURL: 'https://via.placeholder.com/280x280.png?text=400x300px',
        content: 'Szafa aktowa SBM 203',
        price: '',
        buttonTitle: 'POZNAJ KATEGORIĘ',
        buttonLink: '#',
      },
      {
        imageURL: 'https://via.placeholder.com/280x280.png?text=500x300px',
        content: 'Szafa aktowa SBM 203 M lx',
        price: '',
        buttonTitle: 'POZNAJ KATEGORIĘ',
        buttonLink: '#',
      },
    ],
  };
  const warsztatowe = {
    header: {
      redText: 'meble',
      blackText: 'warsztatowe',
      subHeaderText: 'POZNAJ NAJMODNIEJSZE WYBORY NASZYCH KLIENTÓW',
      buttonTitle: 'POZNAJ KATEGORIĘ',
      buttonLink: '#',
      imageURL: 'https://via.placeholder.com/1920x440.png?text=1920x440px',
    },
    carousel: [
      {
        imageURL: 'https://via.placeholder.com/280x280.png?text=100x300px',
        content: 'Szafa',
        price: '',
        buttonTitle: 'POZNAJ KATEGORIĘ',
        buttonLink: '#',
      },
      {
        imageURL: 'https://via.placeholder.com/280x280.png?text=200x300px',
        content: 'Szafa aktowa',
        price: '',
        buttonTitle: 'POZNAJ KATEGORIĘ',
        buttonLink: '#',
      },
      {
        imageURL: 'https://via.placeholder.com/280x280.png?text=300x300px',
        content: 'Szafa aktowa SBM',
        price: '',
        buttonTitle: 'POZNAJ KATEGORIĘ',
        buttonLink: '#',
      },
      {
        imageURL: 'https://via.placeholder.com/280x280.png?text=400x300px',
        content: 'Szafa aktowa SBM 203',
        price: '',
        buttonTitle: 'POZNAJ KATEGORIĘ',
        buttonLink: '#',
      },
      {
        imageURL: 'https://via.placeholder.com/280x280.png?text=500x300px',
        content: 'Szafa aktowa SBM 203 M lx',
        price: '',
        buttonTitle: 'POZNAJ KATEGORIĘ',
        buttonLink: '#',
      },
    ],
  };
  const szkolne = {
    header: {
      redText: 'meble',
      blackText: 'szkolne',
      subHeaderText: 'POZNAJ NAJMODNIEJSZE WYBORY NASZYCH KLIENTÓW',
      buttonTitle: 'POZNAJ KATEGORIĘ',
      buttonLink: '#',
      imageURL: 'https://via.placeholder.com/1920x440.png?text=1920x440px',
    },
    carousel: [
      {
        imageURL: 'https://via.placeholder.com/280x280.png?text=100x300px',
        content: 'Szafa',
        price: '',
        buttonTitle: 'POZNAJ KATEGORIĘ',
        buttonLink: '#',
      },
      {
        imageURL: 'https://via.placeholder.com/280x280.png?text=200x300px',
        content: 'Szafa aktowa',
        price: '',
        buttonTitle: 'POZNAJ KATEGORIĘ',
        buttonLink: '#',
      },
      {
        imageURL: 'https://via.placeholder.com/280x280.png?text=300x300px',
        content: 'Szafa aktowa SBM',
        price: '',
        buttonTitle: 'POZNAJ KATEGORIĘ',
        buttonLink: '#',
      },
      {
        imageURL: 'https://via.placeholder.com/280x280.png?text=400x300px',
        content: 'Szafa aktowa SBM 203',
        price: '',
        buttonTitle: 'POZNAJ KATEGORIĘ',
        buttonLink: '#',
      },
      {
        imageURL: 'https://via.placeholder.com/280x280.png?text=500x300px',
        content: 'Szafa aktowa SBM 203 M lx',
        price: '',
        buttonTitle: 'POZNAJ KATEGORIĘ',
        buttonLink: '#',
      },
    ],
  };
  const dodatkowe = {
    header: {
      redText: 'wyposażenie',
      blackText: 'dodatkowe i części zamienne',
      subHeaderText: 'POZNAJ NAJMODNIEJSZE WYBORY NASZYCH KLIENTÓW',
      buttonTitle: 'POZNAJ KATEGORIĘ',
      buttonLink: '#',
      imageURL: 'https://via.placeholder.com/1920x440.png?text=1920x440px',
    },
    carousel: [
      {
        imageURL: 'https://via.placeholder.com/280x280.png?text=100x300px',
        content: 'Szafa',
        price: '',
        buttonTitle: 'POZNAJ KATEGORIĘ',
        buttonLink: '#',
      },
      {
        imageURL: 'https://via.placeholder.com/280x280.png?text=200x300px',
        content: 'Szafa aktowa',
        price: '',
        buttonTitle: 'POZNAJ KATEGORIĘ',
        buttonLink: '#',
      },
      {
        imageURL: 'https://via.placeholder.com/280x280.png?text=300x300px',
        content: 'Szafa aktowa SBM',
        price: '',
        buttonTitle: 'POZNAJ KATEGORIĘ',
        buttonLink: '#',
      },
      {
        imageURL: 'https://via.placeholder.com/280x280.png?text=400x300px',
        content: 'Szafa aktowa SBM 203',
        price: '',
        buttonTitle: 'POZNAJ KATEGORIĘ',
        buttonLink: '#',
      },
      {
        imageURL: 'https://via.placeholder.com/280x280.png?text=500x300px',
        content: 'Szafa aktowa SBM 203 M lx',
        price: '',
        buttonTitle: 'POZNAJ KATEGORIĘ',
        buttonLink: '#',
      },
    ],
  };

  const categoryData = [socjalne, biurowe, warsztatowe, szkolne, dodatkowe];

  return (
    <>
      {categoryData.map((cat, index) => (
        <div key={`cat${index}`}>
          <CategoryHeader headerData={socjalne.header} key={`category${index}`} />
          <BestsellersSlider sliderData={socjalne.carousel} key={`bestsellers${index}`} />
        </div>
      ))}
    </>
  );
}

export default Category;
