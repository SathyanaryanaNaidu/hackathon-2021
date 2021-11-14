import React, { useState, useEffect } from 'react';
import PodImage from '@/ui/Avatar';
import podStyle from './pod.style';
import ColorSwatch from 'components/ColorSwatch';
import Button from '@/ui/Button';

const PodCard = ({
  badge,
  brandName,
  productName,
  description,
  media,
  promoted,
  variants
}) => {
  const [swatches, setSwatches] = useState([]);

  const fetchSwatches = (vrnts) => {
    const swatchList = [];
    vrnts.map(({ options }) => {
      options.map(({ value }) => {
        swatchList.push(`#${value}`);
      });
    });

    return swatchList;
  };

  useEffect(() => {
    const list = fetchSwatches(variants);
    setSwatches(list);
  }, [variants]);

  return (
    <div className="product-card">
      {badge && <div className="badge">{badge}</div>}
      {promoted && <div className="promoted">Ad</div>}

      <div className="product-tumb">
        {media && (
          <PodImage url={media} width="280" height="280" name={productName} />
        )}
      </div>

      <div className="product-details">
        <span className="product-catagory">{brandName}</span>
        <h4>
          <span href="" title={productName}>
            {productName}
          </span>
        </h4>
        <ColorSwatch swatches={swatches} />
        {/* <p className="product-description">{description}</p> */}
        <div className="product-bottom-details">
          <div className="product-price">
            <small>$96.00</small>
            <span>$230.99</span>
          </div>
          <div className="product-links">
            <Button
              label={'Add To Cart'}
              strech="full"
              key={`btn-${productName}`}
            />
          </div>
        </div>
      </div>
      <style jsx>{podStyle}</style>
    </div>
  );
};

export default PodCard;
