import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { CompanyProfile } from '../../company';
import { getCompanyProfile } from '../../Components/api';
import Sidebar from '../../Components/Sidebar/Sidebar';
import CompanyDashboard from '../../Components/CompanyDashboard/CompanyDashboard';
import Tile from '../../Components/Tile/Tile';

interface Props { }

const CompanyPage = (props: Props) => {
  let { ticker } = useParams();
  const [company, setCompany] = useState<CompanyProfile>();
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string>("");

  useEffect(() => {
    const getProfileInit = async () => {
      try {
        setLoading(true);
        const result = await getCompanyProfile(ticker!);
        if (result?.data && result.data.length > 0) {
          setCompany(result.data[0]);
        } else {
          setError("No company data found");
        }
      } catch (err) {
        console.error("Error fetching company data:", err);
        setError("Error retrieving company data");
      } finally {
        setLoading(false);
      }
    }
    getProfileInit();
  }, [ticker]); // Add ticker to dependency array

  if (loading) return <div className="w-full p-10 flex justify-center">Loading company data...</div>;
  
  if (error || !company) return <div className="w-full p-10 flex justify-center text-red-500">{error || "Error: Could not retrieve company"}</div>;

  return (
    <div className="w-full relative flex overflow-x-hidden">
      <Sidebar />
      <CompanyDashboard>
        <Tile title='Company Name' subTitle={company.companyName} />
        <Tile title='Price' subTitle={`$${company.price}`} />
        <Tile title='Sector' subTitle={company.sector} />
        <Tile title='Market Cap' subTitle={`$${(company.marketCap / 1000000000).toFixed(2)}B`} />
      </CompanyDashboard>
    </div>
  );
}

export default CompanyPage;