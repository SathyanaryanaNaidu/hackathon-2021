import React from 'react';
import layOutStyle from './LayoutContainer.style';
import PodCard from 'components/PodCard';
import ContainerWrap from '@/ui/Container';

const LayoutContainer = ({ products }) => {
  const { results = [] } = products;
  return (
    <ContainerWrap>
      {results.map(
        (
          { isBestSeller, brand, displayName, mediaUrls, productId, variants },
          index
        ) => {
          if (index > 30 || (!mediaUrls && !mediaUrls[0]))
            return <React.Fragment />;
          return (
            <PodCard
              key={`${productId}-${index}`}
              badge={isBestSeller && 'BestSeller'}
              brandName={brand}
              productName={displayName}
              description={displayName}
              media={`https://falabella.scene7.com/is/image/Falabella/${productId}?wid=480&hei=480&qlt=70`}
              promoted={index < 2}
              variants={variants}
            />
          );
        }
      )}
      <style jsx>{layOutStyle}</style>
    </ContainerWrap>
  );
};

export default LayoutContainer;
