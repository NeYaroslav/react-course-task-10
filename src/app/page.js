import { Header } from "@/layout/header/Header";
import { ConnectedLogo } from "@/components/logo/Logo";
import { ConnectedDateTime } from "@/components/dateTime/DateTime";
import { Sidebar } from "@/layout/sidebar/Sidebar";
import { Content } from "@/components/content/Content";
import { ConnectedFactsList } from "@/components/factsList/FactsList";
import { Footer } from "@/layout/footer/Footer";
import { StoreProvider } from "@/components/storeProvider/StoreProvider";
import { Menu } from "@/components/menu/Menu";

export default function Home() {
  return (
    <div className="wrapper">
      <Header>
        <StoreProvider>
          <ConnectedLogo />
          <ConnectedDateTime />
        </StoreProvider>
      </Header>
      <div className="content-wrapper">
        <Sidebar>
          <Menu />
        </Sidebar>
        <Content>
          <StoreProvider>
            <ConnectedFactsList />
          </StoreProvider>
        </Content>
      </div>
      <Footer>
        <Menu />
      </Footer>
    </div>
  );
}
