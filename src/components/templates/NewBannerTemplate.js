import H1 from '../atoms/CMS/H1';
import ProfileLinks from '../molecules/ProfileLinks';
import Layout from './Layout';
import PanelTemplate from './PanelStrony/PanelTemplate';
import {Button} from '../atoms/Button';

function NewBannerTemplate({ data, label }) {
  return (
    <Layout>
      <div className="container">
        <div className="py-4">
          <ProfileLinks isActive="panel" />
          <PanelTemplate data={data}>
            <H1>Dodaj {label}</H1>
            <p className="mb-6">
              Przeciagnij kafelek, aby ustalić kolejność wyświetlania. Po
              kliknięciu w kafelek przeniesiesz się poziom niżej.
            </p>

            <div className="field is-horizontal">
              <div className="field-label is-normal">
                <label className="label is-uppercase">Czerwony tytuł</label>
              </div>
              <div className="field-body">
                <div className="field">
                  <p className="control">
                    <input className="input" type="text" />
                  </p>
                </div>
              </div>
            </div>

            <div className="field is-horizontal">
              <div className="field-label is-normal">
                <label className="label is-uppercase">czarny tytuł</label>
              </div>
              <div className="field-body">
                <div className="field">
                  <p className="control">
                    <input className="input" type="text" />
                  </p>
                </div>
              </div>
            </div>

            <div className="field is-horizontal">
              <div className="field-label is-normal">
                <label className="label is-uppercase">Opis</label>
              </div>
              <div className="field-body">
                <div className="field">
                  <p className="control">
                    <input className="input" type="text" />
                  </p>
                </div>
              </div>
            </div>

            <div className="field is-horizontal">
              <div className="field-label is-normal">
                <label className="label is-uppercase">Zdjęcie</label>
              </div>
              <div className="field-body">
                <div className="field">
                  <p className="control">
                    <input className="input" type="file" accept="image/*" />
                  </p>
                </div>
              </div>
            </div>

            <progress className="progress is-primary my-6" max="100">
              15%
            </progress>

            <div className="has-text-centered mt-6">
              <Button type="danger">Wyślij</Button>
            </div>
          </PanelTemplate>
        </div>
      </div>
    </Layout>
  );
}

export default NewBannerTemplate;
