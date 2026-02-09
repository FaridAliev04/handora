import { Input, Space } from 'antd';
import { useOfferStyle } from './offer.styles';

const { TextArea } = Input;

const OfferComponent = () => {
    const classes=useOfferStyle()
  return (
    <div className={`mx-auto max-w-7xl px-4 py-16 d-flex ${classes.main_div}`}>
      <div >
        <h1 className="text-3xl font-bold mb-10">Tekliflerinizi Qeyd edin</h1>
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Harum
          blanditiis fugiat aut eum eveniet velit iure nulla quas repudiandae
          odit. Esse necessitatibus voluptatibus atque quod. Lorem ipsum dolor
          sit amet consectetur, adipisicing elit. Quisquam, nulla.
        </p>
      </div>

      <div style={{ marginTop: '20px', maxWidth: '400px' }}>
        <Space direction="vertical" size="middle" style={{ display: 'flex' }}>
          <Input 
            type="email" 
            placeholder="Email ünvanınızı daxil edin" 
            size="large" 
          />
          <TextArea 
            rows={4} 
            placeholder="Təklifinizi bura yazın..." 
            maxLength={500} 
            showCount 
          />
        </Space>
      </div>
    </div>
  );
};

export default OfferComponent;