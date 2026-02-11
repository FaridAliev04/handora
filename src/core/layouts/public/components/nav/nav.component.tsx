import { useState, useEffect } from 'react'
import { Input, Badge, Dropdown, Avatar, List, Spin, Button } from 'antd'
import {
  SearchOutlined,
  ShoppingCartOutlined,
  UserOutlined,
  LogoutOutlined,
  LoginOutlined,
  SettingOutlined
} from "@ant-design/icons"
import hand from '../../../../../assets/image/icons/Group 1 (2).svg'
import { useNavStyles } from './nav.style'
import { useSearch, useUser } from './action/nav.query'
import { useNavigate } from 'react-router-dom'; 

const NavComponet = () => {
  const classes = useNavStyles();
  const navigate = useNavigate(); 
  const [searchTerm, setSearchTerm] = useState("");
  const [debouncedValue, setDebouncedValue] = useState("");
  const [isLoggedIn, setIsLoggedIn] = useState(false); 

  const { data:user_data }=useUser()

  const { data:data, isLoading } = useSearch(debouncedValue);

  useEffect(() => {
    const token = localStorage.getItem("token");
    setIsLoggedIn(!!token);

    const handler = setTimeout(() => {
      setDebouncedValue(searchTerm);
    }, 500);

    return () => {
      clearTimeout(handler);
    };
  }, [searchTerm, navigate]);

  const handleLogout = () => {
    localStorage.removeItem("token");
    setIsLoggedIn(false);
    window.location.href = "/login";
  };

  const logoClick=()=>{
    navigate('/')
  }

  const items = [
    {
      key: "profile",
      label: "Profil",
      icon: <UserOutlined />,
    },
    ...(user_data?.email === "farid@gmail.com" ? [{
      key: "admin",
      label: "Admin Panel",
      icon: <SettingOutlined />,
      onClick: () => navigate("/admin")
    }] : []),
    {
      key: "logout",
      label: "Çıxış",
      icon: <LogoutOutlined />,
      danger: true,
      onClick: handleLogout
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
            renderItem={(item: any) => (
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
      <nav className={`mx-auto max-w-7xl px-4 py-8 d-flex ${classes.nav}`}>
        <div className='logo_div'>
          <img onClick={logoClick} className={classes.handora_logo} src={hand} alt="logo" />
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

        <div className={classes.person} style={{ display: 'flex', alignItems: 'center', gap: '20px' }}>
          <div className="badge">
            <Badge count={3}>
              <ShoppingCartOutlined style={{ fontSize: 24, cursor: "pointer" }} />
            </Badge>
          </div>

          <div className='auth-section'>
            {isLoggedIn ? (
              <Dropdown menu={{ items }} placement="bottomRight" arrow>
                <Button 
                  type="default" 
                  shape="round" 
                  icon={<UserOutlined style={{ color: '#000' }} />} 
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    fontWeight: '600',
                    color: '#000',
                    padding: '0 20px',
                    height: '40px',
                    background: 'rgba(255, 255, 255, 0.4)', 
                    backdropFilter: 'blur(10px)', 
                    WebkitBackdropFilter: 'blur(10px)', 
                    border: '1px solid rgba(255, 255, 255, 0.3)', 
                    boxShadow: '0 4px 6px rgba(0, 0, 0, 0.05)',               
                    transition: 'all 0.3s ease',
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.background = 'rgba(255, 255, 255, 0.7)';
                    e.currentTarget.style.boxShadow = '0 6px 12px rgba(0, 0, 0, 0.1)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.background = 'rgba(255, 255, 255, 0.4)';
                    e.currentTarget.style.boxShadow = '0 4px 6px rgba(0, 0, 0, 0.05)';
                  }}
                >
                  {user_data?.full_name}
                </Button>
              </Dropdown>
            ) : (
              <Button 
                type="default" 
                shape="round" 
                icon={<LoginOutlined style={{ color: '#000' }} />} 
                onClick={() => navigate("/login")}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  fontWeight: '600',
                  color: '#000',
                  padding: '0 20px',
                  height: '40px',
                  background: 'rgba(255, 255, 255, 0.4)', 
                  backdropFilter: 'blur(10px)', 
                  WebkitBackdropFilter: 'blur(10px)', 
                  border: '1px solid rgba(255, 255, 255, 0.3)', 
                  boxShadow: '0 4px 6px rgba(0, 0, 0, 0.05)',               
                  transition: 'all 0.3s ease',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.background = 'rgba(255, 255, 255, 0.7)';
                  e.currentTarget.style.boxShadow = '0 6px 12px rgba(0, 0, 0, 0.1)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.background = 'rgba(255, 255, 255, 0.4)';
                  e.currentTarget.style.boxShadow = '0 4px 6px rgba(0, 0, 0, 0.05)';
                }}
              >
                Giriş
              </Button>
            )}
          </div>
        </div>
      </nav>
    </div>
  )
}

export default NavComponet