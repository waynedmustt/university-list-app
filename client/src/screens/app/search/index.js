import React, { useEffect, useState } from 'react';
import {
    searchUniversity
} from '../../../apis/university-list';
import UnivCard from '../../../components/univ-card';

const Search = () => {
    const [searchBy, setSearchBy] = useState('');
    const [searchUniv, setSearchUniv] = useState('');
    const [isSearching, setIsSearching] = useState(false);
    const [error, setError] = useState('');
    const [univList, setUnivList] = useState([]);
    
    const search = (e, attr) => {
        e.preventDefault();
        setSearchBy(attr);
    }

    // eslint-disable-next-line
    useEffect(async () => {
        setError('');
        if (['name', 'country'].indexOf(searchBy) === -1 || !searchUniv) {
            setSearchBy('');
            return;
        }
        setIsSearching(true);
        let param = `${searchBy}=${searchUniv}`;

        const response = await searchUniversity(param);
        setIsSearching(false);
        if (response?.status !== 200) {
            setError('error when loading data!');
            return;
        }

        const list = response?.data;
        const univs = list?.map((univ) => {
            return {
                name: univ.name,
                country: univ.country,
                website: univ?.web_pages?.length > 0 ? univ.web_pages[0] : '',
            }
        })
        setUnivList(univs);
        setSearchBy('');
        // eslint-disable-next-line
    }, [searchBy]);

    return (
        <React.Fragment>
            <main>
                <div className="row mb-3 text-center">
                    <div className="col">
                    <div className="input-group mb-3">
                        <input type="text" className="form-control"
                        placeholder="Please Input Name / Country first" 
                        value={searchUniv}
                        onChange={(e) => setSearchUniv(e.target.value)}
                        disabled={isSearching}
                        />
                        <button className="btn btn-outline-secondary dropdown-toggle" 
                        type="button" data-bs-toggle="dropdown" aria-expanded="false">{searchBy ? searchBy : 'Search By: '}</button>
                        <ul className="dropdown-menu dropdown-menu-end">
                            <li><a className="dropdown-item" href="# " onClick={(e) => search(e, 'name')}>Name</a></li>
                            <li><a className="dropdown-item" href="# " onClick={(e) => search(e, 'country')}>Country</a></li>
                        </ul>
                        </div>
                    </div>
                </div>
                <div className="row mb-3 text-center">
                    {error ? 
                        <div className="alert alert-danger" role="alert">
                            {error}
                        </div> : 
                        <UnivCard 
                        data={univList}
                        />
                    }
                </div>
            </main>
        </React.Fragment>
    );
}

export default Search;