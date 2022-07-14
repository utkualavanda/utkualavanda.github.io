import { Tooltip } from '@mui/material';
import { useState } from 'react';
import { useTranslation } from 'react-i18next';

import { Layout } from '../../components';
import { ModalImage } from './Modal-Image';
import { ITravelItem } from './type';

interface IVisitedPlaces {
  italy: ITravelItem[];
  germany: ITravelItem[];
}

export const Travel = () => {
  const { t } = useTranslation();
  const [selectedImage, setSelectedImage] = useState<ITravelItem | null>(null);

  const visitedPlaces: IVisitedPlaces = {
    italy: [
      {
        imagePath: 'images/travel/italy/naples.jpg',
        title: t('travel_naples_title'),
      },
      {
        imagePath: 'images/travel/italy/florence.jpg',
        title: t('travel_florence_title'),
      },
      {
        imagePath: 'images/travel/italy/venice.jpg',
        title: t('travel_venice_title'),
      },
      {
        imagePath: 'images/travel/italy/rome.jpg',
        title: t('travel_rome_title'),
      },
    ],
    germany: [
      {
        imagePath: 'images/travel/germany/hamburg_1.jpg',
        title: t('travel_hamburg_title'),
      },
      {
        imagePath: 'images/travel/germany/hamburg_2.jpg',
        title: t('travel_hamburg_title'),
      },
      {
        imagePath: 'images/travel/germany/lübeck.jpg',
        title: t('travel_lübeck_title'),
      },
      {
        imagePath: 'images/travel/germany/hamburg_3.jpg',
        title: t('travel_hamburg_title'),
      },
    ],
  };

  return (
    <>
      <Layout title={t('header_navigation_travel')}>
        {Object.keys(visitedPlaces).map((key: string, index, arr) => (
          <div className="travel-container" key={index}>
            <div className="travel-header">
              {t(`travel_${arr[index]}_header`)}
            </div>
            {visitedPlaces[key as keyof IVisitedPlaces].map((city, i) => (
              <Tooltip title={city.title} arrow placement="bottom" key={i}>
                <img
                  src={city.imagePath}
                  alt={`travel-${arr[index]}`}
                  onClick={() => {
                    setSelectedImage(
                      visitedPlaces[key as keyof IVisitedPlaces][i]
                    );
                  }}
                />
              </Tooltip>
            ))}
          </div>
        ))}
      </Layout>

      {selectedImage && (
        <ModalImage
          selectedImage={selectedImage}
          open={!!selectedImage}
          onClose={() => {
            setSelectedImage(null);
          }}
        />
      )}
    </>
  );
};
