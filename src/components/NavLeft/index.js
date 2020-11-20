import React from "react";
import { Menu } from 'antd';
import menuConfig from '../../config/menuConfig'
import './index.less'

const { SubMenu } = Menu;
class NavLeft extends React.Component {

  componentWillMount () {
    const menuTreeNode = this.renderMenuNode(menuConfig)
    this.setState({
      menuTreeNode
    })
  }

  // 渲染菜单
  renderMenuNode = data => {
    return data.map(item => {
      if (item.children) {
        return <SubMenu key={item.key} title={item.title}>
          {this.renderMenuNode(item.children)}
        </SubMenu>
      }
      return <Menu.Item key={item.key} title={item.title}>{item.title}</Menu.Item>
    })
  }
  render () {
    const style = {
      // backgroundColor: 'red'
    }
    return (
      <div style={style}>
        {/* logo */}
        <div className="logo">
          <img src="/assets/logo-ant.svg" alt=""></img>
          <h1>Imooc MS</h1>
        </div>
        {/* 菜单 */}
        <Menu style={{}}
          mode="vertical"
          theme="dark"
        >
          {this.state.menuTreeNode}
          {/* <Menu.Item key="0">Option 0</Menu.Item>
          <SubMenu key="sub1" title="Navigation One">

            <Menu.Item key="1">Option 1</Menu.Item>
            <Menu.Item key="2">Option 2</Menu.Item>

          </SubMenu> */}

        </Menu>
      </div>
    )
  }
}

export default NavLeft