import React from 'react'
import { Tabs,  WhiteSpace, Icon } from 'antd-mobile'
import './Header.scss'

const tabs = [
  {key: 't1', title: <Icon type="search"/>},
  {key: 't2', title: 'tab1'},
  {key: 't3', title: 'tab2'},
  {key: 't4', title: 'tab3'}
]

class Header extends React.Component{
  render() {
    return (
      <div>
        <Tabs 
          tabs={tabs} 
          initialPage='t2'
          animated={false} 
          useOnPan={false}
          renderTabBar={(props) => <Tabs.DefaultTabBar
            {...props}
            renderUnderline={(ulProps) => {
              console.log(ulProps)
              const { style, ...otherProps } = ulProps;
              const ulStyle = {
                ...style,
                border: 'none',
              };
              return (
                <div style={ulStyle} {...otherProps}>
                  <div style={{
                    width: 50,
                    height: 2,
                    backgroundColor: 'red',
                    marginLeft: 'auto',
                    marginRight: 'auto',
                  }}></div>
                </div>
              );
            }}
          />}

        >
          <div key="t1" style={{display: 'none'}}></div>
          <div key="t2" style={{ 
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            height: '250px',
            backgroundColor: '#fff' }}>
            1
          </div>
          <div key="t3" style={{ 
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            height: '250px',
            backgroundColor: '#fff' }}>
            2
          </div>
          <div key="t4" style={{ 
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            height: '250px',
            backgroundColor: '#fff' }}>
            3
          </div>
        </Tabs>
      </div>
    )
  }
}

export default Header