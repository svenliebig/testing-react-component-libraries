import { SearchOutlined } from '@ant-design/icons';
import { Breadcrumb, Layout, Menu, theme } from 'antd';
import { createElement, useState } from 'react';

const { Header, Sider, Content } = Layout;

const headermenu = [
	{ key: "page", label: "Animals" },
	{ key: "search", label: "Search" },
	{ key: "help", label: "Help" },
]

const sidebarmenu = [{ key: "search", icon: createElement(SearchOutlined), label: "Search" }]

function App() {
	const [collapsed, setCollapsed] = useState(true);
	const {
    token: { colorBgContainer },
  } = theme.useToken();

  return (
		<Layout style={{ minHeight: '100vh'}}>
      <Header style={{ display: 'flex', alignItems: 'center', paddingInline: collapsed ? 80 : 200, transition: "padding-inline 0.2s" }}>
        <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['1']} items={headermenu} />
      </Header>
        <Layout>
          <Sider theme='dark' style={{ paddingTop: 4 }} width={200} collapsible collapsed={collapsed} onCollapse={(value) => setCollapsed(value)}>
            <Menu
              mode="inline"
							theme="dark"
              style={{ height: '100%' }}
							selectable={false}

              items={sidebarmenu}
							onClick={(e) => console.log(e)}
            />
          </Sider>
        <Layout style={{ padding: "0 24px 24px" }}>
						<Breadcrumb style={{ margin: '16px 0' }} >
							<Breadcrumb.Item href='/Animals' onClick={(e) => {
								e.preventDefault();
								// use navigation here
							}}>Animals</Breadcrumb.Item>
							<Breadcrumb.Item>Dogs</Breadcrumb.Item>
						</Breadcrumb>
						<Content style={{ padding: 24, minHeight: 280, background: colorBgContainer }}>
							asdasf
						</Content>
					</Layout>
        </Layout>
    </Layout>
  )
}

export default App
