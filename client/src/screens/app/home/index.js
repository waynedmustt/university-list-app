import React, { useEffect, useState } from 'react';
import NewsLetter from '../../../components/newsletter';
import UnivCard from '../../../components/univ-card';
import { coreService } from '../../../core/service';

const Home = () => {
    const [univList, setUnivList] = useState([]);
    useEffect(() => {
        const favUniv = coreService.getObjectItem('favUniv');
        if (!favUniv) {
            return;
        }

        if (favUniv?.length === 0) {
            return;
        }

        const list = favUniv;
        const univs = list?.map((univ) => {
            return {
                name: univ.name,
                country: univ.country,
                website: univ?.web_pages?.length > 0 ? univ.web_pages[0] : '',
            }
        })
        setUnivList(univs);
        // eslint-disable-next-line
    }, [])

    return (
        <React.Fragment>
            <main>
                <div className="row mb-3 text-center"> 
                    <UnivCard
                    data={univList}
                    disableFavourite={true}
                    />
                </div>
            </main>
            <NewsLetter />
        </React.Fragment>
    );
}

export default Home;