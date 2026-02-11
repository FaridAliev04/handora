import { Input, Space, Button } from 'antd';
import { useOfferStyle } from './offer.styles';
import offer_img from '../../../../assets/image/statics/offer.jpg';

const { TextArea } = Input;

const OfferComponent = () => {
  const classes = useOfferStyle();

  return (
    <div className={`mx-auto max-w-7xl ${classes.main_div}`}>
      <h1>Təklif ve Iradlariniz ucun </h1>
      <div className={classes.image_wrapper}>
        <img src={offer_img} alt="Offer background" />
      </div>

      <div className={classes.form_container}>
        <h2 className={classes.title}>Bizə Təklif Yazın</h2>
        
        <Space direction="vertical" size="large" style={{ display: 'flex' }}>
          <Input 
            type="email" 
            placeholder="Email ünvanınız" 
            size="large"
            style={{ borderRadius: '8px' }}
          />
          <TextArea 
            rows={5} 
            placeholder="Təklifinizi bura yazın..." 
            maxLength={500} 
            showCount 
            style={{ borderRadius: '8px', resize: 'none' }}
          />
          <Button 
            type="primary" 
            size="large" 
            block
            style={{ 
              borderRadius: '8px', 
              height: '45px', 
              backgroundColor: '#333', 
              borderColor: '#333' 
            }}
          >
            Təklifi Göndər
          </Button>
        </Space>
      </div>
    </div>
  );
};

export default OfferComponent;