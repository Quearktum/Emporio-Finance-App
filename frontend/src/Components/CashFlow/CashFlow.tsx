import React, { useEffect, useState } from 'react'
import { CompanyCashFlow } from '../../company';
import { useOutletContext } from 'react-router';
import { getCashFlow } from '../api';
import Table from '../Table/Table';
import Spinner from '../Spinner/Spinner';
import { formatLargeMonetaryNumber } from '../Helpers/NumberFormatting';

type Props = {}

const config = [
    {
        label: "Date",
        render: (company: CompanyCashFlow) => formatLargeMonetaryNumber(company.date),
    },
    {
        label: "Operating Cashflow",
        render: (company: CompanyCashFlow) => formatLargeMonetaryNumber(company.operatingCashFlow),
    },
    {
        label: "Investing Cashflow",
        render: (company: CompanyCashFlow) =>
            formatLargeMonetaryNumber(company.netCashProvidedByInvestingActivities),
    },
    {
        label: "Financing Cashflow",
        render: (company: CompanyCashFlow) =>
            formatLargeMonetaryNumber(company.netCashProvidedByFinancingActivities),
    },
    {
        label: "Cash At End of Period",
        render: (company: CompanyCashFlow) => formatLargeMonetaryNumber(company.cashAtEndOfPeriod),
    },
    {
        label: "CapEX",
        render: (company: CompanyCashFlow) => formatLargeMonetaryNumber(company.capitalExpenditure),
    },
    {
        label: "Issuance Of Stock",
        render: (company: CompanyCashFlow) => formatLargeMonetaryNumber(company.commonStockIssued),
    },
    {
        label: "Free Cash Flow",
        render: (company: CompanyCashFlow) => formatLargeMonetaryNumber(company.freeCashFlow),
    },
];

const CashFlow = (props: Props) => {
    const ticker = useOutletContext<string>();
    const [cashFlow, setCashFlow] = useState<CompanyCashFlow[]>();

    useEffect(() => {
        const fetchCashFlow = async () => {
            const result = await getCashFlow(ticker!);
            setCashFlow(result?.data);
        }
        fetchCashFlow();
    }, []);

    return (
        <div>
            {cashFlow ? (
                <Table config={config} data={cashFlow} />
            ) : (<Spinner/>)}
        </div>
    )
}

export default CashFlow