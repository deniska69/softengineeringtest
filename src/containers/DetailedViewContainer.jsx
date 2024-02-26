import React, {Fragment, useState} from 'react';
import {inject, observer} from 'mobx-react';

import Loader from '../components/Loader';
import DetailedView from '../components/DetailedView';
import ModalGallery from '../components/ModalGallery';

const DetailedViewContainer = props => {
  const {id, mode, slingAcademyStore, catsStore} = props;
  const [showModal, setShowModal] = useState(false);

  const onOpenGallery = () => setShowModal(true);

  const onCloseGallery = () => setShowModal(false);

  const item =
    mode === 'cats' ? catsStore.getItem(id) : slingAcademyStore.getItem(id);

  if (!item) {
    return <Loader />;
  }

  return (
    <Fragment>
      <DetailedView {...item} onOpenGallery={onOpenGallery} />
      <ModalGallery
        isOpen={showModal}
        onClose={onCloseGallery}
        uri={item?.url}
      />
    </Fragment>
  );
};

export default inject(
  'slingAcademyStore',
  'catsStore',
)(observer(DetailedViewContainer));
