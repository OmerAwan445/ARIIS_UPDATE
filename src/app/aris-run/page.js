'use client';

import { AriisRunSectionIds, AriisRunTableData } from '@/DummyData'
import ArisRunModal from '@/components/Modal/ArisRunModal'
import Image from 'next/image'
import { useState } from 'react';


const ArisRunPage = () => {
    const [isShowArisRunIdModal, setIsShowArisRunIdModal] = useState(true);
    return (
        <div className='main-panel'>
            <Image src="/DummyData/Images/dummy-map.png" width={1000} height={1000} className='w-100 h-100' />
            <ArisRunModal
                show={isShowArisRunIdModal}
                tableData={AriisRunTableData}
                handleClose={() => setIsShowArisRunIdModal(false)}
                AriisRunSectionIds={AriisRunSectionIds}
            />
        </div>
    )
}

export default ArisRunPage
