import React from 'react';
import { coreService } from '../../core/service';

const UnivCard = (props) => {
    const { data, disableFavourite } = props;

    const setFavouriteUniv = (e, univ) => {
        e.preventDefault();
        let favUniv = [];
        if (!coreService.getObjectItem('favUniv')) {
            favUniv.push(univ);
            coreService.setObjectItem('favUniv', favUniv);
            return;
        }

        const oldFavUniv = coreService.getObjectItem('favUniv');
        favUniv.push(...oldFavUniv);
        favUniv.push(univ);
        coreService.setObjectItem('favUniv', favUniv);
    }

    return (
        <React.Fragment>
            {data?.length === 0 ? 
            <div className="alert alert-danger" role="alert">
                {'Data is not available'}
            </div> : 
            data?.map((univ, i) => (
                <div className="col" key={i}>
                    <div className="card mb-4 rounded-3 shadow-sm">
                    <div className="card-header py-3">
                        <h4 className="my-0 fw-normal">{univ.country}</h4>
                    </div>
                    <div className="card-body">
                        <h1 className="card-title pricing-card-title">{univ.name}</h1>
                        <ul className="list-unstyled mt-3 mb-4">
                            <li>
                                <a href={`${univ.website}`} target="_blank" rel="noreferrer">{univ.website}</a>
                            </li>
                        </ul>
                        {
                            !disableFavourite ?
                            <a href="# " onClick={e => setFavouriteUniv(e, univ)}>Set as my favourite university.</a>
                            : null
                        }
                    </div>
                    </div>
                </div>
            ))
            }
        </React.Fragment>
    );
}

export default UnivCard;