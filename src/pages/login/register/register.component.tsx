import React from 'react';
import { Form, Input, Button, Typography, ConfigProvider, Row, Col } from 'antd';
import { UserOutlined, LockOutlined, MailOutlined, PhoneOutlined, ArrowRightOutlined } from '@ant-design/icons';
import { NavLink } from 'react-router-dom';
import { motion } from 'framer-motion';
import img from '../../../assets/image/icons/Sign up-bro.svg';
import { useSignUpMutation } from './action/register.mutation'; 

const { Title, Text } = Typography;

const RegisterComponent = () => {
  const [form] = Form.useForm();
  const { mutate, isPending } = useSignUpMutation();

  const onFinish = (values: any) => {
    const payload = {
      email: values.email,
      password: values.password,
      full_name: `${values.name} ${values.surname}`.trim(), 
      phone: values.phone
    };
    
    mutate(payload);
  };

  return (
    <div style={styles.pageWrapper}>
      <div style={styles.mainContainer}>
        <Row style={{ width: '100%', minHeight: '100%' }}>
          <Col xs={0} md={12} lg={14}>
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              style={styles.visualSide}
            >
              <div style={styles.videoOverlay} />
              <img style={styles.sideVideo} src={img} alt="Register visual" />
              <div style={styles.visualText}>
                <Title style={{ color: '#fff', fontSize: 'clamp(2rem, 5vw, 3.5rem)', marginBottom: 0 }}>HANDORA</Title>
                <Text style={{ color: 'rgba(255,255,255,0.8)', fontSize: '1.1rem' }}>
                  Ailəmizə qoşulun və idarəetməni asanlaşdırın.
                </Text>
              </div>
            </motion.div>
          </Col>

          <Col xs={24} md={12} lg={10} style={styles.formCol}>
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              style={styles.formContent}
            >
              <div style={{ marginBottom: '30px' }}>
                <Title level={2} style={{ fontWeight: 800, marginBottom: '8px' }}>Qeydiyyat</Title>
                <Text type="secondary">Hesabınızı yaratmaq üçün formanı doldurun.</Text>
              </div>

              <ConfigProvider theme={{ token: { colorPrimary: '#000', borderRadius: 12 } }}>
                <Form
                  form={form}
                  layout="vertical"
                  size="large"
                  onFinish={onFinish}
                  autoComplete="off"
                >
                  <Row gutter={16}>
                    <Col xs={24} sm={12}>
                      <Form.Item name="name" rules={[{ required: true, message: 'Adınızı daxil edin!' }]}>
                        <Input prefix={<UserOutlined />} placeholder="Ad" style={styles.modernInput} />
                      </Form.Item>
                    </Col>
                    <Col xs={24} sm={12}>
                      <Form.Item name="surname" rules={[{ required: true, message: 'Soyadınızı daxil edin!' }]}>
                        <Input placeholder="Soyad" style={styles.modernInput} />
                      </Form.Item>
                    </Col>
                  </Row>

                  <Form.Item name="email" rules={[{ type: 'email', message: 'Düzgün format deyil!' }, { required: true, message: 'Email daxil edin!' }]}>
                    <Input prefix={<MailOutlined />} placeholder="Email ünvanı" style={styles.modernInput} />
                  </Form.Item>

                  <Form.Item name="phone" rules={[{ required: true, message: 'Telefon nömrəsi daxil edin!' }]}>
                    <Input prefix={<PhoneOutlined />} placeholder="+994 50 000 00 00" style={styles.modernInput} />
                  </Form.Item>

                  <Form.Item name="password" rules={[{ required: true, message: 'Şifrə təyin edin!' }]}>
                    <Input.Password prefix={<LockOutlined />} placeholder="Şifrə" style={styles.modernInput} />
                  </Form.Item>

                  <Form.Item
                    name="confirm"
                    dependencies={['password']}
                    rules={[
                      { required: true, message: 'Şifrəni təsdiqləyin!' },
                      ({ getFieldValue }) => ({
                        validator(_, value) {
                          if (!value || getFieldValue('password') === value) return Promise.resolve();
                          return Promise.reject(new Error('Şifrələr eyni deyil!'));
                        },
                      }),
                    ]}
                  >
                    <Input.Password prefix={<LockOutlined />} placeholder="Şifrə təkrarı" style={styles.modernInput} />
                  </Form.Item>

                  <Button 
                    type="primary" 
                    htmlType="submit" 
                    block 
                    loading={isPending}
                    icon={!isPending && <ArrowRightOutlined />} 
                    style={styles.blackBtn}
                  >
                    {isPending ? 'Gözləyin...' : 'Qeydiyyatı tamamla'}
                  </Button>

                  <div style={{ textAlign: 'center', marginTop: '20px' }}>
                    <Text type="secondary">Artıq hesabınız var? </Text>
                    <NavLink to={'/login'} style={{ fontWeight: '700', color: '#000' }}>Daxil olun</NavLink>
                  </div>
                </Form>
              </ConfigProvider>
            </motion.div>
          </Col>
        </Row>
      </div>
    </div>
  );
};


const styles: { [key: string]: React.CSSProperties } = {
  pageWrapper: {
    minHeight: '100vh',
    display: 'flex',
    backgroundColor: '#f4f7fe',
    padding: 'clamp(10px, 3vw, 40px)', 
  },
  mainContainer: {
    display: 'flex',
    width: '100%',
    maxWidth: '1200px',
    margin: 'auto',
    backgroundColor: '#fff',
    borderRadius: '30px',
    overflow: 'hidden',
    boxShadow: '0 20px 40px rgba(0,0,0,0.05)',
  },
  visualSide: {
    height: '100%',
    position: 'relative',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'flex-end',
    padding: '60px',
    minHeight: '600px',
  },
  sideVideo: {
    position: 'absolute',
    top: 0, left: 0, width: '100%', height: '100%',
    objectFit: 'cover',
    zIndex: 1,
  },
  videoOverlay: {
    position: 'absolute',
    top: 0, left: 0, right: 0, bottom: 0,
    background: 'linear-gradient(to bottom, rgba(0,0,0,0.1), rgba(0,0,0,0.8))',
    zIndex: 2,
  },
  visualText: {
    position: 'relative',
    zIndex: 3,
  },
  formCol: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    padding: '40px 20px',
  },
  formContent: {
    width: '100%',
    maxWidth: '420px',
  },
  modernInput: {
    padding: '10px 16px',
    backgroundColor: '#f8fafc',
    border: '1px solid #e2e8f0',
  },
  blackBtn: {
    height: '50px',
    backgroundColor: '#000',
    border: 'none',
    fontSize: '16px',
    fontWeight: '600',
    marginTop: '10px'
  }
};

export default RegisterComponent;