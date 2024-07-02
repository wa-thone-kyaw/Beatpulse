import React from "react";
import MainSection from "@/components/MainSection";
import Header from "@/components/Header";

const HomePage: React.FC = () => {
  return (
    <div>
      <main>
        {
          <div>
            <Header />
            <MainSection />
          </div>
        }
      </main>
    </div>
  );
};

export default HomePage;
