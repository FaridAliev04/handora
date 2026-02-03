import React, { use } from 'react'
import { Input, Badge, Dropdown, Avatar } from 'antd'
import {
  SearchOutlined,
  ShoppingCartOutlined,
  UserOutlined,
  LogoutOutlined
} from "@ant-design/icons"
import hand from '../../../../../assets/image/icons/hand.svg'
import { useNavStyles } from './nav.style'

const NavComponet = () => {

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
        localStorage.removeItem("token")
        window.location.href = "/login"
      }
    }
  ]

  const classes=useNavStyles()

  return (
    <div className={classes.nav_mainDiv}>
 <nav className={`mx-auto max-w-2xl px-4 py-4 sm:px-6 lg:max-w-7xl lg:px-8 ${classes.nav}`}>
      <div className='logo_div'>
        <img className={classes.handora_logo} src={hand} alt="logo" />
      </div>

      <div className={classes.search_div}>
        <Input style={{ padding:"0.7rem", borderRadius:"20px" }} placeholder="Axtar" suffix={<SearchOutlined />} />
      </div>

      <div className={classes.person}>
        <div className="badge">
          <Badge count={3}>
            <ShoppingCartOutlined style={{ fontSize: 24 ,cursor: "pointer" }} />
          </Badge>
        </div>

        <div className='profil'>
          <Dropdown menu={{ items }} placement="bottomRight">
           <Avatar
  icon={<UserOutlined />}
  style={{
    background: "#fff",
    color: "#000",
    border: "1px solid #e5e5e5"
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


