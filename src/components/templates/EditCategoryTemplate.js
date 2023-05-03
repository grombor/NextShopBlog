import H1 from '../atoms/CMS/H1';
import ProfileLinks from '../molecules/ProfileLinks';
import Layout from './Layout';
import PanelTemplate from './PanelStrony/PanelTemplate';
import CategoryTable from '../molecules/CategoryTable';
import {Button} from '../atoms/Button';
import {useRouter} from 'next/router';

function NewCategoryTemplate({ data, label }) {
  const router = useRouter()

  return (
    <Layout>
      <div className="container">
        <div className="py-4">
          <ProfileLinks isActive="panel" />
          <PanelTemplate data={data}>
            <H1>Edytuj {label}</H1>
            <p className="mb-6">
              Przeciagnij kafelek, aby ustalić kolejność wyświetlania. Po
              kliknięciu w kafelek przeniesiesz się poziom niżej.
            </p>
            <div className='my-5'>
            <Button type='danger' onClick={() => {
              router.push('/cms/panelStrony/kategorie/nowa')
            }}>Stwórz {label}</Button>
            </div>
            <CategoryTable data={data.categories} label={label} />
          </PanelTemplate>
        </div>
      </div>
    </Layout>
  );
}

export default NewCategoryTemplate;
