import React, {useLayoutEffect} from 'react';

import DetailedViewContainer from '../containers/DetailedViewContainer';

const DetailedViewScreen = props => {
  const {
    route: {
      params: {params},
    },
    navigation,
  } = props;

  useLayoutEffect(() => {
    navigation.setOptions({
      headerTitle: 'Detailed Screen',
    });
  });

  return <DetailedViewContainer id={params?.id} mode={params?.mode} />;
};

export default DetailedViewScreen;
