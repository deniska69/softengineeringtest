import {action, observable, makeAutoObservable, values} from 'mobx';
import {fetchSlingAcademy, getSlingAcademy} from '../services/api';
import {Alert} from 'react-native';

const limitDownloads = 10;

export default class SlingAcademyStore {
  constructor() {
    this.totalItems = 0;
    this.offset = 0;
    this.items = observable.map({});
    this.hasMore = true;
    this.load = false;

    makeAutoObservable(this);
  }

  setItems = action(items => {
    items.forEach(item => this.items.set(item?.id, item));
  });

  getNext = action(() => {
    if (this.load || !this.hasMore) {
      return;
    }

    this.setLoad();

    fetchSlingAcademy(this.offset)
      .then(res => {
        const hasMore = res.offset + limitDownloads <= res?.total_photos;
        this.hasMore = hasMore;
        this.totalItems = res.total_photos;
        this.offset = res.offset + limitDownloads;
        this.setItems(res.photos);
      })
      .catch(() => Alert.alert('Ошибка загрузки.'))
      .finally(() => this.setLoad(false));
  });

  setLoad = action((value = true) => (this.load = value));

  get data() {
    return values(this.items) || [];
  }

  get isLoading() {
    return this.load;
  }

  getItem = id => {
    const item = this.items.get(id);

    if (item) {
      return item;
    } else {
      getSlingAcademy(id)
        .then(res => {
          this.setItems([res.photo]);
          return res.photo;
        })
        .catch(() => Alert.alert('Ошибка загрузки.'))
        .finally(() => this.setLoad(false));
    }
  };
}
