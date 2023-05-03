import SideMenu from '../../molecules/Accordion/SideMenu';

function PanelTemplate({ data, children }) {
  return (
    <div className="columns my-6">
      <div className="column is-3 is-offset-1">
        <SideMenu data={data} />
      </div>
      <div className='column'>
        {children}
      </div>
    </div>
  );
}

export default PanelTemplate;
