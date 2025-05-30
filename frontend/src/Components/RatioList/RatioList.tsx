import React from 'react'
import { TestDataCompany } from '../Table/testData'
import { compileFunction } from 'vm';

type Props = {
    config: any;
    data: any;
}


const RatioList = ({config, data}: Props) => {
    const renderedRow = config.map((row: any) => {
        return (
            <div className='py-3 sm:py-4'>
                <div className='flex items-center space-x-4'>
                    <div className='flex-1 min-w-0'>
                        <p className='text-sm font-medium text-gray-900 truncate'>
                            {row.label}
                        </p>
                        <p className='text-sm text-gray-500 truncate'>
                            {row.subTitle && row.subTitle}
                        </p>
                    </div>
                    <div className="inline-flex items-center text-base font-semibold text-gray-900">
                        {row.render(data)}
                    </div>
                </div>
            </div>
        )
    })
    return (
        <div>
            <div className="bg-white shadow rounded-lg ml-4 mt-4 mb-4 p-4 sm:p-6 h-full">
                <div className="divide-y divide-gray-200">
                    {renderedRow}
                </div>
            </div>
        </div>
    )
}

export default RatioList