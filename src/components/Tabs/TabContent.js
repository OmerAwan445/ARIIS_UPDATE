import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import './style.css'
function Tabscontent() {
  return (
    <Tabs
      defaultActiveKey="home"
      transition={false}
      id="noanim-tab-example"
      className="mb-3 tci"
    >
      <Tab eventKey="home" title="TCI Value">
      <div className='header d-flex align-items-baseline col-12 p-0'>
              <h6 className="mb-3">TRACK CONDITION INDEX</h6>
              <span className="tag">
                Above Thresholds
              </span>
            </div>
            <div className='counter'>
                <span className='count'>60</span>
            </div>
      </Tab>
      <Tab eventKey="profile" title="Contributing factors">
      
      </Tab>
      
    </Tabs>
  );
}

export default Tabscontent;