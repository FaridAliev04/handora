import { MenuOutlined } from '@ant-design/icons';
import React, { Children } from 'react';
import type { MenuProps } from 'antd';
import { Col, ConfigProvider, Flex, Menu, Row, Space, Typography } from 'antd';
import { createStyles } from 'antd-style';
import fonts from '../../../../../assets/styles/abstracts/fonts';

const { Title, Paragraph } = Typography;

const useStyles = createStyles(({ token }) => ({
  main_div:{
    // ul:{
    //   li:{
    //     marginLeft:"1.5rem !important",
    //   }
    // }
  },

  navigationPopup: {
    padding: token.padding,
    minWidth: 480,
    background: token.colorBgElevated, 
    borderRadius: token.borderRadiusLG,
    boxShadow: token.boxShadowSecondary,
  },
  menuItem: {
    borderRadius: token.borderRadius,
    transition: `all ${token.motionDurationSlow}`,
    cursor: 'pointer',
    '&:hover': {
      background: 'rgba(0, 0, 0, 0.02)',
    },
  },
  menuItemSpace: {
    padding: token.paddingSM,
    rowGap: 81,
  },
  leadingHeader: {
    margin: '0 !important',
    paddingBottom: token.paddingXS,
    borderBottom: `1px solid ${token.colorSplit}`,
    
  },
  marginLess: {
    margin: '0 !important',  },
}));

const MenuItem = ({ title, description }: { title: string; description: any }) => {
  const { styles } = useStyles();
  return (
    <div className={styles.menuItem}>
      <Space vertical size={4} className={styles.menuItemSpace}>
        <Title level={5} className={styles.marginLess}>
          {title}
        </Title>
        <Paragraph type="secondary" className={styles.marginLess}>
          {description}
        </Paragraph>
      </Space>
    </div>
  );
};

const menuItems = [
  {
    key: 'logo',
    label: <MenuOutlined style={{fontSize:"1.6rem" , cursor:"pointer",}}/>, 
    children:[
        {
            key: 'kisii',
            label: <MenuItem title="Kişi" /> ,
            children: [
              { key: 'kisi-ayaqqabi1', label: <MenuItem title="Ayaqqabı" description="Kişi ayaqqabıları." /> },
              { key: 'kisi-koynek1', label: <MenuItem title="Köynək" description="Kişi köynəkləri." /> },
              { key: 'kisi-salvar1', label: <MenuItem title="Şalvar" description="Kişi şalvarları." /> },
          ],
            
        },
        {
            key: 'qadinn',
            label: <MenuItem title="Qadın"/> ,
            children: [
              { key: 'kisi-ayaqqabi1', label: <MenuItem title="Ayaqqabı" description="Kişi ayaqqabıları." /> },
              { key: 'kisi-koynek1', label: <MenuItem title="Köynək" description="Kişi köynəkləri." /> },
              { key: 'kisi-salvar1', label: <MenuItem title="Şalvar" description="Kişi şalvarları." /> },
          ],
            
        },
        {
            key: 'usaqq',
            label: <MenuItem title="Uşaq"/> ,
            children: [
              { key: 'kisi-ayaqqabi1', label: <MenuItem title="Ayaqqabı" description="Kişi ayaqqabıları." /> },
              { key: 'kisi-koynek1', label: <MenuItem title="Köynək" description="Kişi köynəkləri." /> },
              { key: 'kisi-salvar1', label: <MenuItem title="Şalvar" description="Kişi şalvarları." /> },
          ],
            
        },
          {
            key: 'aksesuarr',
            label: <MenuItem title="Aksesuar"/> ,
            children: [
              { key: 'kisi-ayaqqabi1', label: <MenuItem title="Ayaqqabı" description="Kişi ayaqqabıları." /> },
              { key: 'kisi-koynek1', label: <MenuItem title="Köynək" description="Kişi köynəkləri." /> },
              { key: 'kisi-salvar1', label: <MenuItem title="Şalvar" description="Kişi şalvarları." /> },
          ],
            
        }
        
    ]
  },
  {
    key: 'kisi',
    label: 'Kişi',
    children: [
      { key: 'kisi-ayaqqabi', label: <MenuItem title="Ayaqqabı" description="Kişi ayaqqabıları." /> },
      { key: 'kisi-koynek', label: <MenuItem title="Köynək" description="Kişi köynəkləri." /> },
      { key: 'kisi-salvar', label: <MenuItem title="Şalvar" description="Kişi şalvarları." /> },
    ],
  },
  {
    key: 'qadin',
    label: 'Qadın',
    children: [
      { key: 'qadin-ayaqqabi', label: <MenuItem title="Ayaqqabı" description="Qadın ayaqqabıları." /> },
      { key: 'qadin-koynek', label: <MenuItem title="Köynək" description="Qadın köynəkləri." /> },
      { key: 'qadin-salvar', label: <MenuItem title="Şalvar" description="Qadın şalvarları." /> },
    ],
  },
  {
    key: 'usaq',
    label: 'Uşaq',
    children: [
      { key: 'usaq-koynek', label: <MenuItem title="Köynək" description="Uşaq köynəkləri." /> },
      { key: 'usaq-ayaqqabi', label: <MenuItem title="Ayaqqabı" description="Uşaq ayaqqabıları." /> },
      { key: 'usaq-oyuncaq', label: <MenuItem title="Oyuncaqlar" description="Uşaqlar üçün oyuncaqlar." /> },
    ],
  },
  {
    key: 'aksesuar',
    label: 'Aksesuar',
    children: [
      { key: 'aksesuar-saat', label: <MenuItem title="Saat" description="Fərqli aksesuarlar." /> },
      { key: 'aksesuar-canta', label: <MenuItem title="Çanta" description="Çantalar və digər aksesuarlar." /> },
    ],
  },
];

const App: React.FC = () => {
  const { styles } = useStyles();
  const popupRender: MenuProps['popupRender'] = (_, { item }) => {
    return (
      <Flex className={styles.navigationPopup} vertical gap="middle">
        <Typography.Title level={3} className={styles.leadingHeader}>
          {item.title}
        </Typography.Title>
        <Row gutter={16}>
          {React.Children.map(item.children as React.ReactNode, (child) => {
            if (!React.isValidElement(child)) {
              return null;
            }
            return (
              <Col span={12} key={child.key}>
                {child}
              </Col>
            );
          })}
        </Row>

      </Flex>
    );
  };

  return (
    <div className={`${styles.main_div}`}>
      <div className='mx-auto max-w-7xl px-4 py-0 d-flex '>
        <ConfigProvider
              theme={{
                components: {
                  Menu: {
                    popupBg: '#fff',
                    horizontalItemSelectedColor: '#1677ff',
                    horizontalItemHoverColor: '#1677ff',
                  },
                  Typography: {
                    titleMarginBottom: 0,
                    titleMarginTop: 0,
                  },
                },
              }}
            >
              <Menu mode="horizontal" items={menuItems} popupRender={popupRender} />
            </ConfigProvider>
      </div>
    
    </div>
    

  );
};

export default App;

