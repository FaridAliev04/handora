import React from 'react';
import { Form, Input, Button, Typography, message, ConfigProvider, Row, Col } from 'antd';
import { UserOutlined, LockOutlined, ArrowRightOutlined } from '@ant-design/icons';
import { NavLink, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { useSignInMutation } from './action/sign_in.mutation';
import img from '../../../assets/image/icons/Tablet login-bro.svg';

const { Title, Text } = Typography;

const SignInComponent = () => {
  const navigate = useNavigate();
  const { mutate, isPending } = useSignInMutation();

  const onFinish = (values: any) => {
    mutate(values, {
      onSuccess: (res) => {
        message.success('Giriş uğurla tamamlandı!');
        localStorage.setItem('token', res.access_token);
        navigate('/');
      },
      onError: () => message.error('Email və ya şifrə yanlışdır!'),
    });
  };

  return (
    <div style={styles.pageWrapper}>
      <div style={styles.mainContainer}>
        <Row style={{ width: '100%', minHeight: '100%' }}>
            <Col xs={0} md={12} lg={13}>
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              style={styles.visualSide}
            >
              <div style={styles.videoOverlay} />
              <img style={styles.sideVideo} src={img} alt="Login Visual" />
              <div style={styles.visualText}>
                <Title style={{ color: '#fff', fontSize: 'clamp(2rem, 4vw, 3rem)', marginBottom: 0 }}>HANDORA</Title>
                <Text style={{ color: 'rgba(255,255,255,0.8)', fontSize: '1.2rem' }}>
                  Gələcəyin Handora ile qur
                </Text>
              </div>
            </motion.div>
          </Col>

          <Col xs={24} md={12} lg={11} style={styles.formCol}>
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              style={styles.formContent}
            >
              <div style={{ marginBottom: '40px' }}>
                <Title level={2} style={{ fontWeight: 800, marginBottom: '8px' }}>Xoş Gəlmisiniz</Title>
                <Text type="secondary" style={{ fontSize: '16px' }}>
                  Davam etmək üçün məlumatlarınızı daxil edin.
                </Text>
              </div>

              <ConfigProvider theme={{ token: { colorPrimary: '#000', borderRadius: 12 } }}>
                <Form
                  name="login_form"
                  initialValues={{ remember: true }}
                  onFinish={onFinish}
                  layout="vertical"
                  size="large"
                >
                  <Form.Item
                    name="email"
                    rules={[{ type: 'email', message: 'Düzgün email formatı!' }, { required: true, message: 'Email daxil edin!' }]}
                  >
                    <Input prefix={<UserOutlined />} placeholder="Email ünvanı" style={styles.modernInput} />
                  </Form.Item>

                  <Form.Item
                    name="password"
                    rules={[{ required: true, message: 'Şifrə daxil edin!' }]}
                  >
                    <Input.Password prefix={<LockOutlined />} placeholder="Şifrə" style={styles.modernInput} />
                  </Form.Item>

                  <Form.Item>
                    <Button 
                      type="primary" 
                      htmlType="submit" 
                      block 
                      loading={isPending} 
                      icon={<ArrowRightOutlined />}
                      style={styles.blackBtn}
                    >
                      {isPending ? 'Giriş edilir...' : 'Daxil ol'}
                    </Button>
                  </Form.Item>

                  <div style={{ textAlign: 'center', marginTop: '24px' }}>
                    <Text type="secondary">Hesabınız yoxdur? </Text>
                    <NavLink to={'/register'} style={{ fontWeight: '700', color: '#000' }}>
                      Qeydiyyatdan keçin
                    </NavLink>
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
    backgroundColor: '#fff',
  },
  formContent: {
    width: '100%',
    maxWidth: '400px',
  },
  modernInput: {
    padding: '12px 16px',
    backgroundColor: '#f8fafc',
    border: '1px solid #e2e8f0',
  },
  blackBtn: {
    height: '54px',
    backgroundColor: '#000',
    border: 'none',
    fontSize: '16px',
    fontWeight: '600',
  }
};

export default SignInComponent;