import { IMG_URL } from '../../constants/data-constant'
import React from 'react'
import { getStringCommaSaperated } from '../../utils/common-util'

// This component is common for Wish List and Movie details to show to the info about movie
export const ItemInfo = ({ details, clickHandler, isAddedToWishList, buttonLable, fromWishList }) => {
  return (
        <>
            <div className="main-info">
                <div className="img-raw">
                    <img className="detail-img" src={`${IMG_URL}${details.poster_path}`} />
                </div>
                <div className="info-raw">
                    <h1 className="common-pad">{details.title}</h1>
                    <h4 className="common-pad">{details.runtime} Min</h4>
                    <h4 className="common-pad">{details.release_date}</h4>
                    <p className="common-pad">{details.overview}</p>
                    <button aria-label={buttonLable} className="wishlist-btn" onClick={() => clickHandler(details.id)}>{!isAddedToWishList ? 'Add to Wishlist' : 'Remove from wishlist'}</button>
                </div>
            </div>
            {!fromWishList
              ? <div className="extra-info">
                    {details?.genres?.length > 0 && <h4 className="common-pad">Generes : {getStringCommaSaperated(details, 'genres')}</h4>}
                    {<h4 className="common-pad">Adult : {details?.adult ? 'Yes' : 'No'}</h4>}
                    {details?.production_companies?.length > 0 && <h4 className="common-pad">Generes : {getStringCommaSaperated(details, 'production_companies')}</h4>}
                    {details?.production_countries?.length > 0 && <h4 className="common-pad">Generes : {getStringCommaSaperated(details, 'production_countries')}</h4>}
                </div>
              : <></>
            }
        </>
  )
}
