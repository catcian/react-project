import React from "react";
import {
  Row,
  Col
} from "antd";
import Utils from '../../utils/utils'
import axios from '../../axios'
import './index.less'

class Header extends React.Component {

  state = {}

  componentWillMount () {
    this.setState({
      userName: '河畔一角'
    })
    // 定义公共机制
    setInterval(() => {
      const sysTime = Utils.formateDate(new Date().getTime())
      this.setState({
        sysTime
      })
    }, 1000);
  }

  componentDidMount () {
    this.getWeatherAPIData()
  }

  getWeatherAPIData () {
    const city = '深圳'
    // 对中文编码
    axios.jsonp({
      url: `http://api.map.baidu.com/telematics/v3/weather?location=${encodeURIComponent(city)}&output=json&ak=ohA7QHfg0BBrpiY4kyuIAAsD`
    }).then(res => {
      const weatherData = res[0].weather_data[0]
      // debugger
      this.setState({
        dayPictureUrl: weatherData.dayPictureUrl,
        weather: weatherData.weather
      })
    })
  }

  render () {

    return (
      <div className="header">
        {/* 上部分 */}
        <Row className="header-top">
          <Col span="24">
            <span>欢迎，{this.state.userName}</span>
            <a href="#">退出</a>
          </Col>
        </Row>
        <Row className="breadcrumb">
          {/* 面包屑 */}
          <Col span="4" className="breadcrumb-title">
            首页
          </Col>
          <Col span="20" className="weather">
            <span className="date">{this.state.sysTime}</span>
            <span className="weather-img">
              <img src={this.state.dayPictureUrl} alt=""></img>
            </span>
            <span className="weather-detail">
              {this.state.weather}
            </span>
          </Col>
        </Row>
      </div>
    )
  }
}

export default Header