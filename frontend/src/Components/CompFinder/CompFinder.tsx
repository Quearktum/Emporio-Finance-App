import React, { useEffect, useState } from 'react'
import { CompanyCompData } from '../../company';
import { getCompData } from '../api';
import CompFinderItem from './CompFinderItem/CompFinderItem';

type Props = {
    ticker:string;
}

const CompFinder = ({ticker}: Props) => {
    const [companyData, setCompanyData] = useState<CompanyCompData[]>();
    useEffect(() => {
        const getComp = async () => {
            const value = await getCompData(ticker);
            setCompanyData(value?.data);
        }
        getComp();
    }, [ticker]);

  return (
    <div className='inline-flex round-md shadow-sm m-4'>
        {companyData?.map((company:CompanyCompData) => {
            return <CompFinderItem ticker={company.symbol}/>
        })}
    </div>
  )
}

export default CompFinder