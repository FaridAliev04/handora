
import  { useState, useEffect } from 'react'
import { Input, Badge, Dropdown, Avatar, List, Spin } from 'antd'
import {
  SearchOutlined,
  ShoppingCartOutlined,
  UserOutlined,
  LogoutOutlined
} from "@ant-design/icons"
import hand from '../../../../../assets/image/icons/Group 1 (2).svg'
import { useNavStyles } from './nav.style'
import { useSearch } from './action/nav.query'

const NavComponet = () => {
  const classes = useNavStyles();
  const [searchTerm, setSearchTerm] = useState("");
  const [debouncedValue, setDebouncedValue] = useState("");

  useEffect(() => {
    const handler = setTimeout(() => {
      setDebouncedValue(searchTerm);
    }, 500);

    return () => {
      clearTimeout(handler);
    };
  }, [searchTerm]);

  const { data, isLoading } = useSearch(debouncedValue);

  const items = [
    {
      key: "profile",
      label: "Profil",
      icon: <UserOutlined />,
    },
    {
      key: "logout",
      label: "Çıxış",
      icon: <LogoutOutlined />,
      danger: true,
      onClick: () => {
        localStorage.removeItem("token");
        window.location.href = "/login";
      }
    }
  ];

  const renderSearchResults = () => {
    if (!searchTerm || searchTerm.length < 2) return null;

    return (
      <div style={{
        position: 'absolute',
        top: '100%',
        left: 0,
        right: 0,
        backgroundColor: 'white',
        boxShadow: '0 4px 12px rgba(0,0,0,0.1)',
        borderRadius: '8px',
        marginTop: '8px',
        zIndex: 1000,
        maxHeight: '300px',
        overflowY: 'auto',
        padding: '10px'
      }}>
        {isLoading ? (
          <div style={{ textAlign: 'center', padding: '20px' }}><Spin size="small" /></div>
        ) : (
          <List
  dataSource={data || []}
  locale={{ emptyText: 'Nəticə tapılmadı' }}
  renderItem={(item:any) => (
    <List.Item
      key={item.id}
      style={{ 
        cursor: 'pointer', 
        padding: '12px',
        transition: 'background 0.3s',
      }}
      className="search-item-hover" 
      onClick={() => {
        console.log("Seçildi:", item);
      }}
    >
      <List.Item.Meta
        avatar={
          <Avatar 
            src={item.image_urls && item.image_urls[0]} 
            shape="square" 
            size={48}
            alt={item.name_az}
          />
        }
        title={
          <div style={{ fontWeight: '600' }}>
            {item.name_az}
          </div>
        }
        description={
          <div>
            <span style={{ color: '#fa541c', fontWeight: 'bold' }}>
              {item.price} AZN
            </span>
            {item.discount_price > 0 && (
              <span style={{ textDecoration: 'line-through', marginLeft: '8px', fontSize: '12px', color: '#bfbfbf' }}>
                {(item.price + item.discount_price).toFixed(2)} AZN
              </span>
            )}
            <div style={{ fontSize: '11px', color: '#8c8c8c' }}>
              Brend: {item.brand?.name}
            </div>
          </div>
        }
      />
    </List.Item>
  )}
/>
        )}
      </div>
    );
  };

  return (
    <div className={classes.nav_mainDiv}>
      <nav className={`mx-auto max-w-2xl px-4 py-4 sm:px-6 lg:max-w-7xl lg:px-8 ${classes.nav}`}>
        <div className='logo_div'>
          <img className={classes.handora_logo} src={hand} alt="logo" />
        </div>

        <div className={classes.search_div} style={{ position: 'relative' }}>
          <Input 
            style={{ padding: "0.7rem", borderRadius: "20px" }} 
            placeholder="Məhsul axtar..." 
            suffix={<SearchOutlined />} 
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          {renderSearchResults()}
        </div>

        <div className={classes.person}>
          <div className="badge">
            <Badge count={3}>
              <ShoppingCartOutlined style={{ fontSize: 24, cursor: "pointer" }} />
            </Badge>
          </div>

          <div className='profil'>
            <Dropdown menu={{ items }} placement="bottomRight">
              <Avatar
                icon={<UserOutlined />}
                style={{
                  background: "#fff",
                  color: "#000",
                  border: "1px solid #e5e5e5",
                  cursor: "pointer"
                }}
              />
            </Dropdown>
          </div>
        </div>
      </nav>
    </div>
  )
}

export default NavComponet